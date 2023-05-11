import { View, Text } from "react-native";
import React, { useCallback } from "react";
import SearchBar from "../../components/DashBoard/SearchBar";
import { useGetReceivedOrdersQuery } from "../../ApiServices/order.service";
import { Button, HStack, Skeleton } from "native-base";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import OrderCard from "../../components/MyOrders/OrderCard";
import { Image } from "react-native";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import { Dimensions } from "react-native";

const ReceivedOrdersScreen = ({ navigation }) => {
    const { data, isLoading } = useGetReceivedOrdersQuery(null, {
        refetchOnMountOrArgChange: true,
    });
    useFocusEffect(
        useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {(isLoading || data?.orders?.length > 0) && (
                    <SearchBar
                        style={{ marginTop: 16, marginHorizontal: 20 }}
                    />
                )}
                {isLoading ? (
                    [1, 2, 3, 4, 5, 6].map((index) => (
                        <HStack
                            key={index}
                            style={{ marginHorizontal: 20, marginBottom: 20 }}
                        >
                            <Skeleton rounded="md" h={"40"} />
                        </HStack>
                    ))
                ) : data?.orders.length > 0 ? (
                    data?.orders?.map((order) => (
                        <OrderCard key={order?._id} order={order} />
                    ))
                ) : (
                    <View
                        style={{
                            flex: 1,
                            height: Dimensions.get("window").height,
                            // borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            // paddingBottom: 100,
                            backgroundColor: "white",
                        }}
                    >
                        <Image
                            source={require("../../assets/images/no-product-thumb.png")}
                            style={{
                                width: "80%",
                                resizeMode: "contain",
                                marginTop: -100,
                            }}
                        />
                        <Button
                            onPress={() =>
                                navigation.navigate("OrderDetailsScreen")
                            }
                        >
                            Order Details Screen
                        </Button>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: "white",
        // paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        // borderWidth: 1,
    },
    paging: {
        backgroundColor: "white",
        marginHorizontal: 20,
    },
});

export default ReceivedOrdersScreen;
