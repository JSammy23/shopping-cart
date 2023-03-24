import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import Shop from "./pages/Shop";
import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";



function App() {

  // Sate
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
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Header title='Psuedo Shop' handleClick={handleCartClick} cartItems={cartItems} isShaking={isShaking}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop 
        addItem={handleAddToCart} removeItem={handleRemoveFromCart} />} />
      </Routes>
      <Footer />
      <Cart isOpen={isCartOpen} handleCloseCart={handleCloseCart}
      addItem={handleAddToCart} removeItem={handleRemoveFromCart}
      cartItems={cartItems} updateQuantity={updateQuantity} />
    </>
  );
}

export default App;
