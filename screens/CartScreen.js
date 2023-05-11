import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useGetCartQuery } from "../ApiServices/cart.service";
import CardSkeleton from "../ui/CardSkeleton";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartItem from "../components/Cart/CartItem";
import { Button } from "native-base";

const CartScreen = () => {
    const navigation = useNavigation();
    const { data, isLoading } = useGetCartQuery(null, {
        refetchOnMountOrArgChange: true,
    });
    useEffect(() => {
        console.log(data);
    }, [data]);
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                {isLoading ? (
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6]}
                        renderItem={({ index }) => <CardSkeleton key={index} />}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                ) : data?.product_list?.length ? (
                    <FlatList
                        data={data?.product_list}
                        renderItem={({ item, index }) => (
                            <CartItem
                                len={data?.product_list?.length}
                                index={index}
                                item={item}
                                key={index}
                                // product={item.product}
                                // unit={item.unit}
                                // quantity={item.quantity}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: 100,
                        }}
                    >
                        <Image
                            source={require("../assets/images/no-product-thumb.png")}
                            style={{ width: "80%", resizeMode: "contain" }}
                        />
                    </View>
                )}
                {data?.product_list.length ? (
                    <Button
                        isLoading={isLoading}
                        isLoadingText={"Please wait"}
                        onPress={() => {
                            navigation.navigate("OrderCheckoutScreen");
                        }}
                        mb={4}
                        mt={4}
                        py={2}
                        _text={{ fontWeight: "semibold", fontSize: 16 }}
                    >
                        Checkout
                    </Button>
                ) : (
                    <Button
                        isLoading={isLoading}
                        isLoadingText={"Please wait"}
                        onPress={() => {
                            navigation.navigate("MarketplaceScreen");
                        }}
                        mb={4}
                        mt={4}
                        py={2}
                        _text={{ fontWeight: "semibold", fontSize: 16 }}
                    >
                        Shop
                    </Button>
                )}
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
