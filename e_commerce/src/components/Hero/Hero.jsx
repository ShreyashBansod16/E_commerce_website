import React from 'react'
import { IoBagHandleSharp } from "react-icons/io5";
import preview from "../../assets/preview-removebg-preview.png"
import logo from"../../assets/logo-removebg-preview.png"

const Hero = () => {
  return (
   <section>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand info*/}
<div className='flex flex-col justify-center py-14 md:py-0 relative z-10 '>
    <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
        <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>One
        <br/>
        Stop <span className='text-secondary'>Shop!</span></h1>
        <p className='text-2xl tracking-wide'>Order now for frsh healthy life</p>
        <p className='text-gray-400'>
        Welcome to [Your Store Name] - Your go-to destination for 
        all your shopping needs! From fresh groceries to the latest 
        tech and fashion, we offer a wide selection of quality products 
        delivered right to your door. Enjoy convenience, great deals, and 
        everything you need, all in one place
        </p>
        {/* button section*/}
        <div className='flex justify-center md:justify-start'>
          <button className='primary-btn flex justify-center gap-2 items-center'>
            <span><IoBagHandleSharp></IoBagHandleSharp>
                </span>Order Now</button>
        </div>
    </div>
</div>

        {/* img info*/}
        <div className='flex justify-center items-center'>
            <img src={preview} alt='' className='W-[350px] md:w-[550px] drop-shadow'></img>
        </div>
        
    </div>

   </section>
  )
}

export default Hero;