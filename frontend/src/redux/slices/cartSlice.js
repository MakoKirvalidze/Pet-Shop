import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    adjustQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.amount;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    reduceStock: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.stock -= action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, adjustQuantity, clearCart, reduceStock } = cartSlice.actions;
export default cartSlice.reducer;
