import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuctionCard from "./AuctionCard";
import { useGetAllProductsQuery } from "../../ApiServices/marketplace.service";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/slices/auth.slice";
import { FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import CardSkeleton from "../../ui/CardSkeleton";

const LiveProductAuction = () => {
    const { user } = useSelector(authSelector);
    const { data, isLoading } = useGetAllProductsQuery(user?.company?.license_type);
    return (
        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // borderWidth: 1,
                    marginBottom: 12,
                }}
            >
                <Text style={styles.title}>Live Products Auction</Text>
                <AntDesign name="arrowright" size={16} color={Colors.dark600} />
            </View>
            {isLoading ? (
                <FlatList
                    data={[1, 2, 3, 4]}
                    key={"_"}
                    // keyExtractor={(item) => "_" + item}
                    renderItem={({ index }) => <CardSkeleton key={index} height={32} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                />
            ) : (
                <FlatList
                    data={data?.products}
                    renderItem={({ item, index }) => (
                        <AuctionCard
                            product={item}
                            style={{
                                marginRight: index !== data?.products.length - 1 ? 20 : 0,
                            }}
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                />
            )}
        </View>
    );
};

export default LiveProductAuction;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 30,
        color: "#000000",
        fontWeight: "600",
    },
});
