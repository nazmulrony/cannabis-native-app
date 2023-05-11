import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { Pressable } from "react-native";
import { Modal } from "react-native";
import {
    AntDesign,
    Feather,
    Entypo,
    FontAwesome,
    EvilIcons,
    FontAwesome5,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { Icon, IconButton } from "native-base";
import { GlobalStyles } from "../../constants/style";
import RadioButtons from "../../ui/RadioButtons";

const StockDetailsModal = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const [unit, setUnit] = useState("lb");
    const {
        allocations: { auction },
    } = product;
    console.log(product);
    console.log(auction);
    const totalAuction = auction.reduce(
        (total, { quantity }) => total + Number(quantity),
        0
    );
    console.log(totalAuction);
    return (
        <>
            <Pressable
                onPress={() => setShowModal(true)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Text style={[styles.company, { fontWeight: "400" }]}>
                    Check Details
                </Text>
                <AntDesign name="right" size={16} color={Colors.dark600} />
            </Pressable>
            <Modal
                animationType="slide"
                visible={showModal}
                transparent
                onRequestClose={() => setShowModal(false)}
            >
                <Pressable
                    onPress={() => setShowModal(false)}
                    style={styles.modalOuterContainer}
                >
                    <Pressable style={styles.modalContent}>
                        <View
                            style={{
                                paddingVertical: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: Colors.light500,
                                position: "relative",
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "500",
                                    fontSize: 16,
                                    lineHeight: 22,
                                }}
                            >
                                Total Stock
                            </Text>
                            <IconButton
                                onPress={() => setShowModal(false)}
                                icon={<Icon as={Feather} name="x" />}
                                // borderRadius="full"
                                colorScheme={"light"}
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    right: 20,
                                }}
                                size={5}
                            />
                        </View>
                        <View style={{ padding: 20 }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <FontAwesome
                                    name="gavel"
                                    size={18}
                                    color={Colors.green500}
                                />
                                <Text
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 24,
                                        marginLeft: 12,
                                    }}
                                >
                                    Auction
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 24,
                                    marginBottom: 28,
                                }}
                            >
                                <View style={{ marginRight: 56 }}>
                                    <Feather
                                        name="pie-chart"
                                        size={16}
                                        color={Colors.green500}
                                        style={{ marginBottom: 6 }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 21,
                                            fontWeight: "400",
                                            color: "#9C9898",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Allocated
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 15,
                                            lineHeight: 22.5,
                                            color: Colors.dark600,
                                        }}
                                    >
                                        {totalAuction}{" "}
                                        {product?.variants[0]?.unit || "lb"}
                                    </Text>
                                </View>
                                <View style={{ marginRight: 56 }}>
                                    <EvilIcons
                                        name="arrow-down"
                                        size={20}
                                        color={Colors.green500}
                                        style={{ marginBottom: 6 }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 21,
                                            fontWeight: "400",
                                            color: "#9C9898",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Min Qty
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 15,
                                            lineHeight: 22.5,
                                            color: Colors.dark600,
                                        }}
                                    >
                                        {product?.allocations?.auction[0]
                                            ?.min_qty || 0}{" "}
                                        {product?.variants[0]?.unit || "lb"}
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Entypo
                                    name="shop"
                                    size={18}
                                    color={GlobalStyles.colors.primary500}
                                />
                                <Text
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 24,
                                        marginLeft: 12,
                                    }}
                                >
                                    Marketplace
                                </Text>
                            </View>
                            <Text style={{ marginTop: 20, marginBottom: 8 }}>
                                Available Units
                            </Text>
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
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 24,
                                    marginBottom: 28,
                                }}
                            >
                                <View style={{ marginRight: 56 }}>
                                    <Feather
                                        name="pie-chart"
                                        size={16}
                                        color={Colors.green500}
                                        style={{ marginBottom: 6 }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 21,
                                            fontWeight: "400",
                                            color: "#9C9898",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Allocated
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 15,
                                            lineHeight: 22.5,
                                            color: Colors.dark600,
                                        }}
                                    >
                                        {
                                            product?.allocations?.marketplace
                                                ?.quantity
                                        }{" "}
                                        {product?.variants[0]?.unit || "lb"}
                                    </Text>
                                </View>
                                <View style={{ marginRight: 56 }}>
                                    <EvilIcons
                                        name="arrow-down"
                                        size={20}
                                        color={Colors.green500}
                                        style={{ marginBottom: 6 }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 21,
                                            fontWeight: "400",
                                            color: "#9C9898",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Min Qty
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 15,
                                            lineHeight: 22.5,
                                            color: Colors.dark600,
                                        }}
                                    >
                                        {unit === "lb"
                                            ? `${
                                                  product?.allocations
                                                      ?.marketplace
                                                      ?.min_qty_lb || 0
                                              } lb`
                                            : `${
                                                  product?.allocations
                                                      ?.marketplace
                                                      ?.min_qty_g || 0
                                              } g`}
                                    </Text>
                                </View>
                                <View style={{ marginRight: 56 }}>
                                    <FontAwesome
                                        name="dollar"
                                        size={16}
                                        color={Colors.green500}
                                        style={{
                                            marginBottom: 6,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 21,
                                            fontWeight: "400",
                                            color: "#9C9898",
                                            marginBottom: 4,
                                        }}
                                    >
                                        Price
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 15,
                                            lineHeight: 22.5,
                                            color: Colors.dark600,
                                        }}
                                    >
                                        {unit === "lb"
                                            ? `$${
                                                  product?.allocations
                                                      ?.marketplace
                                                      ?.price_per_lb || 0
                                              } / lb`
                                            : `$${
                                                  product?.allocations
                                                      ?.marketplace
                                                      ?.price_per_g || 0
                                              } / g`}
                                    </Text>
                                </View>
                            </View>

                            {/* <View style={styles.marketplaceInfoContainer}>
                                
                            </View> */}
                        </View>
                    </Pressable>
                </Pressable>
                {/* <StatusBar backgroundColor={"rgba(0, 0, 0, 0.4)"} /> */}
            </Modal>
        </>
    );
};

export default StockDetailsModal;

const styles = StyleSheet.create({
    modalOuterContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height - 200,
        // borderRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        // paddingHorizontal: 20,
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
