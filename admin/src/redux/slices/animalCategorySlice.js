import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const animalCategorySlice = createSlice({
  name: 'animalCategories',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
   
    setAnimalCategories: (state, action) => {
      state.data = action.payload;
    },
    addAnimalCategoryLocal: (state, action) => {
      state.data.push(action.payload);
    },
    updateAnimalCategoryLocal: (state, action) => {
      const index = state.data.findIndex(ac => ac.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteAnimalCategoryLocal: (state, action) => {
      state.data = state.data.filter(ac => ac.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimalCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnimalCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAnimalCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAnimalToCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(removeAnimalFromCategory.fulfilled, (state, action) => {
        state.data = state.data.filter(ac => ac.id !== action.payload);
      });
  },
});

export const { 
  setAnimalCategories, 
  addAnimalCategoryLocal, 
  updateAnimalCategoryLocal, 
  deleteAnimalCategoryLocal 
} = animalCategorySlice.actions;

export default animalCategorySlice.reducer;