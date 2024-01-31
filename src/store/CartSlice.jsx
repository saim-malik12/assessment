// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
    selectCategories: 'All',
  },
  reducers: {
    add: (state, action) => {
      const itemToIncrement = state.cartProduct.find((item) => item.id === action.payload.id);
      if (itemToIncrement) {
        itemToIncrement.count += 1;
      } else {
        state.cartProduct.push({ ...action.payload, count: 1 });
      }
    },
    remove: (state, action) => {
      state.cartProduct = state.cartProduct.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.cartProduct.find((item) => item.id === itemId);
      if (itemToIncrement) {
        itemToIncrement.count += 1;
      } else {
        state.cartProduct.push({ ...action.payload, count: 1 });
      }
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.cartProduct.find((item) => item.id === itemId);
      if (itemToDecrement) {
        if (itemToDecrement.count > 1) {
          itemToDecrement.count -= 1;
        }
      }
    },
    selectCategories: (state, action) => {
      state.selectCategories = action.payload;
    },
    // ... other reducers
  },
});

export const { add, remove, increment, decrement, selectCategories } = cartSlice.actions;
export default cartSlice.reducer;
