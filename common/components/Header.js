import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className='row header'>
        <h1 className='title'>Twain a Day</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Mark_Twain_Vanity_Fair_1908-05-13.jpeg'
             alt='Mark Twain'
             style={{height: '250px'}}>
        </img>
        <small className='tagline'>Two Mark Twain quotes for each day of the week.</small>
      </header>
    )
  }
}

export default Header
