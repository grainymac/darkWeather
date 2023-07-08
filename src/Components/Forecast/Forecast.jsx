import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import './Forecast.css'
import humidity from './assets/humidity.svg'
import wind from './assets/wind.svg'
import min from './assets/pressure-low.svg'
import max from './assets/pressure-high.svg'
import feelsLike from './assets/thermometer.svg'
import pressure from './assets/barometer.svg'


const Forecast = ({ weather, units }) => {

  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h'

  const cards = [
    {
      id: 1,
      icon: min,
      title: 'min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: max,
      title: 'max',
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: feelsLike,
      title: 'feels like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: pressure,
      title: 'pressure',
      data: weather.pressure,
      unit: 'hPa',
    },
    {
      id: 5,
      icon: humidity,
      title: 'humidity',
      data: weather.humidity,
      unit: '%',
    },
    {
      id: 6,
      icon: wind,
      title: 'wind speed',
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ]

  return (
    <div className='section section__forecast'>
      {cards.map(({ id, icon, title, data, unit}) => (
        <div key={id} className='forecast__card'>
          <div className='forecast__card-icon'>
            <img className='forecast-icon' src={icon} alt='forecast icon' />
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  )
}

export default Forecast