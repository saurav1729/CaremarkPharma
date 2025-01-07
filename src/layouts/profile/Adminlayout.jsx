import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sideBar';
import Navbar from '../../components/Header';
import Breadcrumb from '../BreadCrumb';

const AdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const customLabels = {
    'products': 'Our Products',
    'about-us': 'About Our Company'
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-0' : 'ml-0'}`}>
        <div className="container mx-auto px-6 py-8">
        <Breadcrumb customLabels={customLabels} />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

