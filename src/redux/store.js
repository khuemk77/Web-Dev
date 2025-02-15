// store.js combines all slices and creates the redux store, making state accessible globally
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// initialize Redux store with cartReducer which manages cartCount
export const store = configureStore({
  reducer: {
     // "cart" key determines how we access state in useSelector() in Header.jsx
    cart: cartReducer, //ex: { cart: { cartCount: 0 } }
  },
});
