import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = ({ title, handleClick, cartItems, isShaking }) => {

  return (
    <header>
        <h1 className='title' >{title}</h1>
        <nav>
            <ul>
                <li>
                    <Link className='even' to='/' >Home</Link>
                </li>
                <li >
                    <Link className='odd' to='/shop' >Shop</Link>
                </li>
            </ul>
        </nav>
        <FontAwesomeIcon className={`cartIcon ${cartItems.length > 0 ? 'active' : ''} ${isShaking ? 'shake' : ''}`} icon={faCartShopping}
        onClick={handleClick} />
    </header>
  )
}

export default Header