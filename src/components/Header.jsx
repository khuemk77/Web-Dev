import { useSelector } from "react-redux"; // Import useSelector to read data from Redux store
import "../styles/header.css";

const Header = () => {
  // useSelector() is a hook that allows us to read values from the Redux store
  // It automatically updates the component whenever the state changes
  
  // 'state.cart.cartCount' accesses the cartCount value inside Redux
  // "cart" comes from store.js (we mapped cartReducer to the "cart" key)
  // "cartCount" is defined in cartSlice.js as part of the cart's initial state
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <header className="header">
      <img
        src="/ut-longhorn-icon.jpg"
        alt="UT Longhorn Logo"
        style={{ height: "60px", width: "auto" }}
      />
      
      <h1>Shopping Cart Demo</h1>
      <span>🛒 Cart Items: {cartCount}</span>
    </header>
  );
};

export default Header;
