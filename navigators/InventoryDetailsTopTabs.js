import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Colors from "../constants/Colors";
import Messages from "../components/InventoryProductDetails/Messages";
import Auction from "../components/InventoryProductDetails/Auction";
import Marketplace from "../components/InventoryProductDetails/Marketplace";
import Offers from "../components/InventoryProductDetails/Offers";
import Analytics from "../components/InventoryProductDetails/Analytics";

const Tab = createMaterialTopTabNavigator();

const InventoryDetailsTopTabs = () => {
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
                    tabBarStyle: {
                        elevation: 0.5,
                    },
                };
            }}
        >
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Auction"
                component={Auction}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Marketplace"
                component={Marketplace}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Offers"
                component={Offers}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Analytics"
                component={Analytics}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default InventoryDetailsTopTabs;
