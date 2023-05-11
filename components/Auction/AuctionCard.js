import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/style";

const AuctionCard = ({ product, style }) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.card, style]}>
            <View
                style={{
                    borderTopWidth: 1,
                    borderTopColor: "#EEEEEE",
                    borderRightWidth: 1,
                    borderRightColor: "#EEEEEE",
                    borderLeftWidth: 1,
                    borderLeftColor: "#EEEEEE",
                }}
            >
                <Image
                    style={styles.image}
                    source={
                        product?.images[0]
                            ? { uri: product?.images[0] }
                            : require("../../assets/images/image_thumb.png")
                    }
                />
            </View>
            <View style={styles.cardContent}>
                <View style={styles.typeContainer}>
                    <Text style={styles.type}>
                        {product?.specifications?.brand}
                    </Text>
                    <Text style={styles.quantity}>
                        {product?.batch?.size} ml
                    </Text>
                </View>
                <Text style={[styles.productTitle, { height: 36 }]}>
                    {product?.title.length > 36
                        ? product?.title.slice(0, 33) + "..."
                        : product?.title}
                </Text>
                <View style={styles.brandContainer}>
                    <AntDesign
                        name="checkcircle"
                        size={10}
                        color={GlobalStyles.colors.primary500}
                    />
                    <Text style={styles.brandName}>
                        {product?.company?.name}
                    </Text>
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons name="bolt" size={20} color="#FFD600" />
                    <Text style={styles.timerText}>0h : 25m : 45s</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 12,
                    }}
                >
                    <Button
                        onPress={() =>
                            navigation.navigate("AuctionDetailsScreen", product)
                        }
                        py={1}
                        px={2}
                        _text={{
                            fontSize: 10,
                            lineHeight: 15,
                            fontWeight: "600",
                            color: "white",
                        }}
                        colorScheme={"primary"}
                    >
                        Place a bid
                    </Button>
                    <Button
                        _text={{
                            fontSize: 10,
                            lineHeight: 15,
                            fontWeight: "600",
                            color: Colors.dark500,
                        }}
                        py={1}
                        px={2}
                        // colorScheme={"#F5F5F5"}
                        backgroundColor={"#F5F5F5"}
                        _pressed={{ backgroundColor: "#e0e0e0" }}
                    >
                        Buy now
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default AuctionCard;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get("window").width / 2 - 30,
    },
    image: {
        height: 137,
        width: "100%",
        // alignItems: "flex-end",
        // justifyContent: "center",
        // paddingRight: 8,
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

    brandName: {
        marginLeft: 4,
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
    timerText: {
        fontSize: 11,
        lineHeight: 16.5,
        fontWeight: "500",
        color: "#000000",
    },
});
