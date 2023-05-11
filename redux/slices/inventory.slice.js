import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inventoryProduct: [],
    form: {
        allowPublish: false,
        step: 0,
        summary: {
            totalQuantity: 0,
            unit: "",
            remaining: 0,
            totalMarketplaceQuantity: 0,
            totalAuctionQuantity: 0,
        },
        draftProductId: "",
        data: {},
    },
};

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setInventoryProduct: (state, { payload }) => {
            state.inventoryProduct = payload;
        },
        setAllowPublish: (state, { payload }) => {
            state.form.allowPublish = payload;
        },
        setDraftProductId: (state, { payload }) => {
            state.form.draftProductId = payload;
        },
        setSummary: (state, { payload }) => {
            state.form.summary = { ...state.form.summary, ...payload };
        },
        setFormStep: (state, { payload }) => {
            state.form.step = payload;
        },
        testSetFormData: (state, { payload }) => {
            // console.log(payload);
            if (payload.specifications) {
                state.form.data = {
                    ...state.form.data,
                    specifications: {
                        ...state.form.data.specifications,
                        ...payload.specifications,
                    },
                };
            } else if (payload.batch) {
                state.form.data = {
                    ...state.form.data,
                    batch: { ...state.form.batch, ...payload.batch },
                };
            } else if (payload.variants) {
                state.form.data = {
                    ...state.form.data,
                    variants: [{ ...state?.form?.variants, ...payload?.variants }],
                };
            } else if (payload.allocations?.marketplace) {
                console.log(payload);
                state.form.data = {
                    ...state.form.data,
                    allocations: {
                        ...state.form.data?.allocations,
                        marketplace: {
                            ...state.form?.allocations?.marketplace,
                            ...payload?.allocations?.marketplace,
                        },
                    },
                };
            } else {
                state.form.data = { ...state.form.data, ...payload };
            }
        },
        setFormData: (state, { payload }) => {
            // console.log(payload);
            if (payload.specifications) {
                state.form.data = {
                    ...state.form.data,
                    specifications: {
                        ...state.form.data.specifications,
                        ...payload.specifications,
                    },
                };
            } else if (payload.batch) {
                console.log(payload.batch);
                state.form.data = {
                    ...state.form.data,
                    batch: { ...state.form.data?.batch, ...payload.batch },
                };
            } else if (payload?.variants) {
                console.log(payload);
                if (state.form.data.variants) {
                    state.form.data = {
                        ...state.form.data,
                        variants: [
                            {
                                ...state?.form.data?.variants[0],

                                ...payload?.variants,
                            },
                        ],
                    };
                } else {
                    state.form.data = {
                        ...state.form.data,
                        variants: [
                            {
                                ...payload?.variants,
                            },
                        ],
                    };
                }
            } else if (payload.allocations?.marketplace) {
                console.log(payload);
                state.form.data = {
                    ...state.form.data,
                    allocations: {
                        ...state.form.data?.allocations,
                        marketplace: {
                            ...state.form?.allocations?.marketplace,
                            ...payload?.allocations?.marketplace,
                        },
                    },
                };
            } else {
                state.form.data = { ...state.form.data, ...payload };
            }
        },
        addAuctionToFormData: (state, { payload }) => {
            console.log(payload);
            console.log(payload);
            const formData = state.form.data;
            const allocations = formData?.allocations || {};
            const auction = allocations?.auction || [];
            state.form.data = {
                ...formData,
                allocations: {
                    ...allocations,
                    auction: [...auction, ...payload],
                },
            };
        },
        deleteAuctionData: (state, { payload }) => {
            const formData = state.form.data;
            const allocations = formData.allocations || {};
            let auction = allocations.auction || [];
            if (auction.length) {
                auction.splice(payload, 1);
            }
            state.form.data.allocations = {
                ...allocations,
                auction: auction,
            };
        },
        updateAuctionData: (state, { payload }) => {
            console.log(payload);
            const formData = state.form.data;
            const allocations = formData.allocations || {};
            let auction = allocations.auction || [];
            if (auction.length) {
                auction[payload.editIndex] = payload.auction;
            } else {
                auction = [...payload.auction];
            }
            state.form.data.allocations = {
                ...allocations,
                auction: auction,
            };
        },
        resetFormUpdate: (state) => {
            state.form = {
                allowPublish: false,
                step: 0,
                summary: {
                    totalQuantity: 0,
                    unit: "",
                    remaining: 0,
                    totalMarketplaceQuantity: 0,
                    totalAuctionQuantity: 0,
                },
                draftProductId: "",
                data: {},
            };
        },
    },
});

export default inventorySlice.reducer;
export const inventorySelector = (state) => state.inventory;
export const formSelector = (state) => state?.inventory?.form;
export const {
    setInventoryProduct,
    setFormData,
    setSummary,
    testSetFormData,
    resetFormUpdate,
    setAllowPublish,
    setDraftProductId,
    addAuctionToFormData,
    deleteAuctionData,
    updateAuctionData,
} = inventorySlice.actions;
