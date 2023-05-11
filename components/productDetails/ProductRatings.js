import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

const ratingData = [
    {
        category: "Excellent",
        ratings: 174,
        color: "#4CAF50",
    },
    {
        category: "Very Good",
        ratings: 86,
        color: "#4CAF50",
    },
    {
        category: "Good",
        ratings: 57,
        color: "#F8D28A",
    },
    {
        category: "Average",
        ratings: 36,
        color: "#EC803D",
    },
    {
        category: "Poor",
        ratings: 14,
        color: "#F52833",
    },
];

const ProductRatings = ({ ratings }) => {
    const totalRatings = ratingData.reduce(
        (acc, curr) => acc + curr.ratings,
        0
    );
    // console.log(totalRatings);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Ratings & Reviews</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ width: "30%" }}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                color: GlobalStyles.colors.primary500,
                                fontWeight: "600",
                                marginRight: 6,
                            }}
                        >
                            {ratings.slice(0, 3)}
                        </Text>
                        <FontAwesome
                            name="star"
                            size={24}
                            color={GlobalStyles.colors.primary500}
                        />
                    </View>
                    <Text style={styles.fontBase}>305 Ratings,</Text>
                    <Text style={styles.fontBase}>68 Reviews</Text>
                </View>
                <View style={{ width: "70%" }}>
                    {ratingData.map((data, index) => (
                        <View key={index} style={styles.ratingContainer}>
                            <Text>{data.category}</Text>
                            <View style={styles.outer}>
                                <View
                                    style={{
                                        backgroundColor: data.color,
                                        height: 5,
                                        width: `${
                                            (data.ratings * 100) / totalRatings
                                        }%`,
                                    }}
                                ></View>
                            </View>
                            <View style={{ width: 28, alignItems: "flex-end" }}>
                                <Text style={styles.ratings}>
                                    {data.ratings}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.bottomComment}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 26, height: 26, borderRadius: 13 }}
                        source={require("../../assets/user-image-small.png")}
                    />
                    <Text style={styles.userName}>Reeta</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <View style={styles.ratingPointContainer}>
                        <Text style={styles.ratingPoint}>4.3</Text>
                        <FontAwesome name="star" size={10} color="white" />
                    </View>
                </View>
                <Text>Material is good</Text>
                <View style={styles.bottomStatContainer}>
                    <View style={styles.likesContainer}>
                        <AntDesign name="like2" size={16} color="#6D6D6D" />
                        <Text style={styles.likesCount}>(1)</Text>
                    </View>
                    <Entypo
                        name="dots-three-horizontal"
                        size={16}
                        color="#6D6D6D"
                    />
                </View>
            </View>
        </View>
    );
};

export default ProductRatings;
const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    title: {
        fontSize: 18,
        color: GlobalStyles.colors.gray700,
        fontWeight: "600",
        marginBottom: 16,
    },
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    ratingPoint: {
        fontSize: 24,
        fontWeight: "600",
        color: GlobalStyles.colors.primary500,
        marginRight: 6,
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 6,
    },
    outer: {
        marginHorizontal: 12,
        width: 100,
        backgroundColor: GlobalStyles.colors.gray100,
        height: 5,
        borderRadius: 100,
        overflow: "hidden",
    },
    bottomComment: {
        borderTopWidth: 1,
        marginTop: 14,
        paddingTop: 14,
        borderColor: GlobalStyles.colors.gray100,
    },
    userName: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "600",
        color: GlobalStyles.colors.gray700,
        marginLeft: 12,
    },
    ratingPoint: {
        fontSize: 10,
        lineHeight: 15,
        fontWeight: "600",
        color: "white",
        marginRight: 2,
    },
    ratingPointContainer: {
        flexDirection: "row",
        backgroundColor: GlobalStyles.colors.primary500,
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 100,
        marginTop: 6,
        marginBottom: 16,
    },
    bottomStatContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    likesContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
    },
    likesCount: {
        fontSize: 13,
        lineHeight: 15,
        fontWeight: "400",
        color: "#6D6D6D",
        marginLeft: 10,
    },
    ratings: {
        fontWeight: "500",
        color: GlobalStyles.colors.gray300,
    },
});
