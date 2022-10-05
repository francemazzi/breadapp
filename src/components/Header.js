import { Link } from "react-router-dom";
import "./Header.css";

const HeaderUno = ({ cart }) => {
  return (
    <div className="headerContainer">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="titoloHeader">Breadapp</div>
      </Link>
      <div className="cart">
        <Link to="carrello">
          <div className="btnContainer">
            <button className="btn add">🛒</button>
            <div className={cart >= 1 ? "notifica" : "notificaNone"}>
              {cart}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderUno;
