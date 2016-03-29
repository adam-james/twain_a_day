import { combineReducers } from 'redux'
import {
  SLIDE_LEFT,
  SLIDE_RIGHT,
  INCREMENT_DATE_COUNTER,
  DECREMENT_DATE_COUNTER,
  SET_DATE } from '../actions'
import moment from 'moment'

function activeSlide(state = {
  index: 0,
  slideDirection: ''
}, action) {
  switch (action.type) {
    case SLIDE_LEFT:
      if (state.index === 0) {
        return Object.assign({}, state, {
          slideDirection: 'slide-left',
          index: 6
        })
      } else {
        return Object.assign({}, state, {
          slideDirection: 'slide-left',
          index: state.index - 1
        })
      }
    case SLIDE_RIGHT:
      if (state.index === 6) {
        return Object.assign({}, state, {
          slideDirection: 'slide-right',
          index: 0
        })
      } else {
        return Object.assign({}, state, {
          slideDirection: 'slide-right',
          index: state.index + 1
        })
      }
    default:
      return state
  }
}

function date(state = {
  counter: 0,
  date: moment().format('MMM Do, YYYY')
}, action) {
  switch (action.type) {
    case SET_DATE:
      if (state.counter < 0) {
        return Object.assign(state, {}, {
          date: moment().subtract(Math.abs(state.counter), 'days').format('MMM Do, YYYY')
        })
      } else {
        return Object.assign(state, {}, {
          date: moment().add(state.counter, 'days').format('MMM Do, YYYY')
        })
      }
    case INCREMENT_DATE_COUNTER:
      return Object.assign(state, {}, {
        counter: state.counter + 1
      })
    case DECREMENT_DATE_COUNTER:
      return Object.assign(state, {}, {
        counter: state.counter - 1
      })
    default:
      return state
  }
}

function quotes(state = [], action) {
  return state
}

const rootReducer = combineReducers({
  activeSlide,
  date,
  quotes
})

export default rootReducer
