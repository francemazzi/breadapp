import "./SchedaProdotto.css";

const SchedaProdotto = ({ product, IncremetCart }) => {
  return (
    <div key={product.id} className="schedaContainer">
      <div className="fotoProdotto">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="titoloProdotto">{product.title}</div>
      <div className="Prezzo">{product.price}€</div>
      <div className="btnContainer">
        <button
          className="btn add"
          onClick={() => IncremetCart(product)}
          id={product.id}
        >
          Aggiungi
        </button>
      </div>
    </div>
  );
};

export default SchedaProdotto;
