import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  purchaseHistory: [], // Add purchase history
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload; // Store the full user information
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.purchaseHistory = []; // Clear history on logout
    },
    addPurchase(state, action) {
      state.purchaseHistory.push(...action.payload); // Add new purchase
    },
  },
});

// Selectors

export const { login, logout, addPurchase } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectPurchaseHistory = (state) => state.auth.purchaseHistory;

export default authSlice.reducer;
