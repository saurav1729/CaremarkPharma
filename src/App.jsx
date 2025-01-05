import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./store/userSlice";
import authService from "./service/authService";
import PrivateRoute from "./components/PrivateRoute";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const ProductList = lazy(() => import("./pages/ProductList"));
const Product = lazy(() => import("./pages/Product"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./layouts/Footer/Footer"));
const Login = lazy(() => import("./auth/Login"));
const Signup = lazy(() => import("./auth/Signup"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/About"));
// const AdminDashboard = lazy(() => import("./components/AdminDashboard"));

const Layout = () => (
  <div>
    <Header />
    <div className="page bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const AuthLayout = () => (
  <div className="">
    <Outlet />
  </div>
);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
      // navigate('/login');
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<ProductList />} />
            <Route path="/medicines/:productId" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateRoute adminOnly={true} />}>
              {/* <Route path="/admin" element={<AdminDashboard />} /> */}
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

