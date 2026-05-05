import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Cart from "./Components/Cart/Cart.jsx"

import Home from "./Pages/Home/Home.jsx"
import Shop from "./Pages/Shop/Shop.jsx"
import Brands from "./Pages/Brands/Brands.jsx"
import Newarrivals from './Pages/NewArrivals/NewArrivals.jsx'

import { CartProvider } from "./context/CartContext"; // ✅ ADD THIS

function App() {
  return (
    <CartProvider> {/* ✅ WRAP HERE */}
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Newarrivals" element={<Newarrivals />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ IMPORTANT */}
        </Routes>

        <Footer />

      </Router>
    </CartProvider>
  );
}

export default App;