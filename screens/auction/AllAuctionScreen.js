import { View, Text, FlatList } from "react-native";
import React from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import SearchBar from "../../components/DashBoard/SearchBar";
import AuctionCard from "../../components/Auction/AuctionCard";
import FeaturedProductsAuction from "../../components/Auction/FeaturedProductsAuction";
import LiveProductAuction from "../../components/Auction/LiveProductAuction";
import { ScrollView } from "react-native";

const AllAuctionScreen = ({ navigation }) => {
    //this code helps to close the drawer when a go back to the drawer navigation

    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    //...........................................................................
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <SearchBar style={{ marginBottom: 0, marginHorizontal: 20 }} />
            {/* <ScrollView>
                <FeaturedProductsAuction />
                <LiveProductAuction />
            </ScrollView> */}

            <FlatList
                data={[1]}
                renderItem={() => (
                    <>
                        <FeaturedProductsAuction />
                        <LiveProductAuction />
                    </>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default AllAuctionScreen;
