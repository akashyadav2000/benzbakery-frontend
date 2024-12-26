import { createSlice } from "@reduxjs/toolkit";
import { CAKE_ITEMS } from "../Data/cakeItems";

const cakeItemsSlice = createSlice({
  name: "cakeItems",
  initialState: CAKE_ITEMS,

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const cakeItemsSActions = cakeItemsSlice.actions;

export default cakeItemsSlice;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCakeItems = createAsyncThunk('cakeItems/fetchCakeItems', async () => {
//   const response = await axios.get('https://benzbakery-backend.onrender.com/cake-items');
//   return response.data;
// });

// const cakeItemsSlice = createSlice({
//   name: "cakeItems",
//   initialState: [],
//   reducers: {
//     addInitialItems: (state, action) => {
//       return state;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchCakeItems.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const cakeItemsSActions = cakeItemsSlice.actions;

// export default cakeItemsSlice;


