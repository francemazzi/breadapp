import "./ProductList.css";
import SchedaProdotto from "./SchedaProdotto";

const ProductList = ({ products, addProductToCart }) => {
  return (
    <div className="productList">
      {products.map((product) => (
        <SchedaProdotto
          ProductListItem
          key={product.id}
          product={product}
          addProductToCart={addProductToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
