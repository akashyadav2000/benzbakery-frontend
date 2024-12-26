import { createSlice } from "@reduxjs/toolkit";
import { WEDDING_CAKE_ITEMS } from "../Data/weddingCakeItems ";

const weddingCakeItemsSlice = createSlice({
  name: "weddingCakeItems",
  initialState: WEDDING_CAKE_ITEMS,

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const weddingCakeItemsSActions = weddingCakeItemsSlice.actions;

export default weddingCakeItemsSlice;






// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchWeddingCakeItems = createAsyncThunk('weddingCakeItems/fetchWeddingCakeItems', async () => {
//   const response = await axios.get('https://benzbakery-backend.onrender.com/weddingcake-items');
//   return response.data;
// });

// const weddingCakeItemsSlice = createSlice({
//   name: "weddingCakeItems",
//   initialState: [],
//   reducers: {
//     addInitialItems: (state, action) => {
//       return state;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchWeddingCakeItems.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const weddingCakeItemsSActions = weddingCakeItemsSlice.actions;

// export default weddingCakeItemsSlice;
