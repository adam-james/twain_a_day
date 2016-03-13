import React, { Component, PropTypes } from 'react'
import CalendarItem from './CalendarItem'

class Calendar extends Component {
  render() {
    const { date, quotes, activeSlideIndex, onSlideRight, onSlideLeft } = this.props

    console.log(activeSlideIndex)
    var calendarItems = quotes.map(function(pair, index) {
      return <CalendarItem quotes={pair} key={index} />
    })

    return (
      <section className='calendar'>
        <div className='calendar-header row'>
          <button className='two columns'
                  onClick={onSlideLeft}>
            Previous
          </button>
          <h3 className='eight columns'>{date}</h3>
          <button className='two columns'
                  onClick={onSlideRight}>
            Next
          </button>
        </div>
        <div className='slider'>
          <div className='slide-viewer'>
            { calendarItems }
          </div>
        </div>
      </section>
    )
  }
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  quotes: PropTypes.array.isRequired,
  activeSlideIndex: PropTypes.number.isRequired,
  onSlideLeft: PropTypes.func.isRequired,
  onSlideRight: PropTypes.func.isRequired
}

export default Calendar
