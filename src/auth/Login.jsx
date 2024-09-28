import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const DataInp = (name, value) => {
    setData({ ...userData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    console.log(userData);
    if (!email || !password) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(userCredential)
        // console.log(user);
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="flex mt-[8rem] flex-col w-[23rem] gap-3 p-[2rem] border rounded-[20px] border-[#ffffff61] bg-[#2a2a2a40] ">
        <div className="text-3xl font-semibold text-white mb-4">Login</div>
        <input
          type="email"
          name="email"
          onChange={(e) => DataInp(e.target.name, e.target.value)}
          className="p-2 border bg-[transparent] text-white  text-md h-[2.5rem] outline-none bg-[#ffffff] rounded-2xl"
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => DataInp(e.target.name, e.target.value)}
          className="p-2 border bg-[transparent] text-white  text-md h-[2.5rem] outline-none bg-[#ffffff] rounded-2xl"
          placeholder="password here"
        />
        <button
          type="button"
          onClick={handleLogin}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
