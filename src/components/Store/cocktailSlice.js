import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: [],
  reducers: {
    addToCocktail: (state, action) => {
      return action.payload; // Replace the current state with the new item
    },
  },
});

export const cocktailActions = cocktailSlice.actions;
export default cocktailSlice;
