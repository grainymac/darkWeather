import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import '/Forecast.css'

const Forecast = () => {

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    
  ]
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