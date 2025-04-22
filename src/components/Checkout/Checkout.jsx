import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { clearCart } from '../../redux/cartSlice';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout">
      <h2>Order Summary</h2>

      {orderPlaced ? (
        <div className="order-success">
          <h3>🎉 Thank you for your order!</h3>
          <p>Your items will be shipped soon.</p>
          <Link to="/" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            🛍️ Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
