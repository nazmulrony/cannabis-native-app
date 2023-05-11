import cannabisProtectedApi from "./cannabisApi.services";

export const auctionApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyAuctions: builder.query({
            query: (licenseType) => `/${licenseType}s/auction/products`,
        }),
    }),
});

export const { useGetMyAuctionsQuery } = auctionApi;
