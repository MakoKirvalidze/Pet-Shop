import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../redux/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h2>{item.name}</h2>
          <div>
            <button onClick={() => dispatch(adjustQuantity({ id: item.id, amount: -1 }))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(adjustQuantity({ id: item.id, amount: 1 }))}>+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
