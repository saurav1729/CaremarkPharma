import { Suspense, lazy, useContext } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AuthContext from "../Context/AuthContext";
import AdminLayout from "./layouts/profile/Adminlayout";
import MultiStepProductForm from "./components/Admin/Form/ProductForm";
import Loading from "../microinteraction/Loading";

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
const AdminDashboard = lazy(() => import("./pages/profile/AdminDashboard"));
const AddProduct = lazy(()=>import("./pages/profile/addproducts"))
const ViewProducs = lazy(()=>import("./pages/profile/ViewProduct"))

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
  const authCtx = useContext(AuthContext); 
  const navigate = useNavigate();
  console.log(authCtx); 

  return (
    <div>
      <Suspense fallback={<div><Loading/></div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<ProductList />} />
            <Route path="/medicines/:productId" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute adminOnly={true} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<ViewProducs />} />
              <Route path="/admin/add-product" element={<MultiStepProductForm />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

