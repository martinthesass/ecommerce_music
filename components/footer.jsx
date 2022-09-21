import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'


const footer = () => {
  return (
    <div class='footer-container'>
      <p> Majestic headphones all rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>

    </div>
  )
}

export default footer