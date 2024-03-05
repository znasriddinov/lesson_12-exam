import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Shoes from "./pages/Shoes";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accessories from "./pages/Accessories";
import Jewelery from "./pages/Jewelery";
import SignIn from "./pages/SignIn";
import Favorites from "./pages/Favorites";
import Account from "./pages/Account";
import Addres from "./pages/Address";
import Orders from "./pages/Orders";
import Buy from "./pages/Buy";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Clothes" element={<Clothes />} />
          <Route path="Shoes" element={<Shoes />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Jewelery" element={<Jewelery />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Favorites" element={<Favorites />} />
          <Route path="Account" element={<Account />} />
          <Route path="Address" element={<Addres />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Buy" element={<Buy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
