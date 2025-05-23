import React, { useContext, useState } from 'react';
import AuthContext from '../../../Context/AuthContext';
import { FaEnvelope, FaUser, FaClipboardList, FaChartLine } from 'react-icons/fa';
import ContactSubmissions from '../../components/ContactSubmissions';

const AdminDashboard = () => {
  const authCtx = useContext(AuthContext);
  // const [contactSubmissions, setContactSubmissions] = useState([
  //   { id: 1, name: 'John Doe', email: 'john@example.com', message: 'I have a question about your products.', date: '2023-06-10' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Can you provide more information about shipping?', date: '2023-06-09' },
  //   { id: 3, name: 'Bob Johnson', email: 'bob@example.com', message: 'I m interested in bulk ordering.', date: '2023-06-08' },
  // ]);

  // const stats = [
  //   { icon: FaUser, title: 'Total Users', value: '5,000' },
  //   { icon: FaClipboardList, title: 'Total Orders', value: '1,250' },
  //   { icon: FaChartLine, title: 'Revenue', value: '$75,000' },
  // ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, {authCtx.user.name}!</h2>
          <p className="text-gray-600">Email: {authCtx.user.email}</p>
          <p className="text-gray-600">role: {authCtx.user.role=='ADMIN' &&"admin"}</p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div> */}

       <ContactSubmissions/>
      </div>
    </div>
  );
};

export default AdminDashboard;

