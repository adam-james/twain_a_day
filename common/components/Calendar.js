import React, { Component, PropTypes } from 'react'
import CalendarItem from './CalendarItem'

class Calendar extends Component {
  render() {
    const { date, quotes, activeSlideIndex, slideDirection, onSlideRight, onSlideLeft } = this.props

    var calendarItems = quotes.map(function(pair, index) {
      return <CalendarItem  className={ activeSlideIndex === index ? ('active-slide ' + slideDirection) : ''}
                            quotes={pair}
                            key={index} />
    })

    return (
      <section className='calendar'>
        <div className='calendar-header row'>
          <button className='two columns'
                  onClick={onSlideLeft}>
            Previous
          </button>
          <h3 className='eight columns'>{date.date}</h3>
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
  date: PropTypes.object.isRequired,
  quotes: PropTypes.array.isRequired,
  activeSlideIndex: PropTypes.number.isRequired,
  slideDirection: PropTypes.string.isRequired,
  onSlideLeft: PropTypes.func.isRequired,
  onSlideRight: PropTypes.func.isRequired
}

export default Calendar
