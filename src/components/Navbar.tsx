import React from 'react';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='container mx-auto pt-10 mr-32'>
      <div className="flex justify-between items-end">
        <div className='text-2xl font-medium '>Haroon Rasheed</div>

        <ul className='flex gap-8 lg:gap-16  md:flex'>
          <li className='menuLink'><a href="#hero" className='hover:text-blue-500 '>Home</a></li>
          <li className='menuLink'><a href="#about" className='hover:text-blue-500'>About</a></li>
          <li className='menuLink'><a href="#projects" className='hover:text-blue-500'>Projects</a></li>
          <li className='menuLink'><a href="#skills" className='hover:text-blue-500'>Skills</a></li>
          <li className='menuLink'><a href="#contact" className='hover:text-blue-500'>Contact</a></li>
        </ul>
        <IoMenu className='md:hidden' size={30} />

        <button className="md:hidden p-2 text-xl" aria-label="Toggle menu">
        
        </button>
      </div>
    </div>
  );
};

export default Navbar;
