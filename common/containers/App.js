import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'
import * as Actions from '../actions'

class App extends Component {
  render() {
    const { date, quotes, activeSlide, dateBackwards, dateForwards } = this.props

    return (
      <div className='container'>
        <Header />
        <Calendar date={date}
                  activeSlideIndex={activeSlide.index}
                  slideDirection={activeSlide.slideDirection}
                  onSlideLeft={dateBackwards}
                  onSlideRight={dateForwards}
                  quotes={quotes} />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { date, quotes, activeSlide } = state
  return { date, quotes, activeSlide }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
