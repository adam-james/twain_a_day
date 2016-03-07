import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <main><p>{this.props.message}</p></main>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(App)
