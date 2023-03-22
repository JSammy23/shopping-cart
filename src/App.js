import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Header title='Psuedo Shop' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
