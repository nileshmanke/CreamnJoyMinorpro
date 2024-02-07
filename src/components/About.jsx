import React from 'react'

const About = () => {
  return (
    <div>

<div className="relative">
      <video className="w-full h-auto" autoPlay loop muted>
        <source src="/videos/pexels-rodnae-productions-6183102 (1080p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>

    <div className='mt-6 flex flex-col justify-center m-auto'>
        <h1 className=" text-3xl font-bold text-center animate-bounce">Visit Us..</h1>
        <div className='m-auto'>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.7990186047305!2d75.21615967499929!3d19.89070678148893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b35a05afb71%3A0x5fa2cbfad442f3ed!2sCREAM%20N%20JOY!5e0!3m2!1sen!2sin!4v1707312730240!5m2!1sen!2sin"
      width="600"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <div className='m-auto mt-5'>
        <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2we_LxH1g4U?si=GAfbkMuRyXMKuaia"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>

        </div>
        </div>
        
    </div>
  )
}

export default About