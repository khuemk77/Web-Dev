import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

const products = [
  { id: 1, name: "Product 1", price: 10, description: "This is an awesome product with great value." },
  { id: 2, name: "Product 2", price: 20, description: "A premium quality product that you will love!" },
  { id: 3, name: "Product 3", price: 30, description: "An excellent product that exceeds expectations." },
];

const ProductDetail = ({}) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="error-message">Product not found</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <h2>{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={''}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
