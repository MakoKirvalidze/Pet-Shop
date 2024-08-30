import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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


const animalSlice = createSlice({
  name: 'animals',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
    
    setAnimalsLocal: (state, action) => {
      state.data = action.payload;
    },
    addAnimalLocal: (state, action) => {
      state.data.push(action.payload);
    },
    updateAnimalLocal: (state, action) => {
      const index = state.data.findIndex(animal => animal.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteAnimalLocal: (state, action) => {
      state.data = state.data.filter(animal => animal.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnimals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAnimals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAnimal.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateAnimal.fulfilled, (state, action) => {
        const index = state.data.findIndex(animal => animal.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteAnimal.fulfilled, (state, action) => {
        state.data = state.data.filter(animal => animal.id !== action.payload);
      });
  },
});

export const { 
  setAnimalsLocal, 
  addAnimalLocal, 
  updateAnimalLocal, 
  deleteAnimalLocal 
} = animalSlice.actions;

export default animalSlice.reducer;