import "./Shop.css";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Shop;
