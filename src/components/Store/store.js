import { configureStore } from "@reduxjs/toolkit";
import cakeItemsSlice from "./cakeItemsSlice";
import pastryItemsSlice from "./pastryItemsSlice ";
import cupCakeItemsSlice from "./cupCakeItemsSlice";
import weddingCakeItemsSlice from "./weddingCakeItemsSlice";
import cartSlice from "./cartSlice";
import cocktailSlice from "./cocktailSlice";
import authReducer from "./authSlice";
import purchaseHistoryReducer from "./purchaseHistorySlice";



const store = configureStore({
  reducer: {
    cakeItems: cakeItemsSlice.reducer,
    pastryItems: pastryItemsSlice.reducer,
    cupCakeItems: cupCakeItemsSlice.reducer,
    weddingCakeItems: weddingCakeItemsSlice.reducer,
    cart: cartSlice.reducer,
    cocktail: cocktailSlice.reducer,
    auth: authReducer,
    purchaseHistory: purchaseHistoryReducer,
  },
});

export default store;
