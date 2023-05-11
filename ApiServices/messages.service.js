import cannabisProtectedApi from "./cannabisApi.services";

export const messagesApi = cannabisProtectedApi.injectEndpoints({
    endpoints: (builder) => ({
        createRoom: builder.mutation({
            query: (data) => ({
                url: "/growers/rooms",
                method: "post",
                body: data,
                //Here should receive an object with type and product_id/order_id property to create new room
            }),
        }),
        sendMessage: builder.mutation({
            query: (data) => ({
                url: "/growers/rooms/messages",
                method: "post",
                body: data,
                //Here should receive an object with {room_id:"_____", text:"messages....."} to send new message
            }),
            async onQueryStarted(
                { room_id, text },
                { dispatch, queryFulfilled, getState }
            ) {
                const patchResult = dispatch(
                    cannabisProtectedApi.util.updateQueryData(
                        "getRoomMessages",
                        room_id,
                        (draft) => {
                            const newObj = {
                                user_id: {
                                    profile_pic:
                                        getState().auth?.user?.user
                                            ?.profile_pic,
                                    first_name:
                                        getState().auth?.user?.user?.first_name,
                                    last_name:
                                        getState().auth?.user?.user?.last_name,
                                },
                                createdAt: Date.now(),
                                room_id,
                                text,
                            };
                            draft.messages.push(newObj);
                        }
                    )
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
        getRoomMessages: builder.query({
            query: (roomId) => `/growers/rooms/messages/${roomId}`,
            // async onCacheEntryAdded(
            //   arg,
            //   { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            // ) {
            //   // create a websocket connection when the cache subscription starts
            //   const ws = new WebSocket('ws://localhost:8080')
            //   try {
            //     // wait for the initial query to resolve before proceeding
            //     await cacheDataLoaded

            //     // when data is received from the socket connection to the server,
            //     // if it is a message and for the appropriate channel,
            //     // update our query result with the received message
            //     const listener = (event) => {
            //       const data = JSON.parse(event.data)
            //       // if (!isMessage(data) || data.channel !== arg) return
            //       updateCachedData((draft) => {
            //         draft.push(data)
            //       })
            //     }
            //     ws.addEventListener('message', listener)
            //   } catch {
            //     // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
            //     // in which case `cacheDataLoaded` will throw
            //   }
            //   // cacheEntryRemoved will resolve when the cache subscription is no longer active
            //   await cacheEntryRemoved
            //   // perform cleanup steps once the `cacheEntryRemoved` promise resolves
            //   ws.close()
            // },
        }),
        getAllRooms: builder.query({
            query: () => "growers/rooms",
        }),
    }),
});

export const {
    useGetRoomMessagesQuery,
    useCreateRoomMutation,
    useSendMessageMutation,
    useGetAllRoomsQuery,
} = messagesApi;
