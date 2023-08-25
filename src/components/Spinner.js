import React, { Component } from 'react'
import loading from './l9.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className = "my-5" src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
