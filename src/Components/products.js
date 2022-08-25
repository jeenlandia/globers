import React from 'react'
import './Styles.css/products.css'

export default function Products() {
  return (
    <div className='Container'>
      <div className='Container-cards'>
        <div className='Item-one'>
          <div>
            <img className='Oneimage' src='/assets/lluviapuf.JPG'></img>
          </div>
          <button className='Button-home'>SHOP</button>
        </div>

        <div className='Item-two'>
          <div className='Imagenproduct'>
            <img className='Twoimage' src='assets/sombrilapufi.jpg'></img>
          </div>
          <div>
            <h1>Pufi RAIN</h1>
            <h3>Descripcion del producto. Este es un texto simulado</h3>
            <p a href='#'>
              VER MAS
            </p>
          </div>
        </div>

        <div className='Item-tre'>
          <div className='Imagenproduct'>
            <img className='Treimage' src='/assets/pufi.JPG'></img>
          </div>
          <h1>Pufi PUFF</h1>
          <h3>Descripcion del producto. Este es un texto simulado</h3>
          <p a href='#'>
            VER MAS
          </p>
        </div>

        <div className='Item-four'>
          <div>
            <img className='Fourimage' src='/assets/duplapufi.jpg'></img>
          </div>
        </div>

        <div className='Item-five'>
          <div>
            <img className='Fiveimage' src='/assets/bolsaspufi.jpg'></img>
          </div>
        </div>

        <div className='Item-six'>
          <div className='Imagenproduct'>
            <img className='Siximagen' src='/assets/pufi.JPG'></img>
          </div>
          <h1>Pufi CART</h1>
          <h3>Descripcion del producto. Este es un texto simulado</h3>
          <p a href='!#'>
            VER MAS
          </p>
        </div>

        <div className='Item-seven'>
          <div className='Imagenproduct'>
            <img className='Sevenimagen' src='/assets/pufi.JPG'></img>
          </div>
          <h1>Pufi NAP</h1>
          <h3>Descripcion del producto. Este es un texto simulado</h3>
          <p a href='!#'>
            MÁS INFO
          </p>
        </div>

        <div className='Item-eight'>
          <div>
            <img className='Eightimagen' src='/assets/pufihome.jpg'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
