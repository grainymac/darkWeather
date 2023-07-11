import React, { useEffect, useState } from 'react'
import './App.scss'
import { getWeatherData } from '../../apiCalls'
import Forecast from '../Forecast/Forecast'
import Footer from '../Footer/Footer'
import { Loader } from 'react-loaders'

const App = () => {

  const [city, setCity] = useState('Fort Worth')
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(city, units)
        setWeather(data)
        setError(null)
      } catch (error) {
        setWeather(null)
        setError('City not found')
      }
    }

    fetchWeatherData()
  }, [units, city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget
    const currentUnit = button.innerText.slice(1)

    const isCelcius = currentUnit === 'C'
    button.innerText = isCelcius ? '°F' : '°C'
    setUnits(isCelcius ? 'metric' : 'imperial')
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }


  return (
    <>
      <div className='app'>
        <div className="overlay">
          {error ? (
            <div className='error-container'>
              <h1 className='error-title'>{error}</h1>
              <p className='error-message'>Click button to go back home</p>
              <a href='/'><button className='error-button'>Home</button></a>
            </div>
          ) : (
            weather && (
              <div className="container">
                <div className="section section__inputs">
                  <input onKeyDown={handleKeyPress} type='text' name='city' placeholder='Enter City...' />
                  <button onClick={(e) => handleUnitsClick(e)}>°F</button>
                </div>

                <div className='section section__temperature'>
                  <div className='weather-icon'>
                    <h3 className='weather-city'>{`${weather.name}, ${weather.country}`}</h3>
                    <img src={weather.iconURL} alt='weather icon' />
                    <h3>{weather.forecast}</h3>
                  </div>
                  <div className='temperature'>
                    <h1 className='weather-temp'>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</h1>
                  </div>
                </div>

                <Forecast weather={weather} units={units} />
                <Footer />
              </div>
            )
          )}
        </div>
      </div>
      <Loader type='ball-clip-rotate-multiple' />
    </>
  )
}

export default App