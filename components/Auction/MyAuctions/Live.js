import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../DashBoard/SearchBar";
import { ScrollView } from "react-native";
import Colors from "../../../constants/Colors";

import AuctionTable from "./AuctionTable";
import { useSelector } from "react-redux";
import { authSelector } from "../../../redux/slices/auth.slice";
import { useGetMyAuctionsQuery } from "../../../ApiServices/auction.service";

const Live = () => {
    const { user } = useSelector(authSelector);

    const { data, isLoading } = useGetMyAuctionsQuery(
        user?.company?.license_type,
        {
            skip: !user?.company?.license_type,
        }
    );
    console.log(data?.products[0]);
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <SearchBar style={{ marginHorizontal: 20, marginVertical: 16 }} />
            {/* <ScrollView
                horizontal={true}
                style={{
                    // height: "auto",

                    // maxHeight: 31,
                    borderWidth: 1,
                }}
                showsHorizontalScrollIndicator={false}
            > */}
            <AuctionTable data={data?.products} />
            {/* </ScrollView> */}
            {/* <Text>End</Text> */}
        </View>
    );
};

export default Live;

const styles = StyleSheet.create({
    tableHeader: {
        textAlign: "center",
        alignSelf: "center",
        fontSize: 13,
        fontWeight: "500",
        lineHeight: 19.5,
        color: "#444443",
        borderRightWidth: 1,
        borderRightColor: Colors.dark300,
    },
});
