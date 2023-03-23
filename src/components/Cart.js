import React from 'react'
import '../components/styles/Cart.Styles.css'
import Tile from './Tile'

const Cart = ({ isOpen, handleCloseCart, addItem, removeItem, cartItems}) => {

    const cartClass = isOpen ? 'cart open' : 'cart'
    
    const handleCartClose = () => {
        handleCloseCart();
    };

  return (
    <div className={cartClass}>
        <div className="cartHeader">
            <h2>Your Shopping Cart</h2>
            <button className='pulse' onClick={handleCartClose}>Close</button>
        </div>
        {/* cart items listed here in tile form */}
        <div className="cart-items">
            {cartItems.map((item) => (
                <Tile item={item} removeItem={removeItem} />
            ))}
        </div>
    </div>
  )
}

export default Cart