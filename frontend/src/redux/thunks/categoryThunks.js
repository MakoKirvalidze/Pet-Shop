import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategoriesApi } from '../../services/api';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetchCategoriesApi();
  return response.data;
});
