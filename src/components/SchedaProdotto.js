import "./SchedaProdotto.css";
import { ButtonAdd } from "./Button.js";

const SchedaProdotto = ({ product }) => {
  return (
    <div key={product.id} className="schedaContainer">
      <div className="fotoProdotto">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="titoloProdotto">{product.title}</div>
      <div className="Prezzo">{product.price}€</div>

      <ButtonAdd>Aggiungi</ButtonAdd>
    </div>
  );
};

export default SchedaProdotto;
