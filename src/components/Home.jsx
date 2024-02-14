import React from 'react'
import Slider from './Slider'


const Home = () => {
  return (
    <div>



<Slider/>

<div className="relative  mt-5 ">
      <video className="w-screen  h-auto" autoPlay loop muted>
        <source src="/videos/pexels-rodnae-productions-6183102 (1080p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div> 

    </div>
  )
}

export default Home