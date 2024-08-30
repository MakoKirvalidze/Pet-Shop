import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../thunks/categoryThunks';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default categorySlice.reducer;
