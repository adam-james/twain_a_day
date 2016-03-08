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
      `The secret of getting ahead is getting started.`,
      `Clothes make the man. Naked people have little or no influence on society.`
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
