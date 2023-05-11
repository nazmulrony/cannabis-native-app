import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Colors from "../../../constants/Colors";
import { ScrollView } from "react-native";
import Timer from "./Timer";
import { useNavigation } from "@react-navigation/native";

const AuctionTable = ({ data }) => {
    // console.log(data);
    const navigation = useNavigation();
    return (
        <ScrollView horizontal>
            <FlatList
                data={data}
                ListHeaderComponent={
                    <View
                        style={{
                            flexDirection: "row",
                            height: 31,
                            backgroundColor: Colors.green50,
                        }}
                    >
                        <Text
                            style={[
                                styles.tableHeader,
                                {
                                    width: 132,
                                },
                            ]}
                        >
                            Product Name
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                {
                                    width: 261,
                                },
                            ]}
                        >
                            Asking Price
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                {
                                    width: 120,
                                },
                            ]}
                        >
                            Proposals
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                {
                                    width: 104,
                                },
                            ]}
                        >
                            Messages
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                {
                                    width: 169,
                                    borderRightWidth: 0,
                                },
                            ]}
                        >
                            Countdown
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("MyAuctionDetailsScreen", item)
                        }
                        style={{
                            flexDirection: "row",
                            // height: 31,
                            paddingVertical: 23,
                            // backgroundColor: Colors.green50,
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.light500,
                            paddingHorizontal: 10,
                        }}
                    >
                        <Text
                            style={[
                                styles.tableContent,
                                {
                                    width: 122,
                                },
                            ]}
                        >
                            {item?.title.slice(0, 13)}...
                        </Text>
                        <Text
                            style={[
                                styles.tableContent,
                                {
                                    width: 261,
                                },
                            ]}
                        >
                            {item?.allocations?.auction[0]?.price || "N/A"}
                        </Text>
                        <Text
                            style={[
                                styles.tableContent,
                                {
                                    width: 120,
                                },
                            ]}
                        >
                            {item?.allocations?.auction[0]?.price || "N/A"}
                        </Text>
                        <Text
                            style={[
                                styles.tableContent,
                                {
                                    width: 104,
                                },
                            ]}
                        >
                            {item?.allocations?.auction[0]?.price || "N/A"}
                        </Text>
                        <Timer
                            initialTime={10}
                            style={{
                                width: 169,
                            }}
                        />
                    </Pressable>
                )}
            />
        </ScrollView>
    );
};

export default AuctionTable;

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
    tableContent: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "400",
        color: Colors.dark600,
        textAlign: "center",
    },
});
