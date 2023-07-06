import React, { useState } from 'react'
import './App.css'
import hotBackground from '../../assets/hot-background.jpg'
import coldBackground from '../../assets/cold-background.jpg'

const App = () => {

  return (
    <div className='app' style={{ backgroundImage: `url(${coldBackground})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__input">
            <input type='text' name='city' placeholder='Enter City...' />
            <button>°F</button>
          </div>

          <div className='section section__temperature'>
            <div className='weather-icon'>
              <h3>CITY</h3>
              <img src='' alt='weather icon' />
              <h3>WEATHER</h3>
            </div>
            <div className='temperature'>
              <h1>00°</h1>
            </div>
          </div>

          {/* botton description */}
          <Forecast />
        </div>
      </div>
    </div>
  )
}

export default App