import React from 'react'

const Tile = ({ item, removeItem, quantity, updateQuantity }) => {

    const handleRemoveClick = () => {
        removeItem(item.id);
    };

    const handleDecreaseClick = () => {
        if (quantity === 1) {
            return;
        }
        updateQuantity(item.id, quantity - 1);
    };
    
    const handleIncreaseClick = () => {
        updateQuantity(item.id, quantity + 1);
    };

  return (
    <div className='tile'>
        <img width="80px" src={item.image} alt='Item' />
        <div className="tileWrapper">
            <div className="tile-info">
                <p>{item.title}</p>
                <p>${item.price * quantity}</p>
            </div>
            <div className="tile-info">
                <p>Quantity: {quantity}</p>
                <div>
                    <button className='tileBtn' onClick={handleRemoveClick}>Remove</button>
                    <button className='tileBtn' onClick={handleDecreaseClick}>-</button>
                    <button className='tileBtn' onClick={handleIncreaseClick}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tile