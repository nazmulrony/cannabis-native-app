import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../ApiServices/order.service";
import Colors from "../constants/Colors";
import { authSelector } from "../redux/slices/auth.slice";
import AllOrdersScreen from "../screens/orders/MyOrderSubScreens.js/AllOrdersScreen";
import ConfirmOrdersScreen from "../screens/orders/MyOrderSubScreens.js/ConfirmOrdersScreen";
import DeclinedOrdersScreen from "../screens/orders/MyOrderSubScreens.js/DeclinedOrdersScreen";
import PendingOrdersScreen from "../screens/orders/MyOrderSubScreens.js/PendingOrdersScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    const { user } = useSelector(authSelector);
    const { data, isLoading } = useGetOrdersQuery(
        user?.accessToken ?? skipToken
    );
    return (
        <Tab.Navigator
            initialRouteName="All"
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarGap: 0,
                    tabBarItemStyle: {
                        // borderWidth: 1,
                        paddingVertical: 0,
                        paddingLeft: 20,
                        paddingRight: 30,
                        width: "auto",
                        // marginRight: 20,
                        // position: "relative",
                    },
                    tabBarActiveTintColor: Colors.green500,
                    tabBarIndicatorStyle: { backgroundColor: Colors.green500 },
                    tabBarInactiveTintColor: Colors.dark300,
                    tabBarLabelStyle: {
                        fontWeight: 600,
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        position: "relative",
                    },
                    tabBarScrollEnabled: true,
                    tabBarBadge: () => (
                        <View
                            style={{
                                position: "absolute",
                                display: navigation.isFocused()
                                    ? "flex"
                                    : "flex",
                                top: 15,
                                left: -25,
                                width: data?.orders.length < 100 ? 20 : 30,
                                height: data?.orders.length < 100 ? 20 : 30,
                                backgroundColor: navigation.isFocused()
                                    ? Colors.green500
                                    : Colors.dark300,
                                borderRadius: 100,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {route.name === "All" && (
                                <Text
                                    style={{
                                        color: "white",
                                    }}
                                >
                                    {data?.orders?.length || 0}
                                </Text>
                            )}
                            {route.name === "Confirmed" && (
                                <Text
                                    style={{
                                        color: "white",
                                    }}
                                >
                                    5
                                </Text>
                            )}
                            {route.name === "Pending" && (
                                <Text
                                    style={{
                                        color: "white",
                                    }}
                                >
                                    0
                                </Text>
                            )}
                            {route.name === "Declined" && (
                                <Text
                                    style={{
                                        color: "white",
                                    }}
                                >
                                    3
                                </Text>
                            )}
                        </View>
                    ),
                };
            }}
        >
            <Tab.Screen
                name="All"
                component={AllOrdersScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Confirmed"
                component={ConfirmOrdersScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Pending"
                component={PendingOrdersScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Declined"
                component={DeclinedOrdersScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default TopTabNavigator;
