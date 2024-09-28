// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import Home from './pages/Home'
// import Header from './components/Header';
// import Footer from './layouts/Footer/Footer';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer/>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

import { onAuthStateChanged } from "firebase/auth";
import { Suspense, lazy} from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./store/userSlice";


// microInteraction
// import { Loading, Alert } from "./microInteraction";

// // modals
// import { EventModal } from "./features";

// // state
// import AuthContext from "./context/AuthContext";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const ProductList = lazy(()=>import("./pages/ProductList"))
const Product = lazy(()=>import("./pages/Product"))
const Header =lazy(()=>import("./components/Header"))
const Footer=lazy(()=>import("./layouts/Footer/Footer"))
const Login=lazy(()=>import("./auth/Login"))
const Signup=lazy(()=>import("./auth/Signup"))



// const Error = lazy(() => import("./pages/Error/Error"));

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Layout = () => (
  <div>

    <Header/>
    <div className="page  bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]">
      <Outlet />
    </div>
    <Footer />
  </div>
);


const AuthLayout = ()=>{
  <div className="" >
  <Outlet />
</div>
}



function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      console.log(user);
      const {uid,email,displayName,photoURL}=user;
      dispatch(addUser({id:uid,email:email,displayName:displayName,photoURL:photoURL}))
    
      // ...
    } else {

      dispatch(removeUser())
     
    }
  });

  return (
    <div>
      <Suspense >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<ProductList/>}/>
            <Route path="/medicines/:productId" element={<Product/>}/>
            <Route path="/register" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>} />
          </Route>
       
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

