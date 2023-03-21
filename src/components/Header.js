import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/fontawesome-free-solid'

const Header = ({ title }) => {
  return (
    <header>
        <h1 className='title' >{title}</h1>
        <nav>
            <ul>
                <li className='even'>Home</li>
                <li className='odd' >Shop</li>
            </ul>
        </nav>
        <FontAwesomeIcon className='cartIcon' icon={faShoppingCart} />
    </header>
  )
}

export default Header