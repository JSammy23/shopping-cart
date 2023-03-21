import React from 'react'
import Cat from '../assets/images/logo.png';
import NeonButton from '../components/NeonButton';

const Home = () => {
  return (
    <div className='flex home'>
        <div className='overlay'>
            <h1 className='gradient-text' >Where Furball Meets Fashion</h1>
            <NeonButton text="Shop Now"/>
        </div>
        <div>
            <img src={Cat} width='600px' alt="Cool Cat" />
        </div>
    </div>
  )
}

export default Home