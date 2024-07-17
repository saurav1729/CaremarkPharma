import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './context/AuthContext.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import RecoveryContextProvider from './context/RecoveryContext.jsx';

import './index.css'
// const clientId = '1077095174667-l6hai5erjd95lidrdl95k8mt3342vb99.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthContextProvider>
      <RecoveryContextProvider> */}
    {/* <GoogleOAuthProvider clientId={clientId}>  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </GoogleOAuthProvider>
    </RecoveryContextProvider>
    </AuthContextProvider> */}

  </React.StrictMode>,
)
