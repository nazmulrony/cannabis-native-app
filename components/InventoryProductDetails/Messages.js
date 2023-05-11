import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Messages = () => {
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
                You have no room !
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 14.5,
                    color: Colors.dark500,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.dark500,
                    marginTop: 40,
                }}
            >
                See archived Messages
            </Text>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({});
