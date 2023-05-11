import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Card from "../MarketPlace/Card";

const RelatedProducts = () => {
    const navigation = useNavigation();
    const data = [
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
    ];
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.sectionTitle}>Related Products</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.viewAll}>View all</Text>
                    <AntDesign
                        name="arrowright"
                        size={16}
                        color={Colors.dark600}
                    />
                </View>
            </View>
            <View style={styles.container}>
                {/* card started */}
                {data.map((d, index) => (
                    <Pressable
                        key={index}
                        onPress={() =>
                            navigation.push("ProductDetails", {
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
        marginTop: 20,
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
export default RelatedProducts;
