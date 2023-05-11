import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import InvoiceCard from "../../components/InvoiceDetails/InvoiceCard";
import { useGetOrdersByIdQuery } from "../../ApiServices/order.service";
import OrderNotes from "../../components/OrderDetails/OrderNotes";
import CustomerInfo from "../../components/OrderDetails/CustomerInfo";
import Timeline from "../../components/OrderDetails/Timeline";
import Message from "../../components/OrderDetails/Message";
import { VStack } from "native-base";
import { useCreateRoomMutation } from "../../ApiServices/messages.service";

const InvoiceDetailsScreen = ({ route }) => {
    const order_id = route.params;
    const { data: order, isLoading } = useGetOrdersByIdQuery(order_id, {
        refetchOnMountOrArgChange: true,
    });
    console.log(order);
    const [createRoom, { data: { room } = {}, isLoading: roomLoading }] =
        useCreateRoomMutation();
    useEffect(() => {
        order_id && createRoom({ type: "order", order_id: order_id });
    }, [order_id, createRoom]);
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <InvoiceCard order={order?.order} />
                )}
                <View
                    style={{
                        backgroundColor: "#EFEFEF",
                        marginVertical: 20,
                        borderRadius: 7,
                        overflow: "hidden",
                    }}
                >
                    <OrderNotes />
                    <CustomerInfo info={order?.order?.seller} />
                    <Timeline timeline={order?.order?.timeline} />
                    <Message room={room} loading={roomLoading} />
                </View>
            </ScrollView>
        </View>
    );
};

export default InvoiceDetailsScreen;

const styles = StyleSheet.create({});
