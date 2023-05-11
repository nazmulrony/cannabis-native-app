import cannabisProtectedApi from "./cannabisApi.services";

export const inventoryApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        createProducts: builder.mutation({
            query: (formData) => ({
                url: "/growers/inventory/products",
                method: "post",
                body: formData,
            }),
            invalidatesTags: ["inventoryProducts"],
        }),
        getProducts: builder.query({
            query: (licenseType) => `/${licenseType}s/inventory/products`,
            providesTags: ["inventoryProducts"],
        }),
        searchProducts: builder.query({
            query: (query) => `inventory-products/search?q=${query}`,
            providesTags: ["inventoryProducts"],
        }),

        updateProducts: builder.mutation({
            query: ({ id, formData }) => ({

                url: `/growers/inventory/products/${id}`,
                method: "put",
                body: formData,
            }),
            invalidatesTags: ["inventoryProducts"],
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `/growers/inventory/products/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["inventoryProducts"],
        }),
    }),
});

export const {
    useCreateProductsMutation,
    useGetProductsQuery,
    useSearchProductsQuery,
    useUpdateProductsMutation,
    useDeleteProductsMutation,
} = inventoryApi;
