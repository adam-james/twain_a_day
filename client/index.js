import 'file?name=[name].[ext]!./index.html'
import './scss/application.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import moment from 'moment'
import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'

const initialState = {
  date: {
    counter: 0,
    date: moment().format('MMM Do, YYYY')
  },
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

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
