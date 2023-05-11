import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";

const TextButton = ({ children, onPress, style }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Text style={[styles.buttonText, style]}>{children}</Text>
        </Pressable>
    );
};

export default TextButton;

const styles = StyleSheet.create({
    buttonText: {
        color: GlobalStyles.colors.primary500,
        marginHorizontal: 4,
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.7,
    },
});
