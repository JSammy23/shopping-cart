import React from 'react'

const Tile = ({ item }) => {
  return (
    <div className='tile'>
        <img width="80px" src={item.image} alt='Item' />
        <p>{item.title}</p>
        <p>Qt. 1</p>
        <p>${item.price}</p>
    </div>
  )
}

export default Tile