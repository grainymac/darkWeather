import React from 'react'
import { faArrowDown } from 'react-icons/fa'
import '/Forecast.css'

const Forecast = () => {
  return (
    <div className='section section__forecast'>
      <div className='forecast__card'>
        <div className='forecast__card-icon'>
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>0°C</h2>
      </div>
    </div>
  )
}

export default Forecast