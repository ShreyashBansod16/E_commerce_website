import React, { useState } from 'react';
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './RespnsiveMenu'; // Make sure the component name is correct
import { FaStore } from "react-icons/fa";

import { Link, useLocation } from 'react-router-dom';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "Products",
    link: "/products"
  },
  {
    id: 3,
    title: "About",
    link: "/about"
  },
  {
    id: 5,
    title: "Contacts",
    link: "/contacts"
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Function to close the menu when a link is clicked
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className='md:pt-4 relative z-30 bg-white'>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container py-4 flex justify-between items-center md:pt-4"
        >
          {/* Logo Section */}
          <div className='text-2xl flex items-center font-bold gap-4 uppercase '>
            <p className='text-primary'>E-commerce</p>
            <p className="text-secondary">Store</p>
            <FaStore className='text-green-400' />
          </div>

          {/* Desktop Menu Section */}
          <div className='hidden md:block '>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.link}
                    className={`inline-block py-1 px-3 font-semibold ${location.pathname === menu.link
                      ? 'text-primary shadow-[0_3px_0_-1px_#ef4444]'
                      : 'hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]'
                      }`}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <Link to={"/cart"}>
                <button className={`text-2xl ${location.pathname === "/cart" ? 'bg-primary text-white rounded-full p-2' : 'hover:bg-primary hover:text-white rounded-full p-2 duration-200'}`}>
                  <MdOutlineShoppingCart />
                </button>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
