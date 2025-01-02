import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const purchaseHistorySlice = createSlice({
  name: "purchaseHistory",
  initialState,
  reducers: {
    addPurchase(state, action) {
      state.push(action.payload); // Payload should include product details
    },
  },
});

export const { addPurchase } = purchaseHistorySlice.actions;

export const selectPurchaseHistory = (state) => state.purchaseHistory;

export default purchaseHistorySlice.reducer;
