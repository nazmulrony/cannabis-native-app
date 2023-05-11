import { View, Text } from "react-native";
import React from "react";

const Badge = ({ children, style }) => {
    return (
        <View
            style={[
                {
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 20,
                    height: 20,
                    top: -10,
                    right: 4,
                    borderRadius: 100,
                    backgroundColor: "#db5454",
                },
                style,
            ]}
        >
            <Text
                style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 12,
                }}
            >
                {children}
            </Text>
        </View>
    );
};

export default Badge;
