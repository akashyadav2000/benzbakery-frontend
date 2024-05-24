import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
    removeSingleItem: (state, action) => {
      const index = state.findIndex((itemId) => itemId === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
