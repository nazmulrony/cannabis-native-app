import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import ImageCarousel from "../../components/InventoryProductDetails/ImageCarousel";
import TestCarousel from "../../components/Auction/AuctionDetails/TestCarousel";
import { GlobalStyles } from "../../constants/style";
import AuctionDetails from "../../components/Auction/AuctionDetails/AuctionDetails";
import { ScrollView } from "react-native";
import TopBidderSection from "../../components/Auction/AuctionDetails/TopBidderSection";
import FeaturedProductsAuction from "../../components/Auction/FeaturedProductsAuction";

const AuctionDetailsScreen = ({ route }) => {
    const product = route.params;
    console.log(product);
    const images = [
        require("../../assets/images/1.png"),
        require("../../assets/images/2.jpg"),
        require("../../assets/images/3.jpg"),
    ];

    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                <ImageCarousel images={product?.images} />
                <AuctionDetails product={product} />
                <TopBidderSection />
                <FeaturedProductsAuction />
            </ScrollView>
        </View>
    );
};

export default AuctionDetailsScreen;

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: GlobalStyles.colors.light50 },
});
