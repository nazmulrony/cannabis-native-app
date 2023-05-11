import cannabisProtectedApi from "./cannabisApi.services";

export const marketPlaceAPI = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (licenseType) => `${licenseType}s/marketplace/products`,
        }),
        getSearchProducts: builder.query({
            query: (searchkey) =>
                `growers/marketplace/products?category=${searchkey}`,
        }),
        getProductBySlug: builder.query({
            query: (slug) => `growers/marketplace/products/${slug}`,
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSearchProductsQuery,
    useGetProductBySlugQuery,
} = marketPlaceAPI;
