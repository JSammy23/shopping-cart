import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import Shop from "./pages/Shop";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen)
  };

  const handleCloseCart = () => {
    setIsCartOpen(false)
  };

  return (
    <>
      <Header title='Psuedo Shop' handleClick={handleCartClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Cart isOpen={isCartOpen} handleCloseCart={handleCloseCart} />
    </>
  );
}

export default App;
