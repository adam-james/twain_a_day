import { combineReducers } from 'redux'
import {
  SLIDE_LEFT,
  SLIDE_RIGHT,
  DATE_FORWARD,
  DATE_BACKWARD  } from '../actions'
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

function date(state = moment().format('MMM Do, YYYY'), action) {
  switch (action.type) {
    case DATE_FORWARD:
      return moment().add(1, 'days').format('MMM Do, YYYY')
    case DATE_BACKWARD:
      return moment().subtract(1, 'days').format('MMM Do, YYYY')
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
