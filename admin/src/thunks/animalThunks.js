import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchAnimals = createAsyncThunk(
  'animals/fetchAnimals',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/animals');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addAnimal = createAsyncThunk(
  'animals/addAnimal',
  async (animalData, { rejectWithValue }) => {
    try {
      const response = await api.post('/animals', animalData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAnimal = createAsyncThunk(
  'animals/updateAnimal',
  async ({ id, animalData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/animals/${id}`, animalData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAnimal = createAsyncThunk(
  'animals/deleteAnimal',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/animals/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);