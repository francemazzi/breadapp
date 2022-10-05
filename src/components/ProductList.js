import "./ProductList.css";
import SchedaProdotto from "./SchedaProdotto";

const ProductList = ({ products, IncremetCart }) => {
  return (
    <div className="productList">
      {products.map((product) => (
        <SchedaProdotto
          ProductListItem
          key={product.id}
          product={product}
          IncremetCart={IncremetCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
