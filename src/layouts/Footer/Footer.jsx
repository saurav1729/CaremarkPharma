import React from 'react'
import logoImg from "../../resources/logo2.png"



const Footer = () => {
  return (
    // background: var(--Secondary, #DEE9FF);
    <div className=' h-auto bg-[#DEE9FF] border-t border-gray-500 pt-[3%]'>
        <div className='   w-[88%] mx-auto flex flex-col'>
            <div className='h-[30%] flex justify-between items-center'>
                <div>
                    <h3 className='text-[2.1rem] text-[#24b5c5] font-serif text-[500] pb-1'>Sign Up To The Our Shop</h3>
                    <span className='text-[1.2rem] text-[#6b829c]'>Stay up to date about new Medicine launched</span>
                </div>
                <div className='flex gap-4'><input className='text-[1rem] py-[.4rem] px-4 w-[25rem] outline-none font-[500]' type="email" placeholder='Email Address' />
                 <button className='py-[.6rem] bg-[#4d9d2a] px-6 text-[1rem] font-[500] text-[#ffffff90]' >Sign Up</button>
                </div>
            </div>
            <div className='w-[100%] h-[3px] mt-[1rem] bg-[#6b829c]'></div>
            <div className='h-[60%] mt-[1rem] flex justify-between'>
            <div className="rounded-full w-auto h-auto">
              <img className="object-contain h-[8rem] w-[20rem] " alt="Logo" src={logoImg} />
          </div>
          <div className='flex justify-evenly w-[80%]'>
            <div>
              <span className='text-[1.2rem] font-serif text-[#295276]'>Quick Link</span>
              <ul className='text-[1rem] text-[#6b829c] font-medium '>
                <li className='hover:underline cursor-pointer'>contact us</li>
                <li className='hover:underline cursor-pointer'>Locate our store</li>
                <li className='hover:underline cursor-pointer'>Products</li>
              </ul>
            </div>
            <div>
            <span className='text-[1.2rem] font-serif text-[#295276]'>Contact</span>
              <ul className='text-[1rem] text-[#6b829c] font-medium '>
                <li className='hover:underline cursor-pointer'>Ph.:+91 6205573557</li>
                <li className='hover:underline cursor-pointer'>wh.:+91 6205573557</li>
              </ul>
            </div>
            <div>
            <span className='text-[1.2rem] font-serif text-[#295276]'>Social Media</span>
              <ul className='text-[1rem] text-[#6b829c] font-medium '>
                <li className='hover:underline cursor-pointer'>Youtube</li>
                <li className='hover:underline cursor-pointer'>Facebook</li>
              </ul>
            </div>
          </div>
            </div>
        </div>

    </div>
  )
}

export default Footer