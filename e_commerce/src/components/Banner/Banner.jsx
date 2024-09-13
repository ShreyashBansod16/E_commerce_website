import React from 'react'
import logo from "../../assets/banner.png"
import { FadeLeft, FadeUP } from '../../utility/Animation';
import {motion } from 'framer-motion'

const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          <div className='flex justify-center items-center '>  
            <motion.img 
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:"spring",stiffness:100,delay:0.2}}
            src={logo} alt='' className='w-[300px] md:max-w-[] h-full object-cover '>
            </motion.img></div>
            <div className='flex flex-col justify-center spac'>
        
            <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <motion.h1
                variants={FadeUP(0.5)}
                initial="hidden"
                whileInView="visible"
                //viewport={{once:true}}
                
                className='text-3xl lg:text-6xl font-bold uppercase '>
                    Brand 
                </motion.h1>
                <motion.p
                 variants={FadeUP(0.7)}
                 initial="hidden"
                 whileInView="visible"
                 //viewport={{once:true}}
                 >
                Welcome to [Your Store Name] - Your go-to destination for 
        all your shopping needs! From fresh groceries to the latest 
        tech and fashion, we offer a wide selection of quality products 
        delivered right to your door. Enjoy convenience, great deals, and 
        everything you need, all in one place
                </motion.p>
                <motion.div   variants={FadeUP(1.1)} initial="hidden" animate="visible"  
         className='flex justify-center md:justify-start'>
          <button className='primary-btn '>
            Learn More</button>
        </motion.div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner;