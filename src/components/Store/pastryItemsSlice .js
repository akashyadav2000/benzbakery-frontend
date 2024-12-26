import { createSlice } from "@reduxjs/toolkit";
import { PASTRY_ITEMS } from "../Data/pastryItems";

const pastryItemsSlice = createSlice({
  name: "pastryItems",
  initialState: PASTRY_ITEMS,

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const pastryItemsSActions = pastryItemsSlice.actions;

export default pastryItemsSlice;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPastryItems = createAsyncThunk('pastryItems/fetchPastryItems', async () => {
//   const response = await axios.get('https://benzbakery-backend.onrender.com/pastry-items');
//   return response.data;
// });

// const pastryItemsSlice = createSlice({
//   name: "pastryItems",
//   initialState: [],
//   reducers: {
//     addInitialItems: (state, action) => {
//       return state;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchPastryItems.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const pastryItemsSActions = pastryItemsSlice.actions;

// export default pastryItemsSlice;
