import ButtonCart from "./Button.js";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderUno = () => {
  return (
    <div className="headerContainer">
      <Link to="/">
        <div className="titoloHeader">Breadapp</div>
      </Link>
      <div className="cart">
        <Link to="carrello">
          <ButtonCart>🛒</ButtonCart>
        </Link>
      </div>
    </div>
  );
};

export default HeaderUno;
