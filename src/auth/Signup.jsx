import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from '../utils/firebase';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { addUser } from '../store/userSlice';
import axios from 'axios';
// import { setUser } from '../store/userSlice';
import AuthContext from '../../Context/AuthContext';
import Alert from '../../microinteraction/Alert';
import { useEffect } from 'react';
import { api } from '../service';

const Signup = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [navigatePath, setNavigatePath] = useState("/");
  const authCtx = useContext(AuthContext); 
  const [alert, setAlert] = useState(null);
  // const dispatch = useDispatch();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (alert) {
      const { type, message, position, duration } = alert;
      Alert({ type, message, position, duration });
    }
  }, [alert]);

  useEffect(() => {
    if (shouldNavigate) {
      navigate(navigatePath);
      setShouldNavigate(false); 
    }
  }, [shouldNavigate, navigatePath, navigate]);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const API_URL = "http://localhost:5000/api/auth"

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = userData;
    if (!email || !password || !fullName) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await api.post('/api/auth/signup', {
        name:fullName,
        email,
        photoURL: "https://www.inforwaves.com/media/2021/04/dummy-profile-pic-300x300-1.png",
        password,
        role:"USER"
      });
   
     if(response.status == 200 || response.status==201){
      setAlert({
        type: "success",
        message: "signup successful",
        position: "bottom-right",
        duration: 2800,
      });
      const user = {
          name : response.data.user.name, 
          img: response.data.user.img,
          email: response.data.user.email, 
          role: response.data.user.role
      }; 
      localStorage.setItem("token",response.data.token);
      authCtx.login(
        response.data.token, 
        user, 
        10800000
      )
     }
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during signup');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-custom-gradient">
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold text-white">Create Account</h2>
          <p className="mt-2 text-sm text-gray-200">Sign up to get started</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                name="fullName"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-200">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-indigo-300 hover:text-indigo-200">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

