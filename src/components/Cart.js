import React from 'react'
import '../components/styles/Cart.Styles.css'

const Cart = ({ isOpen, handleCloseCart}) => {

    const cartClass = isOpen ? 'cart open' : 'cart'
    
    const handleCartClose = () => {
        handleCloseCart();
    };

  return (
    <div className={cartClass}>
        <h2>Your Shopping Cart</h2>
        <button onClick={handleCartClose}>X</button>
        {/* cart items listed here */}
    </div>
  )
}

export default Cart