import React from 'react';
import logoImg from "../../resources/logo2.png";

const Footer = () => {
  return (
    <div className='bg-[#DEE9FF] border-t border-gray-500 pt-8 pb-4'>
      <div className='w-[90%] mx-auto flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          <div className='mb-4 md:mb-0 text-center md:text-left'>
            <h3 className='text-2xl md:text-[2.1rem] text-[#24b5c5] font-serif font-medium pb-1'>Sign Up To Our Shop</h3>
            <span className='text-base md:text-[1.2rem] text-[#6b829c]'>Stay up to date about new Medicine launched</span>
          </div>
          <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
            <input 
              className='text-[1rem] py-2 px-4 w-full md:w-[25rem] outline-none font-medium' 
              type="email" 
              placeholder='Email Address' 
            />
            <button className='py-2 bg-[#4d9d2a] px-6 text-[1rem] font-medium text-white'>Sign Up</button>
          </div>
        </div>
        <div className='w-full h-[2px] bg-[#6b829c] my-4'></div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className="rounded-full w-auto h-auto mb-4 md:mb-0">
            <img className="object-contain h-20 md:h-[8rem] w-auto md:w-[20rem]" alt="Logo" src={logoImg} />
          </div>
          <div className='flex flex-wrap justify-around w-full md:w-[80%] gap-8 md:gap-4'>
            <div className='text-center md:text-left'>
              <span className='text-xl md:text-[1.2rem] font-serif text-[#295276]'>Quick Link</span>
              <ul className='text-base md:text-[1rem] text-[#6b829c] font-medium mt-2'>
                <li className='hover:underline cursor-pointer'>Contact us</li>
                <li className='hover:underline cursor-pointer'>Locate our store</li>
                <li className='hover:underline cursor-pointer'>Products</li>
              </ul>
            </div>
            <div className='text-center md:text-left'>
              <span className='text-xl md:text-[1.2rem] font-serif text-[#295276]'>Contact</span>
              <ul className='text-base md:text-[1rem] text-[#6b829c] font-medium mt-2'>
                <li className='hover:underline cursor-pointer'>Ph.:+91 6205573557</li>
                <li className='hover:underline cursor-pointer'>wh.:+91 6205573557</li>
              </ul>
            </div>
            <div className='text-center md:text-left'>
              <span className='text-xl md:text-[1.2rem] font-serif text-[#295276]'>Social Media</span>
              <ul className='text-base md:text-[1rem] text-[#6b829c] font-medium mt-2'>
                <li className='hover:underline cursor-pointer'>Youtube</li>
                <li className='hover:underline cursor-pointer'>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center mt-8 text-sm text-[#6b829c]'>
          <p>
            Developed by{' '}
            <a 
              href="https://www.linkedin.com/in/saurav-jha-574171279/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline text-[#295276]"
            >
              Saurav Jha
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

