import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ShippingAddress from "../components/CheckoutOrder/ShippingAddress";
import OrderSummery from "../components/CheckoutOrder/OrderSummery";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useGetCartQuery } from "../ApiServices/cart.service";
import { usePlaceOrderMutation } from "../ApiServices/order.service";

const OrderCheckoutScreen = ({ navigation }) => {
    // const navigation = useNavigation();
    const {
        data: { product_list: cart = [] } = {},
        error,
        isLoading,
    } = useGetCartQuery();
    const [placeOrder, placeOrderReq] = usePlaceOrderMutation();
    // const [orderId, setOrderId] = useState(null);

    const gProducts = cart?.filter((item) => item?.unit === "g");
    const lbProducts = cart?.filter((item) => item?.unit === "lb");

    console.log(gProducts, lbProducts);

    const gProductsTotal = gProducts
        .reduce(
            (total, { product, quantity }) =>
                total +
                product?.allocations?.marketplace?.price_per_g * quantity,
            0
        )
        .toFixed(2);

    const gProductsTotalQuantity = gProducts.reduce(
        (total, product) => total + product?.quantity,
        0
    );

    const lbProductsTotal = lbProducts
        .reduce(
            (total, { product, quantity }) =>
                total +
                product?.allocations?.marketplace?.price_per_lb *
                    (quantity ? quantity : 0),
            0
        )
        .toFixed(2);

    console.log(lbProductsTotal);

    const lbProductsTotalQuantity = lbProducts.reduce(
        (total, product) => total + (product?.quantity ? product?.quantity : 0),
        0
    );

    const data = {
        gProductsTotal,
        gProductsTotalQuantity,
        gProductsLen: gProducts.length,
        lbProductsTotal,
        lbProductsTotalQuantity,
        lbProductsLen: lbProducts.length,
        total:
            parseFloat(gProductsTotal).toFixed(2) +
            parseFloat(lbProductsTotal).toFixed(2),
    };

    console.log(data);

    const handlePlaceOrder = async () => {
        let orderItems = cart.map((item) => {
            let price =
                item?.unit === "lb"
                    ? item?.product?.allocations?.marketplace?.price_per_lb
                    : item?.product?.allocations?.marketplace?.price_per_g;
            return {
                product: item?.product?._id,
                title: item?.product?.title,
                price: price * item.quantity,
                quantity: item?.quantity,
                unit: item?.unit,
            };
        });
        const response = await placeOrder({ product_list: orderItems });
        if (response.data.status) {
            // setOrderId(response?.data?.order?.order_number);
            return Alert.alert(
                "Order Placed Successfully",
                `Thanks for shopping with us. You will get the delivery updates shortly`,
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate("Marketplace"),
                    },
                    {
                        text: "Order List",
                        onPress: () => {
                            navigation.navigate("MyOrdersScreen");
                        },
                    },
                ]
            );
        }
    };

    // console.log(gProductsTotal);

    return (
        <View style={styles.screen}>
            <ShippingAddress />
            <OrderSummery data={data} />
            <Button
                py={1}
                mx={5}
                colorScheme="secondary"
                onPress={handlePlaceOrder}
            >
                Place Order
            </Button>
        </View>
    );
};

export default OrderCheckoutScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
