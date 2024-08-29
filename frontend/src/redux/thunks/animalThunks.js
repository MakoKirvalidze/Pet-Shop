import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAnimalsApi, fetchAnimalDetailsApi } from '../../services/api';

export const fetchAnimals = createAsyncThunk('animals/fetchAnimals', async () => {
  const response = await fetchAnimalsApi();
  return response.data;
});

export const fetchAnimalDetails = createAsyncThunk('animals/fetchAnimalDetails', async (id) => {
  const response = await fetchAnimalDetailsApi(id);
  return response.data;
});
