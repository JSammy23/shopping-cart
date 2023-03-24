import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import Shop from "./pages/Shop";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState([]);
  const [isShaking, setIsShaking] = useState(false)

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen)
  };

  const handleCloseCart = () => {
    setIsCartOpen(false)
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);

    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Header title='Psuedo Shop' handleClick={handleCartClick} cartItems={cartItems} isShaking={isShaking} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop 
        addItem={handleAddToCart} removeItem={handleRemoveFromCart} />} />
      </Routes>
      <Cart isOpen={isCartOpen} handleCloseCart={handleCloseCart}
      addItem={handleAddToCart} removeItem={handleRemoveFromCart}
      cartItems={cartItems} />
    </>
  );
}

export default App;
