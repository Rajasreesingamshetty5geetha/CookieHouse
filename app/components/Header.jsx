'use client'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='bg-[#e9e6dd] shadow-md sticky top-0 z-50 lg:mx-24 md:mx-12 mx-4  mt-4 rounded-2xl'>
      <div className='container mx-auto flex items-center  justify-between p-4'>
        <h1 className='text-2xl font-bold text-secondary'>CookiesHouse</h1>
        <div className='flex flex-row  mx-2'>
          <nav className= {`${
            isMenuOpen ? "block" : "hidden"
          } md:block md:space-x-3`}>
            <ul className='flex flex-col lg:space-x-4 md:space-x-4 md:flex-row space-y-2  md:space-y-0  font-bold text-lg ml-[25px]  '>
              <li><a href='#about' className='text-secondary hover:text-[#2c1000] hover:text-xl'>ABOUT</a></li>
              <li><a href='#best' className='text-secondary hover:text-[#2c1000] hover:text-xl'>BEST SELLERS</a></li>
              <li><a href='#contact' className='text-secondary hover:text-[#2c1000] hover:text-xl'>CONTACT US</a></li>
            </ul>
          </nav>
          <button
            className='md:hidden text-secondary focus:outline-none  -mx-3'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-6 h-6 ${isMenuOpen ? "mb-36" : ""}`}
            >
              {isMenuOpen ? (
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d = "M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )} 
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
