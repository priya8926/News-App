import React from 'react'
import loading from './l12.gif'

const Spinner = ()=>{
    return (
      <div className='text-center'>
        <img className = "my-5" src={loading} alt="Loading"  style={{ width: '80px', height: '80px' }}/>
      </div>
    )
  }


export default Spinner;
