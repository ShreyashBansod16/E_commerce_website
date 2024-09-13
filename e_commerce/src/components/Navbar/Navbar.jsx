import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import { MdMenu } from "react-icons/md";
import RespnsiveMenu from './RespnsiveMenu';
import { FaStore } from "react-icons/fa";
import {motion } from "framer-motion"
import { Link } from 'react-router-dom';

const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"/"
    },
    {
        id:2,
        title:"Products",
        link:"/products"
    },
    {
        id:3,
        title:"About",
        link:"/about"
    },
    {
        id:4,
        title:"Shop",
        link:"/shop"
    },
    {
        id:5,
        title:"Contacts",
        link:"/contacts"
    }, 
];


const Navbar = () => {
  const [open,setopen]=useState(false);
  
  
    return (
        <>
   <nav className='md:pt-4 relative z-30 bg-white'>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5,delay:0.5}}
    className="container  py-4 flex  justify-between  items-center  md:pt-4">
        {/*logo selection*/}
        <div className='text-2xl flex items-center font-bold gap-4 uppercase '>
            <p className='text-primary'>E-commerce</p>
            <p className="text-secondary">  Store</p>
            <FaStore className='text-green-400'/>
        </div>
        {/*Menu selection*/}
        <div className='hidden md:block '>
            <ul className='flex items-center gap-6 text-gray-600'>
                {NavbarMenu.map((menu) => (
                    <li key={menu.id} >
                <Link to={menu.link}
                className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold ">{menu.title}</Link>
                </li>
                ))}
                <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200' >
                    <MdOutlineShoppingCart></MdOutlineShoppingCart>
                </button>
                
            </ul>
        </div>
        {/*mobile*/}
        <div className='md:hidden' onClick={()=>
            setopen(!open)
        }>
            <MdMenu className='text-4xl'/>

        </div>
        </motion.div>
   </nav>
    {/*Mobiile menu */}
   < RespnsiveMenu open={open} />
</>
  )
}

export default Navbar;