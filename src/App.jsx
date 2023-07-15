import "./assets/styles/globalStyles.scss";
import React from "react";
import NavMain from "./components/Navbar/NavMain";
import Home from "./pages/Home";
import Products from "./pages/Products";
import FooterMain from "./components/Footer/FooterMain";
import ProductDetail from "./pages/ProductDetail";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./routes/Auth";
import UserPrivate from "./routes/UserPrivate";
import UserProfile from "./pages/UserProfile";
import GenerateToken from "./components/Auth/GenerateToken";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { createBasket } from "./store/asyncThunk/basket";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    !localStorage.getItem("basketId") && dispatch(createBasket());
  }, []);
  return (
    <>
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/card" element={<Card />} />
        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<UserPrivate />}>
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
        <Route path="/user-profile/:token" element={<GenerateToken />} />
      </Routes>
      <FooterMain />
      <ToastContainer
        position="bottom-right"
        toastStyle={{ color: "#333333" }}
      />
    </>
  );
}

export default App;
