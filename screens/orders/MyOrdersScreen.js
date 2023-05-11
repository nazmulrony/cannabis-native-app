import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useGetOrdersQuery } from "../../ApiServices/order.service";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/slices/auth.slice";
import SearchBar from "../../components/DashBoard/SearchBar";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Box, HStack, Icon, IconButton, Skeleton } from "native-base";
import OrdersTable from "../../components/MyOrders/OrdersTable";
import { AntDesign } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/style";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import OrderCard from "../../components/MyOrders/OrderCard";
import { KeyboardAvoidingView } from "react-native";
import AllOrdersScreen from "./MyOrderSubScreens.js/AllOrdersScreen";
import TopTabNavigator from "../../navigators/TopTabNavigator";

const MyOrdersScreen = ({ navigation }) => {
    // const { user } = useSelector(authSelector);
    // const { data, isLoading } = useGetOrdersQuery(
    //     user?.accessToken ?? skipToken
    // );
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );

    // useEffect(() => {
    //     navigation.reset();
    // }, []);

    return (
        <View style={styles.screen}>
            <View
                style={{
                    paddingTop: 16,
                    paddingHorizontal: 20,
                    backgroundColor: "white",
                }}
            >
                <SearchBar style={{ marginBottom: 0 }} />
            </View>
            {/* {isLoading ? (
                [1, 2, 3, 4, 5, 6].map((index) => (
                    <HStack
                        key={index}
                        style={{ marginHorizontal: 20, marginBottom: 20 }}
                    >
                        <Skeleton rounded="md" h={"40"} />
                    </HStack>
                ))
            ) : data?.orders.length > 0 ? (
                <FlatList
                    data={data?.orders}
                    renderItem={({ item }) => <OrderCard order={item} />}
                    keyExtractor={(item) => item._id}
                />
            ) : (
                <Text>No orders found !</Text>
            )} */}
            {/* <AllOrdersScreen /> */}
            <TopTabNavigator />
        </View>
    );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: "white",
        // paddingHorizontal: 20,
    },
    container: {
        flex: 1,
    },
    paging: {
        backgroundColor: "white",
        marginHorizontal: 20,
    },
});
