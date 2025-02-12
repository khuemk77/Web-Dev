import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Home addToCart={addToCart} />
    </div>
  );
};

export default App;
