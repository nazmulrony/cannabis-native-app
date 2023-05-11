import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const ProductDescription = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Description</Text>
            <Text style={styles.fontBase}>
                itrus Gelato Cake is a heavy hitting indica dominant hybrid. A
                complex cross off wedding cake, gelato 33 and orange Sherbert t
                has a. This text needs to be cut off...{" "}
                <Text style={styles.fontBasePrimary}>Read more</Text>
            </Text>
        </View>
    );
};

export default ProductDescription;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: GlobalStyles.colors.gray100,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    fontBasePrimary: {
        color: GlobalStyles.colors.primary500,
    },
});
