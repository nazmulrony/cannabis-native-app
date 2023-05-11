import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const OnSale = () => {
    const navigation = useNavigation();
    const data = [
        {
            batch: {
                size: "4",
                number: "4",
            },
            allocations: {
                marketplace: {
                    quantity: 10,
                    min_qty_lb: 1,
                    min_qty_g: 1,
                    price_per_lb: 100,
                    price_per_g: 11,
                },
                auction: [],
            },
            created_by: {
                first_name: "Hunter ",
                last_name: "Whitehead",
                id: "637f817d79e9f10b1ffa1274",
            },
            company: {
                license_type: "grower",
                name: "HRW Grow",
                id: "637d11b8d811507116aeecb3",
            },
            _id: "63e200cd6523f4e276009665",
            title: "Rosin Rocks - 3.5 Grams",
            category: "flower",
            specifications: {
                brand: "infused-flower",
                strain: "Sativa",
                thc: "4",
                total_cannabinoids: "4",
                terpenes: "4",
                cultivation_type: "Outdoor",
            },
            images: ["https://i.ibb.co/kQShTJW/Rosin-Rocks-3-5-Grams.jpg"],
            status: "published",
            variants: [
                {
                    unit: "g",
                    quantity: 100,
                    _id: "63e200cd6523f4e276009666",
                    options: [],
                },
            ],
            is_deleted: false,
            createdAt: "2023-02-07T07:42:05.885Z",
            updatedAt: "2023-02-07T07:42:16.270Z",
            slug: "Rosin-Rocks-3.5-Grams-1675755725886",
            __v: 0,
        },
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
                    price_per_g: 100,
                },
                auction: [],
            },
            created_by: {
                first_name: "Hunter ",
                last_name: "Whitehead",
                id: "637f817d79e9f10b1ffa1274",
            },
            company: {
                license_type: "grower",
                name: "HRW Grow",
                id: "637d11b8d811507116aeecb3",
            },
            _id: "63e201176523f4e2760096af",
            title: "ALTRD EF3",
            category: "flower",
            specifications: {
                brand: "infused-flower",
                total_cannabinoids: "10",
                terpenes: "10",
                thc: "4",
                strain: "Sativa",
                cultivation_type: "Outdoor",
            },
            images: ["https://i.ibb.co/Gn0Ptmm/ALTRD-EF3.jpg"],
            status: "published",
            variants: [
                {
                    unit: "g",
                    quantity: 500,
                    _id: "63e201176523f4e2760096b0",
                    options: [],
                },
            ],
            is_deleted: false,
            createdAt: "2023-02-07T07:43:19.740Z",
            updatedAt: "2023-02-07T07:43:27.454Z",
            slug: "ALTRD-EF3-1675755799740",
            __v: 0,
        },
    ];
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.sectionTitle}>On sale near you</Text>
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

export default OnSale;
