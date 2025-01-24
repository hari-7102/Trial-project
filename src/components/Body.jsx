import React from 'react'
import Girl from '../assets/Girl.png'

import pic1 from '../assets/pic1.png'
import Button from '../assets/Button.png'

import Button3 from '../assets/Button3.png'






const Body = () => {
  return (
    <div className='w-full h-full flex items-center'>

        <div className='w-1/2 h-full'>
            <div className=' font-bold text-6xl p-12 '>
                Lanuch a Software businesses website today with us ! 
            </div>
            <div className=' mx-12 text-lg w-[560px]'>
                <p>Launch a business today with our help and get it done with amazing launch features,
                 websites and more with uifry. We help business like yours thrive every day and beyond.</p>
            </div>
            <div className='flex items-center mx-12'>
                <button className="border-2 border-solid rounded-lg p-3  my-10 bg-red-200 font-bold  ">Contact Now</button>
                <img src={Button} alt="" className='mx-4' />
                <h2>Book a Demo Section </h2>
            </div>
            <div className='flex items-center mx-9'>
                <img src={Button3} alt="" className='mx-4' />
                <h2>Rated 4.9 out of 1200 reviews</h2>
            </div>
        </div>

        <div className='w-1/2 h-full '>
            <div className='w-[440px] h-[450px] bg-red-300 relative top-4 float-end mx-20 my-10 '>
            <div className='absolute -top-16 -left-20'>
                <img src={Girl} alt="" className="w-[28rem] h-[32rem] mb-16" />
                <img src={pic1} alt="" className='absolute top-4 -left-28'/>
            </div>

            </div>
        </div>

        
    </div>
  )
}

export default Body