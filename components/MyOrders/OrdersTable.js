import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Center, HStack, ScrollView, VStack } from "native-base";
import { GlobalStyles } from "../../constants/style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

const OrdersTable = ({ orders }) => {
    const navigation = useNavigation();
    // console.log(orders);
    const handlePress = (order) => {
        navigation.navigate("OrderDetailsScreen", order);
    };
    return (
        <ScrollView
            horizontal={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 20 }}
        >
            <VStack style={{ width: 800 }}>
                <HStack style={styles.tableHeader}>
                    <Text style={{ flex: 0.15 }}>Order ID</Text>
                    <Text
                        style={{
                            borderLeftWidth: 1,
                            borderLeftColor: GlobalStyles.colors.gray100,
                            paddingLeft: 16,
                            flex: 0.25,
                        }}
                    >
                        Date
                    </Text>
                    <Text
                        style={{
                            borderLeftWidth: 1,
                            borderLeftColor: GlobalStyles.colors.gray100,
                            paddingLeft: 16,
                            flex: 0.2,
                        }}
                    >
                        Seller
                    </Text>
                    <Text
                        style={{
                            borderLeftWidth: 1,
                            borderLeftColor: GlobalStyles.colors.gray100,
                            paddingLeft: 16,
                            flex: 0.15,
                        }}
                    >
                        Total
                    </Text>
                    <Text
                        style={{
                            borderLeftWidth: 1,
                            borderLeftColor: GlobalStyles.colors.gray100,
                            paddingLeft: 16,
                            flex: 0.15,
                        }}
                    >
                        Status
                    </Text>
                    <Text
                        style={{
                            borderLeftWidth: 1,
                            borderLeftColor: GlobalStyles.colors.gray100,
                            paddingLeft: 16,
                            flex: 0.1,
                        }}
                    >
                        Action
                    </Text>
                </HStack>
                {orders.map((order) => (
                    <HStack style={styles.tableRow} key={order?._id}>
                        <Text
                            style={{
                                flex: 0.15,
                            }}
                        >
                            {order?.order_number}
                        </Text>
                        <Text style={{ paddingLeft: 16, flex: 0.25 }}>
                            {moment(order?.createdAt).calendar()}
                        </Text>
                        <Text style={{ paddingLeft: 16, flex: 0.2 }}>
                            {order?.seller?.business_name}
                        </Text>
                        <Text style={{ paddingLeft: 16, flex: 0.15 }}>
                            ${order?.product_list[0]?.price}
                        </Text>
                        <View
                            style={{
                                paddingLeft: 16,
                                flex: 0.15,
                                flexDirection: "row",
                            }}
                        >
                            <Text style={styles.status}>{order?.status}</Text>
                        </View>
                        <View
                            style={{
                                paddingLeft: 16,
                                flex: 0.1,
                                flexDirection: "row",
                            }}
                        >
                            <Pressable
                                onPress={() => handlePress(order)}
                                style={({ pressed }) => {
                                    const baseStyle = { ...styles.action };
                                    const pressedStyle = {
                                        opacity: 0.6,
                                    };
                                    return [baseStyle, pressed && pressedStyle];
                                }}
                            >
                                <Text>View</Text>
                            </Pressable>
                        </View>
                    </HStack>
                ))}
            </VStack>
        </ScrollView>
    );
};

export default OrdersTable;

const styles = StyleSheet.create({
    tableHeader: {
        backgroundColor: "#EEF8F1",
        paddingVertical: 4,
        paddingHorizontal: 16,

        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray100,
    },
    tableRow: {
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray100,
    },
    status: {
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor: "#e6f4ff",
        borderColor: "#91caff",
        color: "#0958d9",
        justifyContent: "center",
    },
    action: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        backgroundColor: GlobalStyles.colors.light50,
        borderRadius: 6,
        paddingHorizontal: 6,
        justifyContent: "center",
    },
});
