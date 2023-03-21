import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header title='Psuedo Shop' />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
