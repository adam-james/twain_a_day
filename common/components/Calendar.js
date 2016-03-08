import React, { Component, PropTypes } from 'react'
import CalendarItem from './CalendarItem'

class Calendar extends Component {
  render() {
    const { date, quotes } = this.props
    return (
      <section className='calendar'>
        <div className='calendar-header row'>
          <button className='two columns'>Previous</button>
          <h3 className='eight columns'>{date}</h3>
          <button className='two columns'>Next</button>
        </div>
        <CalendarItem quotes={quotes} />
      </section>
    )
  }
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  quotes: PropTypes.array.isRequired
}

export default Calendar
