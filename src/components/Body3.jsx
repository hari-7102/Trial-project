import React from 'react'
import incorrect from '../assets/correct.png'
import girl3 from '../assets/girl3.png'
import business from '../assets/business.png'
import ppp from '../assets/ppp.png'
import clock1 from '../assets/clock1.png'
import total from '../assets/total.png'
import upload from '../assets/upload.png'

const Body3 = () => {
  return (
    <div>
        <div className=" flex justify-between rounded-md border-2 border-gray-300 border-solid p-12 my-14 mx-14  bg-indigo-800" >
            <div className='flex items-center max-w-80 mx-14'>
                <img src={incorrect} alt="" className='mx-3'/>
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

        <div className='w-full h-full flex '> 
            <div className='w-1/2 h-full items-center mx-32'>
                <h2 className='text-3xl font-bold w-96 my-4 text-slate-700'>Let your business thrive under our supervision</h2>
                <h2 className='w-96'>Launch a business today with our help and get it done with amazing launch features,
                             websites and more with uifry.
                             We help business like yours thrive every day and beyond</h2>
                <h2 className='py-6'>We are making every business grow!</h2>
            <div className='flex items-center py-2 '>
                <img src={upload} alt="" className=''/>
                <h2 className='px-3'>Super useful and easy to use interface</h2>
            </div>
            <div className='flex items-center '>
                <img src={clock1} alt="" className=''/>
                <h2 className='px-3'>Easiest way to grow your business in days</h2>  
            </div>
            <div>
                <img src={total} alt=""  className='py-4'/>
            </div>
            </div>

            <div className='w-1/2 h-full '>
                <div className=''>
                        <div className='relative flex my-3'>
                            <img src={girl3} alt="" className="w-[28rem] h-[37rem] " />
                            <img src={business} alt="" className='w-[33rem] h-[28rem] absolute top-48 left-44'/>
                            <img src={ppp} alt="" className='w-[4rem] h-[5rem] absolute left-[416px]'/>

                        </div>           
                </div>
            </div>
        </div>



    </div>
  )
}

export default Body3