import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../store/userSlice';

const Signup = () => {
  const [userData,setData]=useState({
    fullName:'',
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const [errorMsg,setErrrorMessage]=useState('');
  const dispatch = useDispatch();

  const DataInp = (name, value) => {
    setData({ ...userData, [name]: value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(userData);
    const {email,password,fullName}=userData;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: fullName, photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png"
    }).then(() => {
      navigate('/');
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({id:uid,email:email,displayName:displayName,photoURL:photoURL}))
      // ...
    }).catch((error) => {
      setErrrorMessage(error.message);
    });

   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrrorMessage(errorMessage)
    // ..
  });

  }
  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
    <div className='flex mt-[8rem] flex-col w-[23rem] gap-3 p-[2rem] border rounded-[10px] border-[#ffffff61] bg-[#2a2a2a40] '>
        <div className='text-3xl font-semibold text-white mb-4'>Sign up</div>
        <input type="text" name='fullName' onChange={(e=>DataInp(e.target.name,e.target.value))} className='p-2 border bg-[transparent] text-[#cac2c2] text-xl  outline-none bg-[#ffffff] rounded-md' placeholder='Enter full name' />
        <input type='email'   name='email' onChange={(e=>DataInp(e.target.name,e.target.value))}  className='p-2 border bg-[transparent]  text-[#cac2c2] text-xl outline-none bg-[#ffffff]  rounded-md' placeholder='Enter email' />
        <input type='password' name='password' onChange={(e=>DataInp(e.target.name,e.target.value))} className='p-2 border bg-[transparent]  text-[#cac2c2] text-xl outline-none bg-[#ffffff]  rounded-md' placeholder='password here'/>
        {errorMsg&& <p>{errorMsg}</p>}
        <button type="button" onClick={handleSubmit} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

    </div>

</div>
  )
}

export default Signup