import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import products from "../models/products.js";

const Home = () => {
  return (
    <div className="home">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
