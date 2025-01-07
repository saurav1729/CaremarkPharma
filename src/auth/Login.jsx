import React, { useContext,useEffect, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/userSlice";
// import authService from "../service/authService";
import Alert from "../../microinteraction/Alert";
import axios from "axios";
import { api } from "../service";


const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [navigatePath, setNavigatePath] = useState("/");
  const [alert, setAlert] = useState(null);
  const authCtx = useContext(AuthContext); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


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
  }, [setShouldNavigate, navigatePath, navigate]);
 
    const API_URL = "http://localhost:5000/api/auth"

  
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await api.post('/api/auth/login', { email, password });

      if(response.status ==200 ||response.status ==201){
        const user = response.data.user; 

        setAlert({
          type: "success",
          message: "Login successful",
          position: "bottom-right",
          duration: 2800,
        });
        navigate('/')

        // setTimeout(() => {
        //   setShouldNavigate(true);
        // }, 750);

        // setTimeout(() => {
          localStorage.setItem("token", response.data.token);
          authCtx.login(
           response.data.token, 
           user, 
           9600000
          );
        // }, 800);
        // console.log(authCtx);

        sessionStorage.removeItem("prevPage")
      }else {
        setAlert({
          type: "error",
          message: response.data.message || "Invalid email or password",
          position: "bottom-right",
          duration: 3000,
        });
      }
    } catch (error) {
      setError("Invalid email or password");
      setAlert({
        type: "error",
        message:
          error?.response?.data?.message ||
          "There was an error logging in. Please try again.",
        position: "bottom-right",
        duration: 3000,
      });
      console.error(error);
    }
  };

  // Implement this function to fetch user role from your backend or Firebase
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-custom-gradient">
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-200">Sign in to your account</p>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                name="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
          </div>

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-200">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-300 hover:text-indigo-200"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
