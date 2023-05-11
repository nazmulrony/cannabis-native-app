import cannabisProtectedApi from "./cannabisApi.services";

export const notificationApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotification: builder.query({
            query: (page_number) =>
                `/growers/notifications?page=${page_number}`,
            providesTags: ["notification"],
        }),
        readAllNotification: builder.mutation({
            query: (data) => ({
                url: `/growers/notifications/read`,
                method: "post",
                body: data,
            }),
            invalidatesTags: ["notification"],
        }),
    }),
});

export const { useGetNotificationQuery, useReadAllNotificationMutation } =
    notificationApi;
