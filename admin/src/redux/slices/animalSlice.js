import { createSlice } from '@reduxjs/toolkit';

const animalSlice = createSlice({
  name: 'animals',
  initialState: [],
  reducers: {
    setAnimals: (state, action) => {
      return action.payload;
    },
    addAnimal: (state, action) => {
      state.push(action.payload);
    },
    updateAnimal: (state, action) => {
      const index = state.findIndex(animal => animal.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteAnimal: (state, action) => {
      return state.filter(animal => animal.id !== action.payload);
    },
  },
});

export const { setAnimals, addAnimal, updateAnimal, deleteAnimal } = animalSlice.actions;
export default animalSlice.reducer;
