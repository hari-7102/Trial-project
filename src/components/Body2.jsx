
import icon from '../assets/icon.png'
import marvel from '../assets/marvel.png'
import notion from '../assets/notion.png'
import shazam from '../assets/shazam.png'
import treehouse from '../assets/treehouse.png'
import zapier from '../assets/zapier.png'
import rrr from '../assets/rrr.png'
import man from '../assets/man.png'
import pic1 from '../assets/pic1.png'
import correct from '../assets/correct.png'

import contbutton from '../assets/contbutton.png'


const Body2 = () => {
  return (
    <div>
        <div className="w-full h-full ">
            <div className=" flex justify-between rounded-md border-2 border-gray-300 border-solid p-12 my-14 mx-14">
                <h2 className="w-56">Trusted by over 100+ businesses worldwide!</h2>
                <img src={icon} alt="" />
                <img src={marvel} alt="" />
                <img src={notion} alt="" />
                <img src={shazam} alt="" />
                <img src={treehouse} alt="" />
                <img src={zapier} alt="" />
            </div>
        </div>

        <div className='flex  h-full w-full'> 
            {/* <div className='w-[500px] h-[450px] bg-slate-100 my-24'></div> */}
            <div className='w-1/2 h-full '>
                    <div className='w-[440px] h-[450px] bg-gray-300 relative top-4 mx-20 my-10 '>
                        <div className='absolute -top-16 -left-20'>
                            <img src={man} alt="" className="w-[28rem] h-[32rem] mx-20" />
                            <img src={rrr} alt="" className='relative left-[443px] bottom-96'/>
                            <img src={pic1} alt="" className='absolute top-56 left-80'/>
                        </div>
            
                    </div>
            </div>

            <div className='w-1/2 h-full items-center py-10'>
             <h2 className='text-3xl font-bold w-96 my-4 text-slate-700'>Let your business thrive under our supervision</h2>
             <h2 className='w-96'>Launch a business today with our help and get it done with amazing launch features,
                 websites and more with uifry.
                 We help business like yours thrive every day and beyond</h2>
             <h2 className='py-6'>We are making every business grow!</h2>
            <div className='flex items-center py-2 '>
               <img src={correct} alt="" className=''/>
               <h2 className='px-3'>Super useful and easy to use interface</h2>
            </div>
            <div className='flex items-center '>
               <img src={correct} alt="" className=''/>
               <h2 className='px-3'>Easiest way to grow your business in days</h2>  
            </div>
            <div>
                <img src={contbutton} alt=""  className='my-10'/>
            </div>
            </div>
        </div>
            

        
    </div>
  )
}

export default Body2