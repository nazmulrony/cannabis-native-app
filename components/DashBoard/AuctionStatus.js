import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { Button } from "native-base";

const AuctionStatus = () => {
    const demo = [
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
        {
            product: "Lemon Kush",
            category: "Flowers",
            bid: "320.00",
            client: "John Doe",
        },
    ];

    const newData = demo.slice(0, 4);

    const [data, setData] = useState(newData);

    const [toggle, setToggle] = useState(false);

    const handleShowMore = () => {
        if (toggle) {
            setData(newData);
        } else {
            setData(demo);
        }
        setToggle(!toggle);
    };

    return (
        <View style={styles.autionContainer}>
            <Text style={styles.titleText}>Auction Status</Text>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeaderContainer}>
                    <Text style={styles.tableHeader}>Product</Text>
                    <Text style={styles.tableHeader}>Highest Bid</Text>
                    <Text style={[styles.tableHeader, { borderRightWidth: 0 }]}>
                        Client
                    </Text>
                </View>
                {data.map((d, index) => (
                    <View key={index} style={styles.row}>
                        <View style={styles.dataField}>
                            <Text style={styles.name}>{d.product}</Text>
                            <Text style={styles.productCategory}>
                                {d.category}
                            </Text>
                        </View>
                        <View style={styles.dataField}>
                            <Text style={styles.price}>${d.bid}</Text>
                        </View>
                        <View style={styles.dataField}>
                            <Text style={styles.name}>{d.client}</Text>
                        </View>
                    </View>
                ))}
            </View>
            {/* <Pressable onPress={handleShowMore} style={styles.btn}>
                <Text style={styles.btnText}>
                    {toggle ? "View less" : "View more"}
                </Text>
            </Pressable> */}
            <Button
                bg={"primary.400"}
                rounded={"lg"}
                _text={{
                    color: "white",
                    lineHeight: 21,
                    fontSize: 14,
                    fontWeight: "600",
                }}
                onPress={handleShowMore}
                style={{
                    marginHorizontal: 14,
                    marginTop: 10,
                    marginBottom: 24,
                }}
            >
                {toggle ? "View less" : "View more"}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    autionContainer: {
        borderRadius: 6,
        backgroundColor: "white",
        marginBottom: 20,
    },
    titleText: {
        color: Colors.dark600,
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "600",
        padding: 14,
    },
    tableContainer: {
        paddingBottom: 14,
    },
    tableHeaderContainer: {
        backgroundColor: "#FAFAFA",
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
        flex: 1,
    },
    tableHeader: {
        color: Colors.dark400,
        fontSize: 12,
        borderRightWidth: 1,
        borderRightColor: Colors.dark400,
        flex: 1,
        textAlign: "center",
    },
    row: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#DADAD9",
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.dark600,
        fontWeight: "500",
    },
    productCategory: {
        fontSize: 11,
        lineHeight: 16.5,
        color: Colors.dark400,
        fontWeight: "400",
    },
    price: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.dark600,
        fontWeight: "400",
    },
    dataField: {
        padding: 14,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginHorizontal: 14,
        marginTop: 10,
        marginBottom: 24,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: Colors.green500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "white",
        lineHeight: 21,
        fontSize: 14,
        fontWeight: "600",
    },
});

export default AuctionStatus;
