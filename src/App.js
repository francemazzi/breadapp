import "./App.css";
import HeaderUno from "./components/Header";
import SlideUno from "./components/Homepage";
import Shop from "./components/Shop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GetCookie, SetCookie } from "./hooks/cookies.js";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState(
    GetCookie("cart") ? JSON.parse(GetCookie("cart")) : []
  );

  const addProductToCart = (product) => {
    let alreadyInCartPosition = cart.findIndex((el) => el.id === product.id);

    if (alreadyInCartPosition === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      cart[alreadyInCartPosition].quantity++;
      setCart([...cart]);
    }
  };

  useEffect(() => {
    SetCookie("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <>
        <HeaderUno></HeaderUno>
        <Routes>
          <Route path="/" element={<SlideUno />} />
          <Route
            path="/shop"
            element={<Shop />}
            addProductToCart={addProductToCart}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
