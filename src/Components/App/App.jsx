import React, { useState } from 'react'
import './App.css'

const App = () => {

  const apiKey = '23448f48b958ddb737240a98bf3344fe'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/3.0/weather?q=${city}&units=imperial&APPID=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
      }
      )
    }
  }

  return (
    <div className='container'>
      <input className='input' placeholder='Enter City...' onChange={e => setCity(e.target.value)} value={city} onKeyPress={getWeather}/>
    </div>
  )
}

export default App