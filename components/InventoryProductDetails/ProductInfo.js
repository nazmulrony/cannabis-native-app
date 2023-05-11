import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";
import { AntDesign, Entypo, FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";
import RadioButtons from "../../ui/RadioButtons";
import Colors from "../../constants/Colors";
import { HStack } from "native-base";
import { Pressable } from "react-native";
import SpecificationsModal from "./SpecificationsModal";
import StockDetailsModal from "./StockDetailsModal";
import moment from "moment";

const ProductInfo = ({ product }) => {
    const [unit, setUnit] = useState("lb");
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product?.title}</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.light500,
                    paddingBottom: 16,
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.company}>{product?.company?.name}</Text>
                    <Feather name="external-link" size={16} color={Colors.dark600} />
                </View>
                <View style={styles.ratingContainer}>
                    <HStack space={2} alignItems={"center"}>
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star-half-full" size={16} color="#FDCC0D" />
                    </HStack>
                    <Text style={[styles.company, { fontSize: 12, marginRight: 0 }]}>
                        4.9(1900 reviews)
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 17,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.light500,
                    paddingBottom: 16,
                }}
            >
                <Text
                    style={{
                        color: "#6D6D6D",
                        fontSize: 18,
                        lineHeight: 22,
                        fontWeight: "400",
                    }}
                >
                    Specifications:
                </Text>
                <SpecificationsModal product={product} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 17,
                    paddingBottom: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.light500,
                }}
            >
                <View style={styles.stockContainer}>
                    <Text style={styles.stock}>Total Stock</Text>
                    <Text style={styles.stockAmount}>{product?.variants[0].quantity} lb</Text>
                </View>
                <StockDetailsModal product={product} />
            </View>
            <View
                style={{
                    marginVertical: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        fontSize: 13,
                        lineHeight: 19.5,
                        color: Colors.dark500,
                        fontWeight: "400",
                    }}
                >
                    created at {moment(product?.createdAt).format("L")}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 13,
                            lineHeight: 19.5,
                            color: Colors.dark500,
                            fontWeight: "400",
                        }}
                    >
                        Posted by:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            lineHeight: 19.5,
                            color: Colors.dark600,
                            fontWeight: "600",
                        }}
                    >
                        {product?.created_by?.first_name}
                    </Text>
                </View>
            </View>
            <View>
                {/* <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Entypo
                        name="shop"
                        size={16}
                        color={GlobalStyles.colors.primary500}
                    />
                    <Text style={[styles.subtitle, { marginLeft: 4 }]}>
                        Marketplace
                    </Text>
                </View> */}
                {/* <Text style={{ marginVertical: 8 }}>Available Units</Text>
                <RadioButtons
                    items={[
                        { label: "lb", value: "lb" },
                        { label: "g", value: "g" },
                    ]}
                    initial={unit}
                    color={GlobalStyles.colors.primary500}
                    direction="row"
                    gap={32}
                    onPress={setUnit}
                /> */}
                {/* <View style={styles.marketplaceInfoContainer}>
                    <View
                        style={{
                            alignItems: "center",
                            flex: 0.33,
                        }}
                    >
                        <AntDesign
                            name="piechart"
                            size={16}
                            color={GlobalStyles.colors.gray200}
                        />
                        <Text style={styles.smallText}>Allocated</Text>
                        <Text style={styles.darkSubtitle}>
                            {product?.allocations?.marketplace?.quantity} lb
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flex: 0.33,
                        }}
                    >
                        <Entypo
                            name="arrow-with-circle-down"
                            size={16}
                            color={GlobalStyles.colors.gray200}
                        />
                        <Text style={styles.smallText}>Min Qty</Text>
                        <Text style={styles.darkSubtitle}>
                            {unit === "lb"
                                ? `${
                                      product?.allocations?.marketplace
                                          ?.min_qty_lb || 0
                                  } lb`
                                : `${
                                      product?.allocations?.marketplace
                                          ?.min_qty_g || 0
                                  } g`}
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flex: 0.33,
                        }}
                    >
                        <FontAwesome5
                            name="dollar-sign"
                            size={16}
                            color={GlobalStyles.colors.gray200}
                        />
                        <Text style={styles.smallText}>Price</Text>
                        <Text style={styles.darkSubtitle}>
                            {unit === "lb"
                                ? `${
                                      product?.allocations?.marketplace
                                          ?.price_per_lb || 0
                                  } lb`
                                : `${
                                      product?.allocations?.marketplace
                                          ?.price_per_g || 0
                                  } g`}
                        </Text>
                    </View>
                </View> */}
            </View>
        </View>
    );
};

export default ProductInfo;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        // borderWidth: 1,
        // borderColor: GlobalStyles.colors.gray100,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 22,
        color: Colors.dark600,
    },
    company: {
        color: Colors.dark600,
        marginRight: 6,
        lineHeight: 22,
        fontWeight: "500",
        fontSize: 13,
    },
    stockContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 6,
        paddingHorizontal: 30,
        paddingVertical: 9,
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.light500,
        // marginVertical: 8,
        // width: "50%",
        alignItems: "center",
    },
    ratingContainer: {
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 40,
    },
    stock: {
        color: "white",
    },
    stockAmount: {
        fontSize: 18,
        fontWeight: "500",
        color: "white",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "500",
        color: GlobalStyles.colors.primary500,
    },
    marketplaceInfoContainer: {
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary50,
        marginVertical: 8,
        marginHorizontal: -12,
        padding: 12,
    },
    smallText: {
        fontSize: 10,
        color: GlobalStyles.colors.gray300,
    },
    darkSubtitle: {
        fontSize: 16,
        fontWeight: "500",
        color: GlobalStyles.colors.gray700,
    },
});
