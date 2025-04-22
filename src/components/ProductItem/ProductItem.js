import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <div className="buttons">
        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart +
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
