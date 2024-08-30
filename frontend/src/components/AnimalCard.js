import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';

function AnimalCard({ animal }) {
  const dispatch = useDispatch();

  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <div className="actions">
        <button onClick={() => dispatch(addToCart(animal))}>Add to Cart</button>
        <button onClick={() => dispatch(addToWishlist(animal))}>Add to Wishlist</button>
      </div>
    </div>
  );
}

export default AnimalCard;
