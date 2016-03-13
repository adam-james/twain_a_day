import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'
import * as Actions from '../actions'

class App extends Component {
  render() {
    const { date, quotes, activeSlideIndex, slideLeft, slideRight } = this.props

    return (
      <div className='container'>
        <Header />
        <Calendar date={date}
                  activeSlideIndex={activeSlideIndex}
                  onSlideLeft={slideLeft}
                  onSlideRight={slideRight}
                  quotes={quotes} />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { date, quotes, activeSlideIndex } = state
  return { date, quotes, activeSlideIndex }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
