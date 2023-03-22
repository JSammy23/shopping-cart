import React from 'react'
import '../components/styles/Cart.Styles.css'

const Cart = ({ isOpen, handleCloseCart}) => {

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
        {/* cart items listed here */}
    </div>
  )
}

export default Cart