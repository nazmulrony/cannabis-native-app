import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://65.108.85.46:8000/api/v1",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo,
            }),
        }),
        signup: builder.mutation({
            query: (userInfo) => ({
                url: "/companies",
                method: "POST",
                body: userInfo,
            }),
        }),
        createPassword: builder.mutation({
            query: ({ token, password }) => ({
                url: `auth/set-password/${token}`,
                method: "put",
                body: password,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useCreatePasswordMutation,
} = authApi;
