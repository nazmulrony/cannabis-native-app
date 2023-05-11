import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductsTable from "../components/Inventory/ProductsTable";
import BundleTable from "../components/Inventory/BundleTable";
import Colors from "../constants/Colors";
import Test from "../screens/Test";
import { GlobalStyles } from "../constants/style";

const Tab = createMaterialTopTabNavigator();

const InventoryTopTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Products"
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarPressColor: GlobalStyles.colors.gray200,
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
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                    },
                };
            }}
            // style={{ minHeight: 900 }}
        >
            <Tab.Screen
                name="Products"
                component={ProductsTable}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Bundle"
                component={BundleTable}
                options={{ headerShown: false }}
            />
            {/* <Tab.Screen
                name="Test"
                component={Test}
                options={{ headerShown: false }}
            /> */}
        </Tab.Navigator>
    );
};

export default InventoryTopTabs;
