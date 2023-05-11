import * as Print from "expo-print";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Image } from "react-native";
import { Button, Divider, HStack } from "native-base";
import moment from "moment";
import { GlobalStyles } from "../../constants/style";

const InvoiceCard = ({ order }) => {
    console.log(order);
    const totalPrice = Number(
        order?.product_list
            .reduce((total, { price, quantity }) => total + price * quantity, 0)
            .toFixed(2)
    );
    // console.log(typeof totalPrice);

    const tax = Number((totalPrice * 0.1).toFixed(2));
    // console.log(typeof tax);
    const discount = Number(((totalPrice + tax) * 0.5).toFixed(2));
    // console.log(typeof discount);
    const total = Number((totalPrice + tax - discount).toFixed(2));
    // console.log(typeof total);

    const data = {
        title: "Cheese Cake",
        brand: "BakeMan's Treat",
        img: "https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png",
        price: 500,
        vat: 10,
        discount: 15,
    };

    const generatePDF = async () => {
        const html = `<html>
        <body>
        <div style="display: flex;">
        <img src="${order?.seller?.business_logo}" style="width: 20vw;" />
        <div style="margin-left: 20px">
        <h2>Order ID#${order?.order_number}</h2>
        <h3>Seller: ${order?.seller?.business_name}</h3>
        <p>Issue Date: ${moment(order?.createdAt).format("LL")}</p>
        </div>
        </div>
        <hr style="border: none;
        border-top: 1px dotted #ccc;
        height: 1px;"/>
        <h4>Item Details</h4>
        ${order?.product_list
            ?.map(
                (product, index) =>
                    `<div style="display: flex; justify-content: space-between">
                <p>${product?.title}</p>
                <p>$${product?.price * product?.quantity}</p>
                </div>`
            )
            .join("")}
        <hr style="border: none;
        border-top: 1px dotted #ccc;
        height: 1px;"/>
        <div style="display: flex; justify-content: space-between">
            <p>Sub Total</p>
            <p>$${totalPrice}</p>
        </div>
        <div style="display: flex; justify-content: space-between">
            <p>Tax</p>
            <p>$${tax}</p>
        </div>
        <div style="display: flex; justify-content: space-between">
            <p>Discout</p>
            <p>-$${discount}</p>
        </div>
        <hr style="border: none;
        border-top: 1px dotted #ccc;
        height: 1px;"/>
        <div style="display: flex; justify-content: space-between">
            <h3>Total</h3>
            <h3>$${total}</h3>
        </div>
        </body>
        </html>`;
        const pdf = await Print.printToFileAsync({ html });
        await Print.printAsync({ uri: pdf.uri });
    };

    return (
        <View style={styles.invoiceCard}>
            <View style={styles.statusContainer}>
                <Text style={styles.lightText}>Status</Text>
                <Text style={styles.status}>{order?.status}</Text>
            </View>
            <Text style={styles.orderNumber}>
                Order ID#{order?.order_number}
            </Text>
            <View style={styles.sellerInfoContainer}>
                <Image
                    style={styles.sellerImage}
                    source={{ uri: order?.seller?.business_logo }}
                />
                <View>
                    <Text style={styles.lightText}>Seller</Text>
                    <Text style={styles.sellerName}>
                        {order?.seller?.business_name}
                    </Text>
                </View>
            </View>
            <View style={styles.invoiceDetailsTop}>
                <Text style={styles.lightText}>Item Details</Text>
                <View style={styles.divider} />
                {order?.product_list?.map((product) => (
                    <View key={product?._id} style={styles.productContainer}>
                        <Text style={styles.productText}>
                            {product?.title.length > 22
                                ? product?.title.slice(0, 22) + "..."
                                : product?.title}
                        </Text>
                        <Text style={styles.productText}>
                            $ {product?.price * product?.quantity}
                        </Text>
                    </View>
                ))}
                <Text style={[styles.lightText, { marginBottom: 48 }]}>
                    {`${moment(order?.createdAt).calendar()}`}
                </Text>
                <Text style={styles.lightText}>Payment Details</Text>
                <View style={styles.divider} />
                <View style={styles.productContainer}>
                    <Text style={styles.amountTexts}>Sub Total</Text>
                    <Text style={styles.amountTexts}>${totalPrice}</Text>
                </View>
                <View style={styles.productContainer}>
                    <Text style={[styles.amountTexts, { fontWeight: "400" }]}>
                        Tax
                    </Text>
                    <Text style={[styles.amountTexts, { fontWeight: "400" }]}>
                        ${tax}
                    </Text>
                </View>
                <View style={styles.productContainer}>
                    <Text
                        style={[styles.amountTexts, { color: Colors.green500 }]}
                    >
                        Discount
                    </Text>
                    <Text
                        style={[styles.amountTexts, { color: Colors.green500 }]}
                    >
                        -${discount}
                    </Text>
                </View>
            </View>
            <View
                style={[
                    styles.invoiceDetailsBottom,
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    },
                ]}
            >
                <Text style={[styles.productText, { color: "white" }]}>
                    Total
                </Text>
                <Text style={[styles.productText, { color: "white" }]}>
                    ${total}
                </Text>
            </View>
            <HStack my={5} justifyContent="space-between">
                <Button
                    variant={"outline"}
                    borderColor={GlobalStyles.colors.primary500}
                    w={"48%"}
                    rounded={"md"}
                    _text={{ fontSize: 14, lineHeight: 21 }}
                    onPress={() => generatePDF()}
                >
                    Preview
                </Button>
                <Button w={"48%"} rounded={"md"}>
                    Download
                </Button>
            </HStack>
        </View>
    );
};

export default InvoiceCard;

const styles = StyleSheet.create({
    invoiceCard: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.light500,
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    status: {
        textAlign: "center",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "#E6F4FF",
        color: "#2574E0",
        justifyContent: "center",
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500",
    },
    lightText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "400",
        color: Colors.dark500,
    },
    orderNumber: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 33,
        color: Colors.dark600,
        marginBottom: 26,
    },
    sellerInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },
    sellerName: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: "500",
        color: Colors.dark600,
    },
    sellerImage: {
        width: 73,
        height: 57,
        marginRight: 24,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: Colors.light500,
    },
    invoiceDetailsTop: {
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: Colors.green50,
        // borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.light500,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
    },
    invoiceDetailsBottom: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        backgroundColor: "#9B9B9B",
        // borderRadius: 12,
        borderWidth: 1,
        borderColor: "#9B9B9B",
        borderBottomStartRadius: 12,
        borderBottomEndRadius: 12,
    },
    divider: {
        borderBottomWidth: 1,
        borderStyle: "dashed",
        borderColor: "#CACAC9",
        marginVertical: 16,
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    productText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.dark600,
    },
    amountTexts: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: Colors.dark600,
    },
});
