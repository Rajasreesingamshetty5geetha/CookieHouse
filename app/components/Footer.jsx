import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#e9e6dd]'>
      <div
        className="bg-cover bg-center relative py-16 rounded-t-2xl  "
        style={{
          backgroundImage:
            'url("https://rajasreesingamshetty5geetha.github.io/Assests-web/images/v1010-pattern-09.jpg")',
        }}
      >
        
        <div className="absolute inset-0  bg-black opacity-40 rounded-t-2xl"></div>

        <div className="container mx-auto px-4 md:px-8 text-primary relative">
          
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
              <form>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-transparent border border-white text-primary placeholder-white rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-transparent border border-white text-primary placeholder-white rounded-md"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 bg-transparent border border-white text-primary placeholder-white rounded-md"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full p-3 bg-secondary text-primary rounded-md font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            
            <div className="w-full md:w-1/3 flex flex-col space-y-4 ">
              <h2 className="text-2xl md:text-3xl font-bold mt-9">Follow Us</h2>
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-3xl"><FaFacebookSquare/> </i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-3xl"><FaTwitterSquare/></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-3xl"><FaInstagramSquare/></i>
                </a>
              </div>
            </div>
          </div>

         
          <div className="mt-16 text-center">
            <p className="text-sm md:text-base">&copy; CookieHouse Since 1995. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
