import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  orders: [], // Ensure orders is initialized as an empty array
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.orders = [];
    },
    setOrders(state, action) {
      state.orders = action.payload.orders || [];
    },
  },
});

// Selectors

export const { login, logout, setOrders } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;


export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;


