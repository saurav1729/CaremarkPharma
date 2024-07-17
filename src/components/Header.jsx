// import { LOGO_URL } from "../../Utils/Constants";
import { useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";
import header_bg from "../resources/one.png"
import logoImg from "../resources/logo2.png"


import { Link } from "react-router-dom";


const Header = () => {
  const [loginValue, setLoginValue] = useState("Log in");

  return (
    // box-shadow: 10px 5px 5px red;
     <div className="w-full  ">
      <div className=" w-full flex justify-around items-center absolute top-0 z-10">
          <div className="rounded-full w-auto h-auto">
              <img className="object-contain h-[17rem] w-[29rem] " alt="Logo" src={logoImg} />
          </div>
       <ul className="flex w-[500px] justify-between items-center text-[1.7rem] font-[500] text-[#ffffff] ">
        <Link to='/'><li className="cursor-pointer hover:shadow-  hover:shadow-[lightgray] px-4 rounded-full hover:bg-[#1BC76890]  hover:scale-110 ">Home</li></Link>
        <Link to='/medicines'>  <li className="cursor-pointer hover:shadow-[4px_3px_7px] hover:shadow-[lightgray] px-4 rounded-full hover:bg-[#1BC76890] hover:scale-110 ">Products</li></Link>
        <li className="cursor-pointer hover:shadow-[4px_3px_7px] hover:shadow-[lightgray] px-4 rounded-full hover:bg-[#1BC76890] hover:scale-110 ">About</li>
       </ul>
        <button className="px-4 py-2 bg-[#1BC76890] hover:bg-[#1Bc768] hover:scale-110 hover:text-[#ffffff] rounded-full text-[#ffffff]">contact</button>

      </div>
      </div>
  );
}

export default Header;
