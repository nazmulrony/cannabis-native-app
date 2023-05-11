import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../DashBoard/SearchBar";
import Colors from "../../../constants/Colors";

const UpComing = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <SearchBar style={{ marginHorizontal: 20, marginVertical: 16 }} />
            <Text
                style={{
                    alignSelf: "center",
                    textAlign: "center",
                    color: Colors.dark500,
                }}
            >
                Up Coming page is currently being developed
            </Text>
        </View>
    );
};

export default UpComing;

const styles = StyleSheet.create({});
