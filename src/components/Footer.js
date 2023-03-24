import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import './styles/Footer.Styles.css'

const Footer = () => {
  return (
    <footer>
        <a href="https://github.com/JSammy23/shopping-cart"
        target='_blank' rel="noreferrer">
            by JSammy23
            <FontAwesomeIcon className='footer-logo' icon={faGithub} />
        </a>
    </footer>
  )
}

export default Footer