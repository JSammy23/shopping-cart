import React from 'react'
import '../components/styles/Card.Styles.css'

const Card = ({ title, image, price }) => {

  

  return (
    <>
      <div className="cardCont">
        <div className='card' >
          <img  src={image} alt="Character" className='card-img' />
          <h2 className='title'>{title}</h2>
          <p className='price'>${price}</p>
          <button className='addBtn'>Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Card