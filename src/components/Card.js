import React, { useState } from 'react'

const Card = ({ title, image }) => {

  

  return (
    <div className='card' >
        <img src={image} alt="Character" className='card-img' />
        <h2 className='title'>{title}</h2>
        <button className='addBtn'>Add To Cart</button>
    </div>
  )
}

export default Card