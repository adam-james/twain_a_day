import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import moment from 'moment'

import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'

const app = new Express()
const port = 3000

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use(handleRender)

function handleRender(req, res) {
  const initialState = {
    date: moment().format('MMM Do, YYYY'),
    quotes: [
      [
        `The secret of getting ahead is getting started.`,
        `Clothes make the man. Naked people have little or no influence on society.`
      ],
      [
        `I have never let my schooling interfere with my education.`,
        `Get your facts first, and then you can distort them as much as you please.`
      ],
      [
        `If you tell the truth, you don't have to remember anything.`,
        `Always do right. This will gratify some people and astonish the rest.`
      ],
      [
        `It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.`,
        `Age is an issue of mind over matter. If you don't mind, it doesn't matter.`
      ],
      [
        `Kindness is the language which the deaf can hear and the blind can see.`,
        `The lack of money is the root of all evil.`
      ],
      [
        `All you need in this life is ignorance and confidence, and then success is sure.`,
        `There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.`
      ],
      [
        `You can't depend on your eyes when your imagination is out of focus.`,
        `Whenever you find yourself on the side of the majority, it is time to pause and reflect.`
      ]
    ]
  }

  const store = configureStore(initialState)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const finalState = store.getState()

  res.send(renderFullPage(html, finalState))
}

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Twain a Day</title>
      <link href='https://fonts.googleapis.com/css?family=Rock+Salt|EB+Garamond|Tangerine' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    </head>
    <body>
      <div id ="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script type="text/javascript" src="/static/bundle.js"></script>
    </body>
    </html>
  `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on port ${port}.`)
  }
})
