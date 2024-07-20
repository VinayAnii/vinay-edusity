import React from 'react'
import './Main.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Main = () => {
  return (
    <div className='main container'>
        <div className='main-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculm is designed to empower students with the knowledge, skills, and 
            experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Main