import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const Specifications = ({ product }) => {
    const data = product?.specifications;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Specifications</Text>
            <View style={styles.specificationContainer}>
                {/* {data?.map((d, index) => {
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
                })} */}
                <View style={styles.specificationItem}>
                    <Text style={styles.label}>Category</Text>
                    <Text style={styles.Value}>{product?.category}</Text>
                </View>
                <View style={styles.specificationItem}>
                    <Text style={styles.label}>Strain</Text>
                    <Text style={styles.Value}>{data?.strain}</Text>
                </View>
                <View style={styles.specificationItem}>
                    <Text style={styles.label}>Terpenes</Text>
                    <Text style={styles.Value}>{data?.terpenes}</Text>
                </View>
                <View style={styles.specificationItem}>
                    <Text style={styles.label}>Cannabinoids</Text>
                    <Text style={styles.Value}>{data?.total_cannabinoids}</Text>
                </View>
                <View style={styles.specificationItem}>
                    <Text style={styles.label}>Cultivation</Text>
                    <Text style={styles.Value}>{data?.cultivation_type}</Text>
                </View>
                <View style={styles.specificationItem}>
                    <Text style={styles.label}>Batch No.</Text>
                    <Text style={styles.Value}>{product?.batch?.number}</Text>
                </View>
                <View
                    style={[styles.specificationItem, { borderBottomWidth: 0 }]}
                >
                    <Text style={styles.label}>THC</Text>
                    <Text style={styles.Value}>{data?.thc}%</Text>
                </View>
                <View
                    style={[styles.specificationItem, { borderBottomWidth: 0 }]}
                >
                    <Text style={styles.label}>Brand</Text>
                    <Text style={styles.Value}>{data?.brand}</Text>
                </View>
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
        borderBottomWidth: 1,
        paddingBottom: 12,
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
