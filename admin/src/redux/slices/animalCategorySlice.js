import { createSlice } from '@reduxjs/toolkit';

const animalCategorySlice = createSlice({
  name: 'animalCategories',
  initialState: [],
  reducers: {
    setAnimalCategories: (state, action) => {
      return action.payload;
    },
    addAnimalCategory: (state, action) => {
      state.push(action.payload);
    },
    updateAnimalCategory: (state, action) => {
      const index = state.findIndex(ac => ac.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteAnimalCategory: (state, action) => {
      return state.filter(ac => ac.id !== action.payload);
    },
  },
});

export const { 
  setAnimalCategories, 
  addAnimalCategory, 
  updateAnimalCategory, 
  deleteAnimalCategory 
} = animalCategorySlice.actions;
export default animalCategorySlice.reducer;
