import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { store } from "../redux/store";

const cannabisProtectedApi = createApi({
    reducerPath: "cannabisApi",
    tagTypes: ["inventoryProducts", "fetchCart", "fetchOrders", "notification"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://65.108.85.46:8000/api/v1",
        prepareHeaders: (headers, { getState }) => {
            const { accessToken } = getState().auth?.user;
            if (accessToken) {
                // headers.set("Authorization", `Bearer ${accessToken}`);
                headers.set("Authorization", `Bearer ${accessToken}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});

export default cannabisProtectedApi;
