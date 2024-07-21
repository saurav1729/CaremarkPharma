import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../resources/logo2.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const dropdownRef = useRef(null);
  console.log(user);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      console.log('signed out');
     
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-transparent shadow-sm shadow-gray-700 absolute top-0 left-0 z-10 w-full border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoImg} className="h-28" alt="Flowbite Logo" />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!user ? (
            <Link to="/register">
              <button
                type="button"
                className="text-gray-900 text-[1.1rem] bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login/Signup
              </button>
            </Link>
          ) : (
            <>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="user photo" />
                </button>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </>
          )}

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-4 top-[5.5rem] bg-[#fff]   z-50 my-4 text-base list-none bg-blue border border-[#124c7561] divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{user.displayName}</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to='/login'
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col text-[1.2rem] text-[#ffffff] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/">
              <li className="cursor-pointer hover:shadow-[4px_3px_7px] hover:bg-[#1BC76890] hover:shadow-[lightgray] px-4 rounded-full hover:scale-110">
                Home
              </li>
            </Link>
            <Link to="/medicines">
              <li className="cursor-pointer hover:shadow-[4px_3px_7px] hover:shadow-[lightgray] px-4 rounded-full hover:bg-[#1BC76890] hover:scale-110">
                Products
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer hover:shadow-[4px_3px_7px] hover:shadow-[lightgray] px-4 rounded-full hover:bg-[#1BC76890] hover:scale-110">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer hover:shadow-[4px_3px_7px] hover:shadow-[lightgray] px-4 rounded-full hover:bg-[#1BC76890] hover:scale-110">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
