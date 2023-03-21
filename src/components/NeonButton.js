import React from 'react'
import NeonButtonStyles from'../components/styles/NeonButton.Styles.css'

const NeonButton = ({ text }) => {
  return (
    <button className='neon-button'>{text}</button>
  )
}

export default NeonButton