export const SLIDE_LEFT = 'SLIDE_LEFT'
export const SLIDE_RIGHT = 'SLIDE_RIGHT'

export const DATE_FORWARD = 'DATE_FORWARD'
export const DATE_BACKWARD = 'DATE_BACKWARD'

export function slideLeft() {
  return {
    type: SLIDE_LEFT
  }
}

export function slideRight() {
  return {
    type: SLIDE_RIGHT
  }
}
