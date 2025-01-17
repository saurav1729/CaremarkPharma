import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import {Provider} from '@reduxjs/toolkit'

import { AuthContextProvider } from '../Context/AuthContext.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import RecoveryContextProvider from './context/RecoveryContext.jsx';

import './index.css'
// import appStore from './store/appStore.js';
// const clientId = '1077095174667-l6hai5erjd95lidrdl95k8mt3342vb99.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>
)
