import { createSlice } from '@reduxjs/toolkit';
import { fetchAnimals, fetchAnimalDetails } from '../thunks/animalThunks';

const animalSlice = createSlice({
  name: 'animals',
  initialState: {
    list: [],
    current: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimals.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchAnimalDetails.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export default animalSlice.reducer;
