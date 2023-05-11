import cannabisProtectedApi from "./cannabisApi.services";

export const cartApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => "/growers/carts",
            providesTags: ["fetchCart"],
        }),
        addToCart: builder.mutation({
            query: (payload) => ({
                url: `/growers/carts`,
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["fetchCart"],
        }),
        updateCart: builder.mutation({
            query: (payload) => ({
                url: `/growers/carts`,
                method: "put",
                body: payload,
            }),
            invalidatesTags: ["fetchCart"],
        }),
        removeProduct: builder.mutation({
            query: (itemId) => ({
                url: `/growers/carts/${itemId}`,
                method: "delete",
            }),
            invalidatesTags: ["fetchCart"],
        }),
    }),
});

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useUpdateCartMutation,
    useRemoveProductMutation,
} = cartApi;
