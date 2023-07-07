import React, { useEffect, useState } from 'react'
import './App.css'
import hotBackground from '../../assets/hot-background.jpg'
import coldBackground from '../../assets/cold-background.jpg'

const App = () => {

  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData('paris', units)
      setWeather(data)
    }

    fetchWeatherData()
  }, [])

  return (
    <div className='app' style={{ backgroundImage: `url(${coldBackground})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section__input">
                <input type='text' name='city' placeholder='Enter City...' />
                <button>°F</button>
              </div>

              <div className='section section__temperature'>
                <div className='weather-icon'>
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt='weather icon' />
                  <h3>{weather.forecast}</h3>
                </div>
                <div className='temperature'>
                  <h1>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</h1>
                </div>
              </div>

              <Forecast weather={weather} units={units} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App