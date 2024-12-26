import { configureStore } from "@reduxjs/toolkit";
import cakeItemsSlice from "./cakeItemsSlice";
import pastryItemsSlice from "./pastryItemsSlice ";
import cupCakeItemsSlice from "./cupCakeItemsSlice";
import weddingCakeItemsSlice from "./weddingCakeItemsSlice";
import cartSlice from "./cartSlice";
import ordersSlice from "./orderSlice";
import cocktailSlice from "./cocktailSlice";
import authReducer from "./authSlice";



const store = configureStore({
  reducer: {
    cakeItems: cakeItemsSlice.reducer,
    pastryItems: pastryItemsSlice.reducer,
    cupCakeItems: cupCakeItemsSlice.reducer,
    weddingCakeItems: weddingCakeItemsSlice.reducer,
    cart: cartSlice.reducer,
    order: ordersSlice.reducer,
    cocktail: cocktailSlice.reducer,
    auth: authReducer,
  },
});

export default store;
