import React from 'react'
import bottom from '../assets/bottom.svg'
import Rimage from '../assets/a157.png'

const ContactUs = () => {
  return (
    <div>
        {/* form header */}
        <div className=' flex justify-center items-center '>

<div className="text-[#26b5c6]   ml-6 text-[3.4rem] text-600 font-semibold flex-col justify-center items-center">
   {" "}
   <span>Contact Us</span>
   <img className="mx-auto w-[13rem]" src={bottom}></img>{" "}
 </div>
</div>
        <form className='w-4/5 mx-auto flex  justify-center pl-10 items-center border-x-green-500 -mt-4 border-2 border-y-transparent rounded-2xl' action="submit">
            <div className='flex-col flex w-[50%] text-[1rem] font-bold text-[#295276] gap-1 -mt-8'>
          <label for='name'>Name</label>
          <input className='outline-none p-1 rounded-md placeholder:text-[0.8rem] placeholder:text-pretty placeholder:font-normal font-normal text-black pl-3 border-l-green-600 border-2 border-r-green-700 ' type="text" name='name' placeholder='Enter Your Name' />
          <label for='PhoneNumber'>Phone Number</label>
          <input className='outline-none p-1 rounded-md placeholder:text-[0.8rem] placeholder:text-pretty placeholder:font-normal font-normal text-black pl-3 border-l-green-600 border-2 border-r-green-700' type="text" name='PhoneNumber' placeholder='Enter Your Number(eg.9023920**)' />
          <label for='email'>Email</label>
          <input className='outline-none p-1 rounded-md placeholder:text-[0.8rem] placeholder:text-pretty placeholder:font-normal font-normal text-black pl-3 border-l-green-600 border-2 border-r-green-700' type="text" name='email' placeholder='Enter Email(eg.abc@gmail.com)' />
          <label for='message'>Enter Message</label>
          <textarea className='outline-none p-1 rounded-md placeholder:text-[0.8rem] placeholder:text-pretty placeholder:font-normal font-normal text-black pl-3 border-l-green-600 border-2 border-r-green-700' name='message' placeholder='Enter Your Query or Message(eg.9023920**)' />
            <button type='submit' className='w-full text-white bg-[#26b5c6] py-2 border border-green-700 px-2 mt-2 rounded-md'>Submit</button>
        
            </div>
            <div className='w-[50%] h-auto '>
                <img src={Rimage} alt="contact logo" />
            </div>
        </form>
    </div>
  )
}

export default ContactUs