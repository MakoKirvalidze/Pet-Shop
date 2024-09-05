import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await api.post('/categories', categoryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/categories/${id}`, categoryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/categories/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
    addCategoryLocal: (state, action) => {
      state.data.push(action.payload);
    },
    updateCategoryLocal: (state, action) => {
      const index = state.data.findIndex(category => category.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteCategoryLocal: (state, action) => {
      state.data = state.data.filter(category => category.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.data.findIndex(category => category.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.data = state.data.filter(category => category.id !== action.payload);
      });
  },
});

export const { setCategories, addCategoryLocal, updateCategoryLocal, deleteCategoryLocal } = categorySlice.actions;
export default categorySlice.reducer;
