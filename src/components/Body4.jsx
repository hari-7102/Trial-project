import React from 'react'

import Rectangle1 from '../assets/Rectangle1.png'
import Rectangle2 from '../assets/Rectangle2.png'
import man2 from '../assets/man2.png'
import Rectangle3 from '../assets/Rectangle3.png'
import correct from '../assets/correct.png'
import Button from '../assets/Button.png' 

import business from '../assets/business.png'




const Body4 = () => {
  return (
    <div>
        <div>
            <div className='justify-center flex flex-col items-center my-16'>
                <h2 className='font-bold text-3xl text-slate-800'>Our latest updates for you here!</h2>
                <h3>Whats heppening around the World.</h3>
            </div>
            <div className='flex mx-36 gap-10'>
                <div className=''>
                    <img src={Rectangle1} alt="" />
                    <h2 className='text-sm my-3'>Growth</h2>
                    <h2 className=' text-slate-700 text-xl py-2'>15 ways to grow your saas in 21 days with no money</h2>
                    <img src={Button} alt="" />
                </div>
                <div className=''>
                    <img src={Rectangle2} alt="" />
                    <h2 className='text-sm my-3'>Carrer</h2>
                    <h2 className=' text-slate-700 text-xl py-2'>15 ways to grow your saas in 21 days with no money</h2>
                    <img src={Button} alt="" />
                </div>
                <div className=''>
                    <img src={Rectangle3} alt="" />
                    <h2 className='text-sm my-3'>Design</h2>
                    <h2 className=' text-slate-700 text-xl py-2'>15 ways to grow your saas in 21 days with no money</h2>
                    <img src={Button} alt="" />
                </div>
            </div>
        </div>


        <div className='w-full h-full flex '>
            <div className='w-1/2 h-full items-center mx-32 py-20'>
                <h2 className='text-4xl font-bold max-w-[454px] my-7 text-slate-700'>Let your business thrive under our supervision</h2>
                <h2 className='max-w-[454px] py-2'>Launch a business today with our help and get it done with amazing launch features,
                             websites and more with uifry.
                             We help business like yours thrive every day and beyond</h2>
                <div className='flex  items-center py-6 '>
                    <div className='flex'>
                        <img src={correct} alt="" className=''/>
                        <h2 className='px-3'> 100+ <br></br>Successfuly Project</h2>
                    </div>
                    <div className='flex'>
                        <img src={correct} alt="" className=''/>
                        <h2 className='px-3'> 978+ <br></br>Client Today</h2>
                    </div>
                </div>
                    <div className='flex items-center'>
                        <button className="border-2 border-solid rounded-lg p-3  my-10 bg-red-200 font-bold  ">Contact Now</button>
                        <img src={Button} alt="" className='mx-4' />
                        <h2>Book a Demo Section </h2>
                    </div>
                
            </div>

            <div className='w-1/2 h-full '>
                <div className='w-[440px] h-[450px] bg-gray-300 relative top-11 float-end mx-52 my-12 '>
                    <div className='relative right'>
                        <img src={man2} alt="" className="w-[23rem] h-[33rem] relative bottom-20"/>
                        <img src={business} alt="" className='absolute top-36 -right-44'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Body4