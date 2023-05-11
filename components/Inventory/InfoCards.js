import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import inventory from "../../assets/icons/inventory.svg";
import publish from "../../assets/icons/publish.svg";
import market from "../../assets/icons/market.svg";
import auction from "../../assets/icons/auction.svg";
import unallocated from "../../assets/icons/unallocated.svg";
import bundle from "../../assets/icons/bundle.svg";
import Colors from "../../constants/Colors";

const InfoCards = () => {
    const data = [
        {
            title: "All Inventory",
            value: 2000,
            Icon: inventory,
            color: "#E1FFE2",
        },
        { title: "Published", value: 500, Icon: publish, color: "#FFF4D8" },
        { title: "Marketplace", value: 500, Icon: market, color: "#E7DDFF" },
        { title: "Auction", value: 300, Icon: auction, color: "#CFE8FF" },
        {
            title: "Unallocated",
            value: 700,
            Icon: unallocated,
            color: "#FFDDE3",
        },
        { title: "Bundle", value: 500, Icon: bundle, color: "#EFFAF3" },
    ];
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.cardsContainer}
            horizontal={true}
        >
            {data.map((d, index) => (
                <View
                    key={index}
                    style={
                        index !== data.length - 1
                            ? styles.card
                            : styles.lastCard
                    }
                >
                    <View>
                        <Text style={styles.title}>{d.title}</Text>
                        <Text style={styles.value}>{d.value} kg</Text>
                    </View>
                    <View
                        style={[
                            styles.iconContainer,
                            { backgroundColor: d.color },
                        ]}
                    >
                        <d.Icon height={20} width={20} />
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardsContainer: {
        marginBottom: 20,
    },
    card: {
        backgroundColor: "white",
        paddingHorizontal: 14,
        paddingVertical: 17,
        width: 185,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 20,
    },
    lastCard: {
        backgroundColor: "white",
        paddingHorizontal: 14,
        paddingVertical: 17,
        width: 185,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color: Colors.dark500,
        marginBottom: 7,
    },
    value: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "700",
        color: Colors.dark600,
        marginBottom: 1,
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default InfoCards;
