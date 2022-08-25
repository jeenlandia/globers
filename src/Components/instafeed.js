import React from 'react'
import './Styles.css/instafeed.css'

export default function Instafeed() {
  return (
    <div className='Insta-home'>
      <div className='Text-feed'>
        <p>INSTAGRAM</p>
        <h1>#ESPUFI</h1>
      </div>
      <div className='Photo'>
        <img className='Photo-feed' src='./assets/pufihome.jpg' />
      </div>
    </div>
  )
}
