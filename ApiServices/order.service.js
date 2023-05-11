import cannabisProtectedApi from "./cannabisApi.services";

const ordersApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        placeOrder: builder.mutation({
            query: (payload) => ({
                url: "/growers/orders/",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["fetchOrders", "fetchCart"],
        }),
        updateOrder: builder.mutation({
            query: ({ id, data }) => ({
                url: `/growers/orders/${id}`,
                method: "put",
                body: data,
            }),
            invalidatesTags: ["fetchOrders"],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/growers/orders/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["fetchOrders"],
        }),
        getOrders: builder.query({
            query: () => "/growers/orders",
            providesTags: ["fetchOrders"],
        }),
        getReceivedOrders: builder.query({
            query: () => "/growers/orders/received",
            providesTags: ["fetchOrders"],
        }),
        getOrdersById: builder.query({
            query: (orderId) => `/growers/orders/${orderId}`,
            providesTags: ["fetchOrders"],
        }),
    }),
});

export const {
    usePlaceOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useGetOrdersQuery,
    useGetOrdersByIdQuery,
    useGetReceivedOrdersQuery,
} = ordersApi;
