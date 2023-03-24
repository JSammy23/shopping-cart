import React from 'react'
import '../components/styles/Cart.Styles.css'
import Tile from './Tile'

const Cart = ({ isOpen, handleCloseCart, addItem, removeItem, cartItems, updateQuantity}) => {

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
                <Tile key={item.id} item={item} quantity={item.quantity} removeItem={removeItem} updateQuantity={updateQuantity} />
            ))}
        </div>
        <div className="cart-total">
            {/* <button>Check Out Now ({total})</button> */}
            <button className='checkoutBtn cancel' >Close</button>
        </div>
    </div>
  )
}

export default Cart