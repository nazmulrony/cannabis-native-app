import { View, Text } from "react-native";
import React from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import MyAuctionTopTabs from "../../navigators/MyAuctionTopTabs";
import Colors from "../../constants/Colors";

const MyAuctionScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
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
            <MyAuctionTopTabs />
        </View>
    );
};

export default MyAuctionScreen;
