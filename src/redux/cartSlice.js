// cartSlice.js defines the cart's state and how it gets updated (actions + reducers)
import { createSlice } from "@reduxjs/toolkit"; // Import createSlice to manage Redux state

// a "slice" is a section of the Redux store that manages a specific part of the state (here, it's the cart)
const cartSlice = createSlice({
  name: "cart", // used for action type naming in Redux DevTools (e.g., "cart/addToCart")
  initialState: { cartCount: 0 }, // defines the initial state with cartCount set to 0
  reducers: {
    // defines how the cart state changes when an action is dispatched
    addToCart: (state) => {
      state.cartCount += 1; // increments cartCount when this action is called
    },
  },
});

// Export the action (addToCart) so components can update the cart state
export const { addToCart } = cartSlice.actions;

// Export the reducer so store.js can add it to the Redux store
export default cartSlice.reducer;
