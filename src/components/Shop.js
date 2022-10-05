import "./Shop.css";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

const Shop = ({ IncremetCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(async (response) => {
        const data = await response.json();
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <ProductList products={products} IncremetCart={IncremetCart} />
    </>
  );
};

export default Shop;
