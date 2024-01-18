import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Create, Orders, Home, Login, UserForgot, RestaurantLogin, RestaurantSignup, RestaurantForgot, Signup, SingleRestaurant, SingleProduct, AllRestaurant, Menu, Cart, AllProducts, EditProduct, PastOrders } from './pages/index'
import { Navbar } from './components';
import { useEffect } from 'react';
import { useGlobalContext } from './context/context';

function App() {

  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.head.appendChild(script);

    // Optional: Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);





  const Role = localStorage.getItem("role")
  const { setRole, role, restaurant } = useGlobalContext()


  useEffect(() => {
    if (localStorage.getItem("role")) {
      setRole(Role)
    }
  }, [role, restaurant])

  return (
    <>
      <Router>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/restaurantLogin' element={<RestaurantLogin />} />
          <Route exact path='/restaurantSignup' element={<RestaurantSignup />} />
           <Route exact path="/restaurantForgot" element={<RestaurantForgot />} />
          <Route exact path='/userForgot' element={<UserForgot />} />
          <Route exact path='/singleRestaurant/:id' element={<SingleRestaurant />} />
          <Route exact path='/product/:id' element={<SingleProduct />} />
          <Route exact path='/allRestaurants' element={<AllRestaurant />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/cart' element={<Cart />} />
          {role === "admin" && <Route exact path='/orders' element={<Orders />} />}
          {role === "admin" && <Route exact path='/create' element={<Create />} />}
          {role === "admin" && <Route exact path='/allProducts' element={<AllProducts />} />}
          {role === "admin" && <Route exact path='/edit/:id' element={<EditProduct />} />}
          {role === "user" && <Route exact path="/pastOrders" element={<PastOrders />} />}
        </Routes>
      </Router>
    </>
  )
}

export default App
