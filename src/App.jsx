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

import { Suspense, lazy} from "react";
import { Routes, Route, Outlet } from "react-router-dom";


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


// const Error = lazy(() => import("./pages/Error/Error"));

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Layout = () => (
  <div>

    <Header/>
    <div className="page">
      <Outlet />
    </div>
    <Footer />
  </div>
);



function App() {
  // const authCtx = useContext(AuthContext);

  return (
    <div>
      <Suspense >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<ProductList/>}/>
            <Route path="/medicines/:productId" element={<Product/>}/>
          </Route>
       
          {/* <Route element={<AuthLayout />}>
            <Route path="/Login" element={authCtx.isLoggedIn ? <Navigate to='/profile' /> : <PageRenderer />} />
            <Route path="/SignUp" element={authCtx.isLoggedIn ? <Navigate to='/profile' /> : <Signup />} />
            <Route path="/ForgotPassword" element={authCtx.isLoggedIn ? <Navigate to='/profile' /> : <ForgotPassword />} />
          </Route> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

