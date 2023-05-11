import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { VStack, HStack, Button } from "native-base";

const OrderSummery = ({ data }) => {
    const discount = data?.discount ? data?.discount : 0;
    const subTotal = (
        parseFloat(data?.gProductsTotal) + parseFloat(data?.lbProductsTotal)
    ).toFixed(2);
    const discountedAmount = ((subTotal * discount) / 100).toFixed(2);
    return (
        <View style={styles.container}>
            <Text>Price List</Text>
            <View style={styles.divider} />
            <VStack space={1}>
                <HStack justifyContent={"space-between"}>
                    <Text>g price({data?.gProductsLen} item)</Text>
                    <Text>${data?.gProductsTotal}</Text>
                </HStack>
                <Text style={styles.unit}>
                    Total: {data?.gProductsTotalQuantity}g
                </Text>
                <HStack justifyContent={"space-between"}>
                    <Text>lb price({data?.lbProductsLen} item)</Text>
                    <Text>${data?.lbProductsTotal}</Text>
                </HStack>
                <Text style={styles.unit}>
                    Total: {data?.lbProductsTotalQuantity}lb
                </Text>
            </VStack>
            <View style={styles.divider} />
            <VStack space={1}>
                <HStack justifyContent={"space-between"}>
                    <Text>Subtotal</Text>
                    <Text>${subTotal}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                    <Text>Discount ({discount}%)</Text>
                    <Text>${discountedAmount}</Text>
                </HStack>
            </VStack>
            <View style={styles.divider} />
            <HStack justifyContent={"space-between"}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>
                    ${(subTotal - discountedAmount).toFixed(2)}
                </Text>
            </HStack>
        </View>
    );
};

export default OrderSummery;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 8,
        marginVertical: 10,
        padding: 20,
        elevation: 2,
        overflow: "hidden",
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray200,
        marginHorizontal: -20,
        marginVertical: 16,
    },
    unit: {
        color: GlobalStyles.colors.gray300,
        fontWeight: "500",
    },
    total: {
        fontSize: 18,
    },
});
