import React from 'react'
import logo from "../../assets/banner.png"


const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          <div className='flex justify-center items-center '>  
            <img 
           
            src={logo} alt='' className='w-[300px] md:max-w-[] h-full object-cover '>
            </img></div>
            <div className='flex flex-col justify-center spac'>
        
            <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <h1
                
                
                className='text-3xl lg:text-6xl font-bold uppercase '>
                    Brand 
                </h1>
                <p
                
                 >
              <b>Our Story:</b>  Dive into InnovateMart’s journey from a bold vision in 2023 to becoming a leading e-commerce destination, committed to delivering unique solutions and exceptional service.<br></br>

<b>Core Values:</b> At InnovateMart, we uphold principles of innovation, customer satisfaction, and sustainability, ensuring every product we offer meets the highest standards of quality and excellence.
                </p>
                <div    
         className='flex justify-center md:justify-start'>
          <button className='primary-btn '>
            Learn More</button>
        </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner;