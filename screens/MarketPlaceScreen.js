import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import SearchBar from "../components/DashBoard/SearchBar";
import Categories from "../components/MarketPlace/Categories";
import { StatusBar } from "react-native";
import FeatureProducts from "../components/MarketPlace/FeatureProducts";
import PopularItems from "../components/MarketPlace/PopularItems";
import OnSale from "../components/MarketPlace/OnSale";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../redux/slices/auth.slice";
import { useGetAllProductsQuery } from "../ApiServices/marketplace.service";
import { setMarketplaceProducts } from "../redux/slices/marketplace.slice";

const MarketPlaceScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContainer}
            >
                <Text style={[styles.title, { marginTop: 10 }]}>
                    Marketplace
                </Text>
                <SearchBar style={{ marginTop: 16 }} />
                <Categories />
                <FeatureProducts />
                <PopularItems />
                <OnSale />
            </ScrollView>
            <StatusBar barStyle={"dark-content"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // paddingTop: 10,
        backgroundColor: "white",
        //marginTop: StatusBar.currentHeight,
        //borderWidth: 1,
    },
    scrollViewContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.dark600,
        fontWeight: "500",
        textAlign: "center",
    },
});

export default MarketPlaceScreen;
