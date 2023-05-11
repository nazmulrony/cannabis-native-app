import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../../redux/slices/auth.slice";
import { useGetOrdersQuery } from "../../../ApiServices/order.service";
import { HStack, Skeleton } from "native-base";
import { FlatList } from "react-native";
import OrderCard from "../../../components/MyOrders/OrderCard";

const AllOrdersScreen = () => {
    const { user } = useSelector(authSelector);
    const { data, isLoading } = useGetOrdersQuery(
        user?.accessToken ?? skipToken
    );
    // console.log(data);
    return (
        <>
            {isLoading ? (
                [1, 2, 3, 4, 5, 6].map((index) => (
                    <HStack
                        key={index}
                        style={{ marginHorizontal: 20, marginBottom: 20 }}
                    >
                        <Skeleton rounded="md" h={"40"} />
                    </HStack>
                ))
            ) : data?.orders?.length > 0 ? (
                <FlatList
                    data={data?.orders}
                    renderItem={({ item }) => <OrderCard order={item} />}
                    keyExtractor={(item) => item._id}
                    // windowSize={5}
                    style={{ paddingTop: 20 }}
                />
            ) : (
                <Text>No orders found !</Text>
            )}
        </>
    );
};

export default AllOrdersScreen;

const styles = StyleSheet.create({});
