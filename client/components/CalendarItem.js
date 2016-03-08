import React, { Component } from 'react'

export default class CalendarItem extends Component {
  render() {
    return (
      <div className='row calendar-item'>
        <p>
          {`The secret of getting ahead is getting started.`}
        </p>
        <p>
          {`Clothes make the man. Naked people have little or no influence on society`}
        </p>
      </div>
    )
  }
}
