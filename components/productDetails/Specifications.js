import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const Specifications = ({ product }) => {
    //console.log(product);
    const data = [
        {
            label: "Category",
            value: product?.category,
        },
        {
            label: "Batch Size",
            value: product?.batch?.size,
        },
        {
            label: "Weight",
            value: product?.allocations?.marketplace?.min_qty_lb + " lbs",
        },
        {
            label: "Batch No",
            value: product?.batch?.number,
        },
        {
            label: "Terpenes",
            value: product?.specifications?.terpenes,
        },
        {
            label: "THC level",
            value: product?.specifications?.thc,
        },
        {
            label: "Strains",
            value: product?.specifications?.strain,
        },
        {
            label: "Canabinoids",
            value: product?.specifications?.total_cannabinoids,
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Specifications</Text>
            <View style={styles.specificationContainer}>
                {data.map((d, index) => {
                    return (
                        <View
                            key={index}
                            style={[
                                styles.specificationItem,
                                index < data.length - 2 && {
                                    borderBottomWidth: 1,
                                    paddingBottom: 12,
                                },
                            ]}
                        >
                            <Text style={styles.label}>{d.label}</Text>
                            <Text style={styles.Value}>{d.value}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default Specifications;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: GlobalStyles.colors.gray100,
    },
    title: {
        fontSize: 18,
        color: GlobalStyles.colors.gray700,
        fontWeight: "600",
        marginBottom: 8,
    },
    specificationContainer: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
    },
    specificationItem: {
        // borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray100,
        width: "46%",
        paddingTop: 12,
    },
    label: {
        fontSize: 14,
        color: GlobalStyles.colors.gray700,
    },
    Value: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
});
