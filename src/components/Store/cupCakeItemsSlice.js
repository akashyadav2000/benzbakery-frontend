import { createSlice } from "@reduxjs/toolkit";
import { CUP_CAKE_ITEMS } from "../Data/cupCakeItems ";

const CupCakeItemsSlice = createSlice({
  name: "CupCakeItems",
  initialState: CUP_CAKE_ITEMS,

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const CupCakeItemsSActions = CupCakeItemsSlice.actions;

export default CupCakeItemsSlice;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCupCakeItems = createAsyncThunk('cupCakeItems/fetchCupCakeItems', async () => {
//   const response = await axios.get('https://benzbakery-backend.onrender.com/cupcake-items');
//   return response.data;
// });

// const cupCakeItemsSlice = createSlice({
//   name: "cupCakeItems",
//   initialState: [],
//   reducers: {
//     addInitialItems: (state, action) => {
//       return state;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchCupCakeItems.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export const cupCakeItemsSActions = cupCakeItemsSlice.actions;

// export default cupCakeItemsSlice;
