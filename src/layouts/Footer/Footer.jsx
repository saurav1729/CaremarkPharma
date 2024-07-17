import React from 'react'
import logoImg from "../../resources/logo2.png"



const Footer = () => {
  return (
    <div className='w-screen h-auto bg-blue-800 py-[5%]'>
        <div className=' h-[18rem]  w-[88%] mx-auto flex flex-col'>
            <div className='h-[30%] flex justify-between items-center'>
                <div>
                    <h3 className='text-[1.8rem] text-[#fff] text-[500] font-sans pb-1'>Sign Up To The Our Shop</h3>
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
            <div>quick Links</div>
            <div>Contact Us</div>
            <div>Social Media</div>
          </div>
            </div>
            hi
        </div>

    </div>
  )
}

export default Footer