import React from 'react'
import './Styles.css/footer.css'

export default function Footer() {
  return (
    <div className='Container-footer'>
      <div className='Footer-home'>
        <div>
          <ul className='List-one'>
            <li>
              <a href='http://example.com/rss.xml'>PUFI RAIN</a>
            </li>
            <li>
              <a href='http://example.com/rss.xml'>PUFI PUFF</a>
            </li>
            <li>
              <a href='http://example.com/rss.xml'>PUFI CART</a>
            </li>
            <li>
              <a href='http://example.com/rss.xml'>PUFI NAP</a>
            </li>
          </ul>
        </div>

        <div className='List-two'>
          <ul className='Orderlis'>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>CÓMO COMPORAR</li>
            <li>TÉRMINOS Y CONDICIONES</li>
          </ul>
        </div>

        <div>
          <p>COMPRA 100% SEGURA</p>
        </div>

        <div>
          <p>SIGUENOS</p>
        </div>
      </div>
    </div>
  )
}
