import moment from 'moment'
import { DATE_FORWARD, DATE_BACKWARD } from '../actions'

export default function date(state, action) {
  switch (action.type) {
    case DATE_FORWARD:
      return moment().add(1, 'days').format('MMM Do, YYYY')
    case DATE_BACKWARD:
      return moment().subtract(1, 'days').format('MMM Do, YYYY')
    default:
      return state
  }
}
