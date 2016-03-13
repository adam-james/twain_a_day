import React, { Component, PropTypes } from 'react'

class CalendarItem extends Component {
  render() {
    const { quotes, className } = this.props

    return (
      <div className={`row calendar-item ${className}`}>
        <p>
          {quotes[0]}
        </p>
        <p>
          {quotes[1]}
        </p>
      </div>
    )
  }
}

CalendarItem.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  className: PropTypes.string.isRequired
}

export default CalendarItem
