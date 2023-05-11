import { StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { Box, Button, ScrollView, Text } from "native-base";

const TransactionHistory = () => {
    const demo = [
        {
            id: "001",
            client: "John Duo",
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
            isVerified: true,
        },
        {
            id: "001",
            client: "John Duo",
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
            isVerified: false,
        },
        {
            id: "001",
            client: "John Duo",
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
            isVerified: true,
        },
        {
            id: "001",
            client: "John Duo",
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
            isVerified: false,
        },
        {
            id: "001",
            client: "John Duo",
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
            isVerified: true,
        },
        {
            id: "001",
            client: "John Duo",
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
            isVerified: true,
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
        <Box style={styles.transactionContainer}>
            <Text style={styles.titleText}>TransactionHistory</Text>
            <ScrollView
                style={styles.tableContainer}
                horizontal={true}
                nestedScrollEnabled
            >
                <Box>
                    <Box style={styles.tableHeaderContainer}>
                        <Text style={[styles.tableHeader, { width: 56 }]}>
                            ID
                        </Text>
                        <Text style={[styles.tableHeader, { width: 123 }]}>
                            Client
                        </Text>
                        <Text style={[styles.tableHeader, { width: 173 }]}>
                            Event
                        </Text>
                        <Text style={[styles.tableHeader, { width: 80 }]}>
                            Amount
                        </Text>
                        <Text style={[styles.tableHeader, { width: 100 }]}>
                            Date
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                { borderRightWidth: 0, width: 123 },
                            ]}
                        >
                            Status
                        </Text>
                    </Box>
                    {data.map((d, index) => (
                        <Box key={index} style={styles.row}>
                            <Box style={[styles.dataField, { width: 56 }]}>
                                <Text style={styles.text}>#{d.id}</Text>
                            </Box>
                            <Box style={[styles.dataField, { width: 123 }]}>
                                <Text style={styles.text}>{d.client}</Text>
                            </Box>
                            <Box style={[styles.dataField, { width: 173 }]}>
                                <Text style={styles.text}>{d.event}</Text>
                            </Box>
                            <Box style={[styles.dataField, { width: 80 }]}>
                                <Text style={styles.text}>${d.amount}</Text>
                            </Box>
                            <Box style={[styles.dataField, { width: 100 }]}>
                                <Text style={styles.text}>{d.date}</Text>
                            </Box>
                            <Box style={[styles.dataField, { width: 123 }]}>
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            color: `${
                                                d.isVerified
                                                    ? Colors.green500
                                                    : "tomato"
                                            }`,
                                        },
                                    ]}
                                >
                                    {d.isVerified ? "Verified" : "Not Verified"}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </ScrollView>
            {/* <Pressable onPress={handleShowMore} style={styles.btn}>
                <Text style={styles.btnText}>
                    {toggle ? "Box less" : "Box more"}
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
        </Box>
    );
};

const styles = StyleSheet.create({
    transactionContainer: {
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
        paddingVertical: 8,
    },
    tableHeader: {
        color: Colors.dark400,
        fontSize: 12,
        borderRightWidth: 1,
        borderRightColor: Colors.dark400,
        textAlign: "center",
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: "#DADAD9",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.dark600,
        fontWeight: "400",
    },
    dataField: {
        padding: 12,
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

export default TransactionHistory;
