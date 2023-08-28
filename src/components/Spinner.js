import React from 'react'
import loading from './l9.gif'

const Spinner = ()=>{
    return (
      <div className='text-center'>
        <img className = "my-5" src={loading} alt="Loading" />
      </div>
    )
  }


export default Spinner;
