import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { HStack, VStack } from "native-base";
import { Dimensions } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formSelector } from "../../redux/slices/inventory.slice";

const AllocationSummary = ({ }) => {
    const { summary } = useSelector(formSelector)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Allocation Summary</Text>
            <VStack>
                <HStack>
                    <Text
                        style={[
                            styles.key,
                            { borderTopWidth: 1, borderTopLeftRadius: 8 },
                        ]}
                    >
                        Total Quantity
                    </Text>
                    <Text
                        style={[
                            styles.value,
                            { borderTopWidth: 1, borderTopRightRadius: 8 },
                        ]}
                    >
                        {`${summary?.totalQuantity} ${summary.unit}`}
                    </Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Marketplace</Text>
                    <Text style={styles.value}>
                        {`${summary?.totalMarketplaceQuantity} ${summary?.unit}`}
                    </Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Auction</Text>
                    <Text style={styles.value}>
                        {`${summary?.totalAuctionQuantity} ${summary?.unit}`}
                    </Text>
                </HStack>
                <HStack>
                    <Text style={[styles.key, { borderBottomLeftRadius: 8 }]}>
                        Remaining
                    </Text>
                    <Text
                        style={[styles.value, { borderBottomRightRadius: 8 }]}
                    >
                        {`${summary?.remaining} ${summary?.unit}`}
                    </Text>
                </HStack>
            </VStack>
        </View>
    );
};

export default AllocationSummary;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 16
    },
    key: {
        width: Dimensions.get("screen").width / 2,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingVertical: 8,
        paddingLeft: 12,
        borderColor: GlobalStyles.colors.gray200,
        backgroundColor: GlobalStyles.colors.light50,
    },
    value: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 12,
        borderColor: GlobalStyles.colors.gray200,
    },
});
