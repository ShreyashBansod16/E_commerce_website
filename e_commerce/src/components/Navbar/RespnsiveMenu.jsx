import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ open, setOpen }) => {
  // Function to handle click and close the menu
  const handleMenuClick = () => {
    setOpen(false); // This will close the menu
  };

  return (
    <AnimatePresence mode="wait">
      {
        open && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
            className='absolute top-20 left-0 w-full h-screen z-20'
          >
            <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
              {/* Close menu when clicking anywhere inside the ul */}
              <ul className='flex flex-col items-center gap-10' onClick={handleMenuClick}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/contacts"}>Contact</Link></li>
              </ul>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
