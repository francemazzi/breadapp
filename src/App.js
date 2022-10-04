import "./App.css";
import HeaderUno from "./components/Header";
import SlideUno from "./components/Homepage";
import Shop from "./components/Shop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <HeaderUno></HeaderUno>
        <Routes>
          <Route path="/" element={<SlideUno />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
