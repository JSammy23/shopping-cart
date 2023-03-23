import React from 'react'

const Tile = ({ item, removeItem }) => {

    const handleRemoveClick = () => {
        removeItem(item.id);
    };

  return (
    <div className='tile'>
        <img width="80px" src={item.image} alt='Item' />
        <div className="tileWrapper">
            <div className="tile-info">
                <p>{item.title}</p>
                <p>${item.price}</p>
            </div>
            <div className="tile-info">
                <p>qt. 1</p>
                <button onClick={handleRemoveClick}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default Tile