import { View, Text, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../components/DashBoard/SearchBar";

const Test = () => {
    return (
        <ScrollView
            // contentContainerStyle={{ flex: 1 }}
            style={{ backgroundColor: "skyblue", marginBottom: 20, flex: 1 }}
            nestedScrollEnabled
        >
            {/* <InventoryTopTabs /> */}
            <Text
                style={{
                    marginVertical: 100,
                    backgroundColor: "white",
                    paddingVertical: 50,
                    textAlign: "center",
                }}
            >
                Hello
            </Text>
            <View style={{ height: 20, backgroundColor: "white" }} />
            <Text
                style={{
                    marginVertical: 100,
                    backgroundColor: "white",
                    paddingVertical: 50,
                    textAlign: "center",
                }}
            >
                Hello
            </Text>
            <View style={{ height: 20, backgroundColor: "white" }} />
            <Text
                style={{
                    marginVertical: 100,
                    backgroundColor: "white",
                    paddingVertical: 50,
                    textAlign: "center",
                }}
            >
                Hello
            </Text>
        </ScrollView>
    );
};

export default Test;
