import "./button.css";
import { Link } from "react-router-dom";

//btn cart
const ButtonCart = (props, product, addProductToCart) => {
  console.log(addProductToCart);
  return (
    <div className="btnContainer">
      <button className="btn add">{props.children}</button>
      <div className="notifica">0</div>
    </div>
  );
};

const ButtonAdd = (props, product, addProductToCart) => {
  return (
    <div className="btnContainer">
      <button
        className="btn add"
        onClick={() => addProductToCart(product)}
        id={product.id}
      >
        {props.children}
      </button>
    </div>
  );
};

const ButtonLink = (props) => {
  return (
    <Link to="/shop">
      <div className="btnContainer">
        <button className="btn add">{props.children}</button>
      </div>
    </Link>
  );
};

export default ButtonCart;
export { ButtonAdd, ButtonLink };
