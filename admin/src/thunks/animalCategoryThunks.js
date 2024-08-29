import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAnimalCategories = createAsyncThunk(
  'animalCategories/fetchAnimalCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/animals_with_categories');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addAnimalToCategory = createAsyncThunk(
  'animalCategories/addAnimalToCategory',
  async ({ animalId, categoryId }, { rejectWithValue }) => {
    try {
      const response = await api.post('/animals_with_categories', { animal_id: animalId, category_id: categoryId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeAnimalFromCategory = createAsyncThunk(
  'animalCategories/removeAnimalFromCategory',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/animals_with_categories/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);