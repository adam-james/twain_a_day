import './scss/application.scss'
import React from 'react'
import { render } from 'react-dom'
import Calendar from './components/Calendar'

render(
  <Calendar />,
  document.getElementById('calendar')
)
