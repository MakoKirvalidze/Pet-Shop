import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveToCart } from '../redux/slices/cartSlice';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="wishlist">
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <h2>{item.name}</h2>
          <button onClick={() => dispatch(moveToCart(item))}>Move to Cart</button>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
