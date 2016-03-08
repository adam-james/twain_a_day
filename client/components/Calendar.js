import React, { Component } from 'react'
import moment from 'moment'
import CalendarItem from './CalendarItem'

export default class Calendar extends Component {
  render() {
    return (
      <section className='calendar'>
        <div className='calendar-header row'>
          <button className='two columns'>Previous</button>
          <h3 className='eight columns'>{moment().format('MMM Do, YYYY')}</h3>
          <button className='two columns'>Next</button>
        </div>
        <CalendarItem />
      </section>
    )
  }
}
