import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Marketplace = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.5,
                    color: Colors.dark500,
                }}
            >
                Marketplace is empty !
            </Text>
        </View>
    );
};

export default Marketplace;

const styles = StyleSheet.create({});
