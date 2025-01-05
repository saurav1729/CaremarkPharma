import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logoImg from "../resources/logo2.png";
import { MdOutlineLogout } from "react-icons/md";
import authService from "../service/authService";
import { clearUser } from "../store/userSlice";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState("90px");
  const user = useSelector((store) => store.user);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setNavbarHeight(!mobileMenuOpen ? "auto" : "90px");
  };

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

  const handleSignOut = () => {
    authService.logout();
    dispatch(clearUser());
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setNavbarHeight("90px");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

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

  const isActiveLink = (path) => location.pathname === path;
  const isAdmin = user && user.role === "ADMIN";

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isVisible ? 'top-0' : '-top-full'}`}>
      <div className="bg-gradient-to-r from-[rgba(48,48,48,0.3)] to-[rgba(217,217,217,0)] backdrop-blur-[20px] rounded-[50px] px-8 py-2 mx-4 mt-2">
    
        <div className="flex flex-row-reverse sm:flex-row justify-between items-center">
  <Link to="/" className="sm:flex hidden  sm:items-center sm:space-x-2">
    <img src={logoImg} alt="Logo" className="h-[5rem] " />
  </Link>


          <div className="hidden md:flex space-x-8 text-xl">
            <NavItem to="/" label="Home" isActive={isActiveLink("/")} />
            <NavItem to="/medicines" label="Products" isActive={isActiveLink("/medicines")} />
            <NavItem to="/about" label="About" isActive={isActiveLink("/about")} />
            <NavItem to="/contact" label="Contact" isActive={isActiveLink("/contact")} />
          </div>

          <div className="flex items-center">
            {!user ? (
              <Link to="/register">
                <button className="text-white bg-gradient-to-r from-[rgba(177,143,48,0.84)] to-[#3b5bc5d6] hover:from-[rgba(56,149,165,0.9)] hover:to-[rgba(58,74,179,0.9)] font-semibold rounded-full text-md px-5 py-2.5 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Login/Signup
                </button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={toggleDropdown}
                  className="flex items-center  justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="User avatar" />
                </button>
                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <div>{user.displayName}</div>
                      <div className="font-medium truncate">{user.email}</div>
                    </div>
                    {isAdmin && <NavItem to="/admin" label="Admin Dashboard" isActive={isActiveLink("/admin")} />}
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}

          
          </div>
          <button
              onClick={toggleMobileMenu}
              className="md:hidden ml-4 focus:outline-none"
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`} style={{ height: navbarHeight }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavItem to="/" label="Home" onClick={toggleMobileMenu} />
            <MobileNavItem to="/medicines" label="Products" onClick={toggleMobileMenu} />
            <MobileNavItem to="/about" label="About" onClick={toggleMobileMenu} />
            <MobileNavItem to="/contact" label="Contact" onClick={toggleMobileMenu} />
            {isAdmin && <MobileNavItem to="/admin" label="Admin Dashboard" onClick={toggleMobileMenu} />}
          </div>
          {user && (
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="User avatar" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user.displayName}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <button
                  onClick={() => {
                    handleSignOut();
                    toggleMobileMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Sign out <MdOutlineLogout className="inline ml-2" size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`text-white font-medium hover:text-[#3b5bc5d6] transition duration-300 relative ${
      isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#3f88a9] to-[#294fbf]' : ''
    }`}
  >
    {label}
    {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3f88a9] to-[#294fbf]"></span>}
  </Link>
);

const MobileNavItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;

