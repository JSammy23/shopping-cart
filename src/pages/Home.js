import React from 'react'
import Cat from '../assets/images/logo.png';
import NeonButton from '../components/NeonButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex home'>
        <div className='overlay'>
            <h1 className='gradient-text' >Where Furball Meets Fashion</h1>
            <Link to='/shop' >
                <NeonButton text="Shop Now"/>
            </Link>
        </div>
        <div>
            <img src={Cat} width='600px' alt="Cool Cat" />
        </div>
    </div>
  )
}

export default Home