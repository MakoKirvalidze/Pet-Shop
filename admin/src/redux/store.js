import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './slices/animalSlice';
import categoryReducer from './slices/categorySlice';
import animalCategoryReducer from './slices/animalCategorySlice';

export const store = configureStore({
  reducer: {
    animals: animalReducer,
    categories: categoryReducer,
    animalCategories: animalCategoryReducer,
  },
});
