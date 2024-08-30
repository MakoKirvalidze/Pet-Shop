import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './slices/animalSlice';
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';

export default configureStore({
  reducer: {
    animals: animalReducer,
    categories: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
