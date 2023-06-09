import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
});

export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
