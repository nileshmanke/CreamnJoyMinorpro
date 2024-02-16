import React from 'react'
import Slider from './Slider'



const Home = () => {
  return (
    <div>


<div className="text-center mt-2 w-11/12 m-auto">
      <marquee className="text-xl sm:text-2xl font-bold text-red-700" behavior="scroll" direction="left" scrollamount="10">
    Enjoy With CreamNJoy...
      </marquee>
    </div>
 <div>
     
      </div>


<Slider/>

{/* <div className="relative  mt-5 ">
      <video className="w-screen  h-auto" autoPlay loop muted>
        <source src="/videos/pexels-rodnae-productions-6183102 (1080p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>  */}

    <div>
      <h1 className='text-center text-3xl font-bold p-6 underline text-red-700'>
      Featured Products
      </h1>

      <div className='w-11/12 m-auto grid grid-cols-2 sm:grid-cols-4 gap-4 p-3'>
<div>
  <img className='h-[158px] sm:h-[292px]' src=' /images/WhatsApp Image 2024-02-12 at 4.25.11 PM (1).jpeg' alt=' ' />
</div>

<div>
  <img className='h-[158px] sm:h-[292px]' src='/images/WhatsApp Image 2024-02-12 at 4.25.11 PM.jpeg' alt='' />
</div>

<div>
  <img className='h-[158px] sm:h-[292px]' src='/images/WhatsApp Image 2024-02-12 at 4.25.12 PM (1).jpeg' alt='' />
</div>


<div>
  <img className='h-[158px] sm:h-[292px]' src='/images/WhatsApp Image 2024-02-12 at 4.25.12 PM.jpeg' alt=''/>
</div>







        
      </div>

      <h1 className='text-center text-3xl font-bold p-6 text-red-700'>
      Flavour of the month
      </h1>
    </div>

 <div>
 <section className="  w-11/12 m-auto bg-[url('/images/groupimg2.jpg.crdownload')]  bg-cover  flex justify-center items-center  sm:p-40  ">
       
        <img  className='   p-44 sm:p-10 ' src='/images/logo.png' alt=''/>
        </section>
 </div>

    </div>
  )
}

export default Home