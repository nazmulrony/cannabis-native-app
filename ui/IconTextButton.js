import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";

const IconTextButton = ({ style, onPress, children, icon, disabled }) => {
    return (
        <View style={[styles.root, style]}>
            <Pressable
                disabled={disabled}
                onPress={onPress}
                style={({ pressed }) => {
                    return pressed && styles.pressed;
                }}
            >
                <View
                    style={[
                        styles.buttonContainer,
                        {
                            backgroundColor: disabled
                                ? "gray"
                                : GlobalStyles.colors.primary500,
                        },
                    ]}
                >
                    {icon}
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: "100%",
    },
    buttonContainer: {
        padding: 12,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        fontSize: 14,
        textAlign: "center",
        color: "white",
        fontWeight: "500",
        marginHorizontal: 8,
    },
});

export default IconTextButton;
