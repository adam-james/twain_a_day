import { SLIDE_LEFT, SLIDE_RIGHT } from '../actions'

export default function activeSlideIndex(state = 0, action) {
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
