import "./ProductList.css";
import SchedaProdotto from "./SchedaProdotto";

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products.map((product) => (
        <SchedaProdotto key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
