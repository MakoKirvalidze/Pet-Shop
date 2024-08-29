import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, reduceStock } from '../redux/slices/cartSlice';

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleCheckout = () => {
    cart.forEach(item => dispatch(reduceStock({ id: item.id, quantity: item.quantity })));
    dispatch(clearCart());
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Buy Now</button>
    </div>
  );
}

export default Checkout;
