import { combineReducers } from 'redux'
import {
  SLIDE_LEFT,
  SLIDE_RIGHT,
  INCREMENT_DATE_COUNTER,
  DECREMENT_DATE_COUNTER,
  SET_DATE } from '../actions'
import moment from 'moment'

function activeSlideIndex(state = 0, action) {
  switch (action.type) {
    case SLIDE_LEFT:
      if (state === 0) {
        return 6
      } else {
        return state - 1
      }
    case SLIDE_RIGHT:
      if (state === 6) {
        return 0
      } else {
        return state + 1
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
  activeSlideIndex,
  date,
  quotes
})

export default rootReducer
