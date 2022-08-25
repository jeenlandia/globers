import React from 'react'
import ContactForm from './contactForm'
import './Styles.css/newsletter.css'

export default function Newsletter() {
  return (
    <div className='News-home'>
      <div className='Text-news'>
        <p>NEWSLETTER</p>
        <h1>SUSCRIBITE</h1>
        <p>Y enterate de todas las novedades</p>
      </div>

      <div className='Formnews'>
        <ContactForm />
      </div>
    </div>
  )
}
