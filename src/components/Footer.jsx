import React from 'react'
import ppp from '../assets/ppp.png'

import instagram from '../assets/instagram.png'
import flickr from '../assets/flickr.png'
import twitter from '../assets/twitter.png'
import pinterest from '../assets/pinterest.png'





const Footer = () => {
  return (
    <div className='py-12 px-20' >
        <div className='flex items-center justify-between   '>
            <div className='flex items-center '>
                <img src={ppp} alt="" />
                <h2 className='font-bold text-3xl mx-2'>Uifry</h2>
            </div>
            <div className='flex gap-20'>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Pricing</h2>
                <h2>Blog</h2>
                <h2>Contact</h2>
            </div>
        </div>

        <hr class="border-t-2 border-gray-600 my-10 mx-4" />

        <div className='flex items-center justify-between  '>
            <div>
                <h2>All rights reserved ® uifry.com  | Terms and conditions apply!</h2>
            </div>
            <div className='flex p-'>
                <img src={instagram} alt="" />
                <img src={flickr} alt="" />
                <img src={pinterest} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>


        
    </div>
  )
}

export default Footer