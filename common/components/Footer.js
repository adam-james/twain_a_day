import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a href='http://adamjames.herokuapp.com/' target='_blank'>
          <small>Made by <br></br><span className='signature'>Adam James</span></small>
        </a>
        <br></br>
        <a href='https://github.com/adam-james' target='_blank'>
          <i className='fa fa-github'></i>
        </a>
        {'     '}
        <a href='https://www.linkedin.com/' target='_blank'>
          <i className='fa fa-linkedin-square'></i>
        </a>
      </footer>
    )
  }
}

export default Footer
