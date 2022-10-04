import "./SchedaProdotto.css";
import { ButtonAdd } from "./Button.js";

const SchedaProdotto = ({ product, addProductToCart }) => {
  return (
    <div key={product.id} className="schedaContainer">
      <div className="fotoProdotto">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="titoloProdotto">{product.title}</div>
      <div className="Prezzo">{product.price}€</div>

      <ButtonAdd product={product} addProductToCart={addProductToCart}>
        Aggiungi
      </ButtonAdd>
    </div>
  );
};

export default SchedaProdotto;
