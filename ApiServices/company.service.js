import cannabisProtectedApi from "./cannabisApi.services";

const companyApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        switchCompany: builder.query({
            query: (id) => ({
                url: `/users/companies/${id}`,
            }),
        }),
        verifyCompany: builder.query({
            query: (id) => ({
                url: `/users/companies/${id}`,
            }),
        }),
    }),
});

export const { useSwitchCompanyQuery, useVerifyCompanyQuery } = companyApi;
