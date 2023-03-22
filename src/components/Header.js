import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom'

const Header = ({ title }) => {
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
        <FontAwesomeIcon className='cartIcon' icon={faShoppingCart} />
    </header>
  )
}

export default Header