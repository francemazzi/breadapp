import "./button.css";
import { Link } from "react-router-dom";

//btn link

const ButtonLink = (props) => {
  return (
    <Link to="/shop">
      <div className="btnContainer">
        <button className="btn add">{props.children}</button>
      </div>
    </Link>
  );
};

export default ButtonLink;
