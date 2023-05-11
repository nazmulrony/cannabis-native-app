import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const FeatureProducts = () => {
    const navigation = useNavigation();
    const data = [
        {
            batch: {
                size: "07",
                number: "07",
            },
            allocations: {
                marketplace: {
                    quantity: 50,
                    min_qty_lb: 10,
                    min_qty_g: 10,
                    price_per_lb: 90,
                    price_per_g: 150,
                },
                auction: [],
            },
            created_by: {
                first_name: "Rasmus",
                last_name: "",
                id: "62fe4c6a91718a66c92cc99d",
            },
            company: {
                license_type: "grower",
                name: "Cannabis Grow",
                id: "62fe4bc991718a66c92cc991",
            },
            _id: "63e1e0dc4e9fa0a245104b53",
            title: " Bubblegum Moonrocks - OK",
            category: "flower",
            specifications: {
                brand: "infused-flower",
                strain: "Indica",
                thc: "20",
                cultivation_type: "Indoor",
                total_cannabinoids: "50",
                terpenes: "10",
            },
            images: [
                "https://i.ibb.co/bgdJ1r5/1-Bubblegum-Moonrocks-OK.jpg",
                "https://i.ibb.co/FgS9bzd/2-Bubblegum-Moonrocks-OK.jpg",
                "https://i.ibb.co/ctYpZSy/3-Birthday-Cake-Moonrocks-OK.jpg",
            ],
            status: "published",
            variants: [
                {
                    unit: "g",
                    quantity: 100,
                    _id: "63e1e0dc4e9fa0a245104b54",
                    options: [],
                },
            ],
            is_deleted: false,
            createdAt: "2023-02-07T05:25:48.703Z",
            updatedAt: "2023-02-07T05:26:03.143Z",
            slug: "Bubblegum-Moonrocks-OK-1675747548704",
            __v: 0,
        },
        ,
        {
            batch: {
                size: "10",
                number: "10",
            },
            allocations: {
                marketplace: {
                    quantity: 10,
                    min_qty_lb: 10,
                    min_qty_g: 10,
                    price_per_lb: 100,
                    price_per_g: 50,
                },
                auction: [],
            },
            created_by: {
                first_name: "Rasmus",
                last_name: "",
                id: "62fe4c6a91718a66c92cc99d",
            },
            company: {
                license_type: "grower",
                name: "Cannabis Grow",
                id: "62fe4bc991718a66c92cc991",
            },
            _id: "63e1e7ea6523f4e276008505",
            title: "ORIGINAL GANGSTA MOON ROCK",
            category: "flower",
            specifications: {
                brand: "infused-flower",
                strain: "Sativa",
                thc: "10",
                total_cannabinoids: "10",
                terpenes: "10",
                cultivation_type: "Indoor",
            },
            images: ["https://i.ibb.co/Y2ZmpYK/ORIGINAL-GANGSTA-MOON-ROCK.jpg"],
            status: "published",
            variants: [
                {
                    unit: "g",
                    quantity: 100,
                    _id: "63e1e7ea6523f4e276008506",
                    options: [],
                },
            ],
            is_deleted: false,
            createdAt: "2023-02-07T05:55:54.318Z",
            updatedAt: "2023-02-07T05:56:06.248Z",
            slug: "ORIGINAL-GANGSTA-MOON-ROCK-1675749354318",
            __v: 0,
        },
    ];

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.sectionTitle}>Feature Products</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.viewAll}>View all</Text>
                    <AntDesign name="arrowright" size={16} color={Colors.dark600} />
                </View>
            </View>
            <View style={styles.container}>
                {/* card started */}
                {data.map((d, index) => (
                    <Pressable
                        key={index}
                        onPress={() =>
                            navigation.navigate("MarketplaceProductDetailsScreen", {
                                product: d,
                            })
                        }
                    >
                        <Card product={d} />
                    </Pressable>
                ))}
                {/* card ended */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.dark600,
    },
    viewAll: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "400",
        color: Colors.dark600,
        marginRight: 5,
    },
});

export default FeatureProducts;
