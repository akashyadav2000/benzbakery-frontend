import { createSlice } from "@reduxjs/toolkit";

const MAX_ITEM_COUNT = 5;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      const itemCount = state.filter((id) => id === itemId).length;

      if (itemCount < MAX_ITEM_COUNT) {
        state.push(itemId);
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter((id) => id !== itemId);
    },
    removeSingleItem: (state, action) => {
      const itemId = action.payload;
      const index = state.findIndex((id) => id === itemId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
