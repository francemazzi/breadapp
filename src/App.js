import "./App.css";
import HeaderUno from "./components/Header";
import SlideUno from "./components/Homepage";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { useState, useEffect } from "react";
import { GetCookie, SetCookie } from "./hooks/cookies.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //Memoria cookies che funziona
  const [cart, setCart] = useState(
    GetCookie("cart") ? JSON.parse(GetCookie("cart")) : []
  );
  const IncremetCart = (products) => {
    setCart(+cart + 1);
    console.log(cart);
    SetCookie(products.id, products.title);
  };
  useEffect(() => {
    SetCookie("cart", JSON.stringify(cart));
  }, [cart]);

  //Memorizzando cookies ma da errore....
  // const [cart, setCart] = useState(
  //   GetCookie("cart") ? JSON.parse(GetCookie("cart")) : []
  // );

  // const IncremetCart = (product) => {
  //   let alreadyInCartPosition = cart.findIndex((el) => el.id === product.id);

  //   if (alreadyInCartPosition === -1) {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   } else {
  //     cart[alreadyInCartPosition].quantity++;
  //     setCart([...cart]);
  //   }
  // };

  // useEffect(() => {
  //   SetCookie("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <BrowserRouter>
      <>
        <HeaderUno cart={cart}></HeaderUno>
        <Routes>
          <Route path="/" element={<SlideUno />} />
          <Route path="/shop" element={<Shop IncremetCart={IncremetCart} />} />
          <Route path="/carrello" element={<Cart />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
