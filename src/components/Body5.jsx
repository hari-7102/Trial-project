import React from 'react'

import correct from '../assets/correct.png'
import clock1 from '../assets/clock1.png'
import upload from '../assets/upload.png'

import Button from '../assets/Button.png'
import ppp from '../assets/ppp.png'


const Body5 = () => {
  return (
    <div>
        <div>
            <div className=" flex justify-between rounded-md border-2 border-gray-300 border-solid p-12 my-14 mx-14  bg-indigo-800" >
            <div className='flex items-center max-w-80 mx-14'>
                <img src={correct} alt="" className='mx-3'/>
                <h2 className='text-gray-50'> Super useful and easy to with over 100+ customisations!</h2>
            </div>

            <div className='flex items-center  max-w-80 mx-20'>
                <img src={clock1} alt="" className='mx-3'/>
                <h2 className='text-gray-50'>Super useful and easy to with over 100+ customisations!</h2>
            </div>

            <div className='flex items-center  max-w-80'>
                <img src={upload} alt="" className='mx-3'/>
                <h2 className='text-gray-50'>Super useful and easy to with over 100+ customisations!</h2>
            </div>  
            </div>
        </div>

        <div>
            <div className='flex flex-col items-center my-5'>
                <img src={ppp} alt="" className='my-3'/>
                <h2 className='text-4xl my-2'>Frequently asked questions</h2>
                <h3>Whats happening around the World.</h3>
                <div className='py-6 max-w-[77rem]'>
                    <div className='brounded-md border-2 border-gray-300 border-solid p-7  bg-indigo-800'>
                        <h2 className='text-white  flex items-start justify-start'>What is the best way to create a saas business today?</h2>
                    </div>
                    <div>
                        <h2 className='p-5'>Launch a business today with our help and get it done with amazing launch features,
                             websites and more with uifry. We help business like yours thrive every day and beyond. 
                             Launch a business today with our help and get it done with amazing launch features, websites and more with uifry.
                             We help business like yours thrive every day and beyond.</h2>
                        
                        <h2 className='p-5'>Launch a business today with our help and get it done with amazing launch features,
                             websites and more with uifry. We help business like yours thrive every day and beyond. 
                             Launch a business today with our help and get it done with amazing launch features, websites and more with uifry.
                             We help business like yours thrive every day and beyond.</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className="border-2 border-solid rounded-lg p-3  my-10 bg-red-200 font-bold  ">Contact Now</button>
                        <img src={Button} alt="" className='mx-4' />
                        <h2>Book a Demo Section </h2>
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body5