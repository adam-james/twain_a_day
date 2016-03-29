export const SLIDE_LEFT = 'SLIDE_LEFT'
export const SLIDE_RIGHT = 'SLIDE_RIGHT'

export const INCREMENT_DATE_COUNTER = 'INCREMENT_DATE_COUNTER'
export const DECREMENT_DATE_COUNTER = 'DECREMENT_DATE_COUNTER'
export const SET_DATE = 'SET_DATE'

function slideLeft() {
  return {
    type: SLIDE_LEFT
  }
}

function slideRight() {
  return {
    type: SLIDE_RIGHT
  }
}

function incrementDateCounter() {
  return {
    type: INCREMENT_DATE_COUNTER
  }
}

function decrementDateCounter() {
  return {
    type: DECREMENT_DATE_COUNTER
  }
}

function setDate() {
  return {
    type: SET_DATE
  }
}

export function dateForwards() {
  return function(dispatch) {
    dispatch(incrementDateCounter())
    dispatch(setDate())
    dispatch(slideRight())
  }
}

export function dateBackwards() {
  return function(dispatch) {
    dispatch(decrementDateCounter())
    dispatch(setDate())
    dispatch(slideLeft())
  }
}
