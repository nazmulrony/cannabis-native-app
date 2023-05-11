import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marketplaceProducts: [],
};

const marketplaceSlice = createSlice({
    name: "marketplace",
    initialState,
    reducers: {
        setMarketplaceProducts: (state, { payload }) => {
            state.marketplaceProducts = payload;
        },
    },
});

export default marketplaceSlice.reducer;
export const marketplaceSelector = (state) => state.marketplace;

export const { setMarketplaceProducts } = marketplaceSlice.actions;
