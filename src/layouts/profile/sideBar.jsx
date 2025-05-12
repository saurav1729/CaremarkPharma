import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { MdLogout, MdDashboard, MdShoppingCart, MdAddCircle, MdMenu } from "react-icons/md";
import AuthContext from "../../../Context/AuthContext";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    authCtx.logout();
  };

  const handleName = () => {
    const maxLength = 20;
    const name = authCtx.user.name || "";
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  };

  // const handleChange = (page) => {
  //   setActivePage(page);
  // };

  const NavItem = ({ to, icon, children, exact = false }) => (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        `flex items-center py-2 px-4 rounded transition duration-200 ${
          isActive ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-indigo-700 hover:text-white'
        }`
      }
    >
      {icon}
      {!isCollapsed && <span className="ml-3">{children}</span>}
    </NavLink>
  );
  
  

  return (
    <div className={`bg-gray-900 text-white ${isCollapsed ? 'w-20' : 'w-64'} min-h-screen flex flex-col transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
          <MdMenu size={24} />
        </button>
      </div>
      <div className="p-4">
        <div className="mb-4 flex items-center">
          <img
            src={authCtx.user.img}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          {!isCollapsed && (
            <div className="ml-3">
              <p className="font-semibold">{handleName()}</p>
              <p className="text-sm text-gray-400">{authCtx.user.access === "ADMIN" ? "Admin" : "User"}</p>
            </div>
          )}
        </div>
        <nav className="space-y-2">
        <NavItem to="/admin" icon={<MdDashboard size={20} />} exact={true}>Dashboard</NavItem>
          <NavItem to="/admin/products" icon={<MdShoppingCart size={20} />}>Products</NavItem>
          <NavItem to="/admin/add-product" icon={<MdAddCircle size={20} />}>Add Product</NavItem>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <button
          onClick={handleLogout}
          className="flex items-center w-full py-2 px-4 rounded transition duration-200 text-gray-300 hover:bg-indigo-700 hover:text-white"
        >
          <MdLogout size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

