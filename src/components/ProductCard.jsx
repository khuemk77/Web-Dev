import { useDispatch } from "react-redux"; // Import useDispatch to send actions to Redux
import { addToCart } from "../redux/cartSlice"; // Import the addToCart action
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ id, name, price }) => {
  // useDispatch() is a hook that gives access to the Redux store's dispatch function
  // Hooks must be called at the top level of the component (not inside an event handler)
  const dispatch = useDispatch(); // Store dispatch in a variable so we can use it later

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <h3>{name}</h3>
      </Link>

      <p>Price: ${price}</p>

      {/* sends the addToCart action to Redux */}
      <button onClick={() => dispatch(addToCart())}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
