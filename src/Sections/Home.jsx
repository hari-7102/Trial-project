import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Body2 from '../components/Body2'

import Body4 from '../components/Body4'
import Body3 from '../components/Body3'
import Body5 from '../components/Body5'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-screen overflow-x-clip'>
      <Navbar/>
      <Body/>
      <Body2/>
      <Body3/>
      <Body4/>
      <Body5/>
      <Footer/>
    </div>
  )
}

export default Home