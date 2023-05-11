import React, { useEffect, useLayoutEffect } from "react";
import {
    useIsFocused,
    useNavigation,
    useNavigationState,
    useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import DrawerNavigator from "./DrawerNavigator";
import AllAuctionScreen from "../screens/auction/AllAuctionScreen";
import MyAuctionScreen from "../screens/auction/MyAuctionScreen";
import ProposalScreen from "../screens/auction/ProposalScreen";
import MarketplaceProductDetailsScreen from "../screens/MarketplaceProductDetailsScreen";
import CategoriesScreen from "../screens/categories/CategoriesScreen";
import ReceivedOrdersScreen from "../screens/orders/ReceivedOrdersScreen";
import MyOrdersScreen from "../screens/orders/MyOrdersScreen";
import ProposalListScreen from "../screens/transports/ProposalListScreen";
import CreateProposalScreen from "../screens/transports/CreateProposalScreen";
import ManageEventScreen from "../screens/events/ManageEventScreen";
import CreateEventScreen from "../screens/events/CreateEventScreen";
import PostAJobScreen from "../screens/job/PostAJobScreen";
import TalentScreen from "../screens/job/TalentScreen";
import DevicesScreen from "../screens/tracker/DevicesScreen";
import RealTimeScreen from "../screens/tracker/RealTimeScreen";
import { useDispatch, useSelector } from "react-redux";
import { addUser, authSelector, logout } from "../redux/slices/auth.slice";
import { useSwitchCompanyQuery, useVerifyCompanyQuery } from "../ApiServices/company.service";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import InventoryProductDetailsScreen from "../screens/InventoryProductDetailsScreen";
import OrderDetailsScreen from "../screens/orders/OrderDetailsScreen";
import CartScreen from "../screens/CartScreen";
import OrderCheckoutScreen from "../screens/OrderCheckoutScreen";
import AddProductScreen from "../screens/AddProduct/AddProductScreen";
import ProductAllocationScreen from "../screens/AddProduct/ProductAllocationScreen";
import { View } from "react-native";
import { Button } from "native-base";
import InvoiceDetailsScreen from "../screens/orders/InvoiceDetailsScreen";
import Colors from "../constants/Colors";
import UpdateProductScreen from "../screens/UpdateProduct/UpdateProductScreen";
import OffersScreen from "../screens/orders/OffersScreen";
import DeliveriesScreen from "../screens/orders/DeliveriesScreen";
import AuctionDetailsScreen from "../screens/auction/AuctionDetailsScreen";
import MyAuctionDetailsScreen from "../screens/auction/MyAuction/MyAuctionDetailsScreen";
import { GlobalStyles } from "../constants/style";
import NotificationsScreen from "../screens/NotificationsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    const { user } = useSelector(authSelector) || {};
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigationState = useNavigationState((state) => state);
    const currentRouteName = navigationState?.routes[navigationState?.index]?.name;

    //verify company query
    const { data, refetch } = useVerifyCompanyQuery(user?.company?._id ?? skipToken);
    useEffect(() => {
        if (user?.company._id) {
            refetch();
            // console.log("screen changed");
        }

        // console.log(`Screen changed to ${currentRouteName}`);
        // console.log(
        //     navigationState?.routes[0]?.state?.routes[
        //         navigationState?.routes[0]?.state?.routes.length - 1
        //     ]?.name
        // );
        // console.log(navigationState?.routes);
    }, [currentRouteName, navigation?.getState()]);
    useEffect(() => {
        if (data?.company) {
            dispatch(addUser);
        } else {
            dispatch(logout);
            navigation.navigate("SignInScreen");
        }
    }, [data?.company]);
    return (
        <>
            {user ? (
                <Stack.Navigator
                    screenOptions={{
                        cardStyle: { backgroundColor: "#f5f5f5", borderWidth: 3 },
                    }}
                >
                    <Stack.Screen
                        name="DrawerNavigator"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AllAuctionsScreen"
                        component={AllAuctionScreen}
                        options={({ navigation }) => ({
                            title: "All Auctions",
                        })}
                    />
                    <Stack.Screen
                        name="MyAuctionsScreen"
                        component={MyAuctionScreen}
                        options={{
                            title: "List of Track of Published product",
                            headerTitleAlign: "left",
                            headerTitleStyle: {
                                marginLeft: -16,
                            },
                        }}
                    />
                    <Stack.Screen
                        name="ProposalScreen"
                        component={ProposalScreen}
                        options={{
                            title: "Proposal",
                        }}
                    />
                    <Stack.Screen
                        name="MarketplaceProductDetailsScreen"
                        component={MarketplaceProductDetailsScreen}
                    />
                    <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
                    <Stack.Screen
                        name="ReceivedOrdersScreen"
                        component={ReceivedOrdersScreen}
                        options={{
                            title: "Received Orders",
                        }}
                    />
                    <Stack.Screen
                        name="MyOrdersScreen"
                        component={MyOrdersScreen}
                        options={{
                            title: "My Orders",
                        }}
                    />
                    <Stack.Screen
                        name="OffersScreen"
                        component={OffersScreen}
                        options={{
                            title: "Offers",
                        }}
                    />
                    <Stack.Screen
                        name="DeliveriesScreen"
                        component={DeliveriesScreen}
                        options={{
                            title: "Deliveries",
                        }}
                    />
                    <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
                    <Stack.Screen
                        name="ProposalListScreen"
                        component={ProposalListScreen}
                        options={{
                            title: "Proposal List",
                        }}
                    />
                    <Stack.Screen
                        name="CreateProposalScreen"
                        component={CreateProposalScreen}
                        options={{
                            title: "Choose Transport for Delivery",
                            headerStyle: {
                                backgroundColor: GlobalStyles.colors.light50,
                            },
                        }}
                    />
                    <Stack.Screen
                        name="ManageEventScreen"
                        component={ManageEventScreen}
                        options={{
                            title: "Manage Event",
                        }}
                    />
                    <Stack.Screen
                        name="CreateEventScreen"
                        component={CreateEventScreen}
                        options={{
                            title: "Create Event",
                        }}
                    />
                    <Stack.Screen
                        name="PostAJobScreen"
                        component={PostAJobScreen}
                        options={{
                            title: "Post Job",
                        }}
                    />
                    <Stack.Screen
                        name="TalentScreen"
                        component={TalentScreen}
                        options={{
                            title: "Talent",
                        }}
                    />
                    <Stack.Screen
                        name="DevicesScreen"
                        component={DevicesScreen}
                        options={{
                            title: "Devices",
                        }}
                    />
                    <Stack.Screen
                        name="RealTimeScreen"
                        component={RealTimeScreen}
                        options={{
                            title: "Real Time",
                        }}
                    />
                    <Stack.Screen
                        name="CartScreen"
                        component={CartScreen}
                        options={{
                            title: "Cart",
                        }}
                    />
                    <Stack.Screen
                        name="InventoryProductDetailsScreen"
                        component={InventoryProductDetailsScreen}
                    />
                    <Stack.Screen
                        name="OrderCheckoutScreen"
                        component={OrderCheckoutScreen}
                        options={{
                            title: "Checkout Orders",
                        }}
                    />
                    <Stack.Screen
                        name="AddProductScreen"
                        component={AddProductScreen}
                        options={{
                            title: "Add Product",
                            headerStyle: { backgroundColor: "#F5F5F5" },
                        }}
                    />
                    <Stack.Screen
                        name="ProductAllocationScreen"
                        component={ProductAllocationScreen}
                        options={{
                            title: "Product Allocation",
                            headerStyle: { backgroundColor: "#F5F5F5" },
                        }}
                    />
                    <Stack.Screen
                        name="UpdateProductScreen"
                        component={UpdateProductScreen}
                        options={{
                            title: "Update Product",
                            headerStyle: { backgroundColor: "#F5F5F5" },
                        }}
                    />
                    <Stack.Screen
                        name="InvoiceDetailsScreen"
                        component={InvoiceDetailsScreen}
                        options={{
                            title: "Invoice Details",
                            headerStyle: {
                                backgroundColor: Colors.light400,
                            },
                        }}
                    />
                    <Stack.Screen
                        name="AuctionDetailsScreen"
                        component={AuctionDetailsScreen}
                        options={{
                            title: "Product Details",
                        }}
                    />
                    <Stack.Screen
                        name="MyAuctionDetailsScreen"
                        component={MyAuctionDetailsScreen}
                        options={{
                            title: "Track of Product Proposal",
                        }}
                    />
                    <Stack.Screen
                        name="NotificationsScreen"
                        component={NotificationsScreen}
                        options={{
                            title: "Notifications",
                        }}
                    />
                </Stack.Navigator>
            ) : (
                <></>
            )}
        </>
    );
};

export default StackNavigator;
