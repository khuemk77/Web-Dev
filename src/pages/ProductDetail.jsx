import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductDetail.css";
import products from "../models/products.js";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  // refer to ProductCard.jsx comment about useDispatch hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) {
    return <h2 className="error-message">Product not found</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <h2>{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="button-group">
          <button className="back-button" onClick={() => navigate(-1)}>
            Back
          </button>
          <button onClick={() => dispatch(addToCart())}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
