import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SmallCard from "./SmallCard";

const PopularItems = () => {
    const data = [
        {
            id: 1,
            discount: 30,
            image: require("../../assets/items/small-flower-1.png"),
            type: "Flower",
            color: "#693430",
            backgroundColor: "#FAF9E5",
        },
        {
            id: 2,
            discount: 30,
            image: require("../../assets/items/small-roll-1.png"),
            type: "Flower",
            color: "#6A36A5",
            backgroundColor: "#EBE2F5",
        },
        {
            id: 3,
            discount: 30,
            image: require("../../assets/items/small-flower-1.png"),
            type: "Flower",
            color: "#693430",
            backgroundColor: "#FAF9E5",
        },
        {
            id: 4,
            discount: 30,
            image: require("../../assets/items/small-roll-1.png"),
            type: "Flower",
            color: "#6A36A5",
            backgroundColor: "#EBE2F5",
        },
        {
            id: 5,
            discount: 30,
            image: require("../../assets/items/small-flower-1.png"),
            type: "Flower",
            color: "#693430",
            backgroundColor: "#FAF9E5",
        },
        {
            id: 6,
            discount: 30,
            image: require("../../assets/items/small-roll-1.png"),
            type: "Flower",
            color: "#6A36A5",
            backgroundColor: "#EBE2F5",
        },
        {
            id: 7,
            discount: 30,
            image: require("../../assets/items/small-flower-1.png"),
            type: "Flower",
            color: "#693430",
            backgroundColor: "#FAF9E5",
        },
        {
            id: 8,
            discount: 30,
            image: require("../../assets/items/small-roll-1.png"),
            type: "Flower",
            color: "#6A36A5",
            backgroundColor: "#EBE2F5",
        },
    ];
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.container}
        >
            {data.map((d, index) => (
                <SmallCard
                    key={index}
                    d={d}
                    length={data.length}
                    index={index}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
});

export default PopularItems;
