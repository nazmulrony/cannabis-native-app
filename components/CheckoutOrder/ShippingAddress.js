import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { VStack } from "native-base";

const ShippingAddress = () => {
    return (
        <View style={styles.container}>
            <Text>Shipping Address</Text>
            <View style={styles.divider} />
            <VStack space={1}>
                <Text style={styles.address}>Acreage Holdings</Text>
                <Text style={styles.address}>
                    4378 Murphy Court, Los Angeles, California, United States
                </Text>
                <Text style={styles.address}>+1-202-555-0185</Text>
            </VStack>
        </View>
    );
};

export default ShippingAddress;

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
    address: {
        fontSize: 16,
        fontWeight: "400",
    },
});
