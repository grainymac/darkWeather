import React, { useState } from 'react'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Forecast from '../Forecast/Forecast'
import Search from '../Search/Search'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../apiCalls'
import './App.css'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ')

    const getCurrentWeather = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)

    const getForecast = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([getCurrentWeather, getForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => console.error(err))
  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App