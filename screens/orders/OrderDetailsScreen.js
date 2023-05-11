import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import OrderStatus from "../../components/OrderDetails/OrderStatus";
import ProductsList from "../../components/OrderDetails/ProductsList";
import OrderNotes from "../../components/OrderDetails/OrderNotes";
import CustomerInfo from "../../components/OrderDetails/CustomerInfo";
import Timeline from "../../components/OrderDetails/Timeline";
import Message from "../../components/OrderDetails/Message";
import {
    Entypo,
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
} from "@expo/vector-icons";

const OrderDetailsScreen = ({ route, navigation }) => {
    const order = route.params;
    // console.log(order);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: order?.order_number,
        });
    }, []);
    const orderStatus = [
        {
            icon: {
                type: Entypo,
                name: "shopping-bag",
            },
            title: "Order Received",
        },
        {
            icon: {
                type: MaterialCommunityIcons,
                name: "truck",
            },
            title: "Organizing Transport",
        },
        {
            icon: {
                type: FontAwesome,
                name: "calendar-check-o",
            },
            title: "Delivery Schedule",
        },
        {
            icon: {
                type: MaterialCommunityIcons,
                name: "truck-delivery",
            },
            title: "Out for Delivery",
        },
        {
            icon: {
                type: AntDesign,
                name: "checkcircle",
            },
            title: "Delivered",
        },
    ];
    const [selected, setSelected] = useState([orderStatus[0].title]);
    return (
        <View style={styles.container}>
            <ScrollView
                style={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <OrderStatus selected={selected} orderStatus={orderStatus} />
                <ProductsList order={order} />
                <OrderNotes />
                <CustomerInfo />
                <Timeline timeline={order?.timeline} />
                <Message />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: 20,
        // paddingHorizontal: 20,
    },
});

export default OrderDetailsScreen;
