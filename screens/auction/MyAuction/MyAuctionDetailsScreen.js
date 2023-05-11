import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import ProposalStatus from "../../../components/Auction/MyAuctions/ProposalStatus";
import ProposalCard from "../../../components/Auction/MyAuctions/ProposalCard";
import { ScrollView } from "react-native";

const MyAuctionDetailsScreen = () => {
    return (
        <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
            <Text
                style={{
                    fontSize: 13,
                    lineHeight: 19.5,
                    fontWeight: "400",
                    color: Colors.dark500,
                    marginHorizontal: 20,
                }}
            >
                You can view & manage the Published product summary & the bids
                you get from the Dispensaries.
            </Text>
            <ProposalStatus />
            <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
                {[1, 2, 3, 4].map((item) => (
                    <ProposalCard key={item} />
                ))}
            </View>
        </ScrollView>
    );
};

export default MyAuctionDetailsScreen;

const styles = StyleSheet.create({});
