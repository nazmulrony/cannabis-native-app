import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Dimensions,
    Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import useScreenSize from "../../hooks/useScreenSize";

const Card = ({ product, style }) => {
    const { screenWidth } = useScreenSize();
    // console.log(product);
    return (
        <View
            style={[
                styles.card,
                style,
                {
                    width:
                        screenWidth < 700
                            ? screenWidth / 2 - 30
                            : screenWidth < 1000
                            ? screenWidth / 3 - 20
                            : screenWidth / 4 - 15,
                },
            ]}
        >
            <View>
                <View
                    style={
                        product?.images?.length > 0
                            ? {
                                  // alignItems: "center",
                                  // justifyContent: "center",
                                  paddingRight: 8,
                                  borderTopWidth: 1,
                                  borderTopColor: "#EEEEEE",
                                  borderRightWidth: 1,
                                  borderRightColor: "#EEEEEE",
                                  borderLeftWidth: 1,
                                  borderLeftColor: "#EEEEEE",
                              }
                            : {
                                  alignItems: "center",
                                  justifyContent: "center",
                                  height: 137,
                                  width: "100%",
                                  borderTopWidth: 1,
                                  borderTopColor: "#EEEEEE",
                                  borderRightWidth: 1,
                                  borderRightColor: "#EEEEEE",
                                  borderLeftWidth: 1,
                                  borderLeftColor: "#EEEEEE",
                                  backgroundColor: "#e9e9e9",
                              }
                    }
                >
                    <Image
                        style={
                            product?.images?.length > 0
                                ? styles.image
                                : {
                                      width: 105,
                                      height: 80,
                                      alignSelf: "center",
                                  }
                        }
                        source={
                            product?.images?.length > 0
                                ? {
                                      uri: product?.images[0],
                                  }
                                : require("../../assets/images/no-img.png")
                        }
                    />
                </View>
                {/* {open && (
                        <View>
                            <Pressable
                                onPress={() => setIsLoved(!isLoved)}
                                style={[
                                    styles.iconContainer,
                                    { marginBottom: 12 },
                                ]}
                            >
                                {isLoved ? (
                                    <AntDesign
                                        name="heart"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                ) : (
                                    <AntDesign
                                        name="hearto"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                )}
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setAdded(!added);
                                }}
                                style={styles.iconContainer}
                            >
                                {added ? (
                                    <FontAwesome
                                        name="shopping-cart"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                ) : (
                                    <AntDesign
                                        name="shoppingcart"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                )}
                            </Pressable>
                        </View>
                    )} */}
                {/* </Image> */}
            </View>
            <View style={styles.cardContent}>
                <View style={styles.typeContainer}>
                    <Text style={styles.type}>{product?.specifications?.brand}</Text>
                    <Text style={styles.quantity}>{product?.batch?.size} ml</Text>
                </View>
                <Text style={[styles.productTitle, { height: 36 }]}>
                    {product?.title.length > 36
                        ? product?.title.slice(0, 33) + "..."
                        : product?.title}
                </Text>
                <View style={styles.brandContainer}>
                    <View style={styles.verified}>
                        <AntDesign name="check" size={10} color="white" />
                    </View>
                    <Text style={styles.brandName}>{product?.company?.name}</Text>
                </View>
                <View style={styles.ratingsContainer}>
                    <View style={{ flexDirection: "row", marginRight: 6 }}>
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star-half-full"
                            size={14}
                            color="#1A1A1A"
                        />
                    </View>
                    <Text style={styles.quantity}>
                        {product?.ratings ? product?.ratings : "4.5 (25)"}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    {product?.specifications?.thc && (
                        <Text
                            style={{
                                fontSize: 9,
                                lineHeight: 13.5,
                                color: "black",
                                paddingHorizontal: 4,
                                paddingVertical: 2,
                                fontWeight: "600",
                                backgroundColor: "#EEEEEE",
                                //width: "40%",
                                marginRight: 5,
                            }}
                        >
                            {product?.specifications?.thc}% THC
                        </Text>
                    )}
                    {product?.specifications?.total_cannabinoids && (
                        <Text
                            style={{
                                fontSize: 9,
                                lineHeight: 13.5,
                                color: "black",
                                paddingHorizontal: 4,
                                paddingVertical: 2,
                                fontWeight: "600",
                                backgroundColor: "#EEEEEE",
                                //width: "40%",
                            }}
                        >
                            {product?.specifications?.total_cannabinoids}% CBD
                        </Text>
                    )}
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.price, { marginRight: 5 }]}>
                        ${product?.allocations?.marketplace?.price_per_g}
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 11,
                            lineHeight: 16.5,
                            fontWeight: "400",
                        }}
                    >
                        {product?.allocations?.marketplace?.min_qty_g}g
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        // width: Dimensions.get("window").width / 2 - 30,
    },
    image: {
        height: 137,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 8,
        // borderTopWidth: 1,
        // borderTopColor: "#EEEEEE",
        // borderRightWidth: 1,
        // borderRightColor: "#EEEEEE",
        // borderLeftWidth: 1,
        // borderLeftColor: "#EEEEEE",
    },
    cardContent: {
        borderWidth: 1,
        borderColor: "#EEEEEE",
        paddingHorizontal: 10,
        paddingVertical: 8,
        minHeight: 175,
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    type: {
        fontSize: 11,
        lineHeight: 16.5,
        fontWeight: "500",
        color: Colors.dark500,
    },
    quantity: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "500",
        color: Colors.dark600,
    },
    productTitle: {
        fontSize: 13,
        lineHeight: 19,
        fontWeight: "600",
        color: Colors.dark600,
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "700",
        color: Colors.dark600,
        marginBottom: 8,
    },
    brandContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    verified: {
        width: 12,
        height: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        backgroundColor: Colors.green500,
        marginRight: 4,
    },
    brandName: {
        fontSize: 11,
        lineHeight: 16.5,
        fontWeight: "500",
        color: Colors.dark600,
    },
    ratingsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "white",
    },
});

export default Card;
