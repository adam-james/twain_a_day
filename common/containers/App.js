import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'

class App extends Component {
  render() {
    const { date, quotes } = this.props

    return (
      <div className='container'>
        <Header />
        <Calendar date={date}
                  quotes={quotes} />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { date, quotes } = state
  return { date, quotes }
}

export default connect(mapStateToProps)(App)
