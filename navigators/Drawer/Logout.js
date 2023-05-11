import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
const Logout = ({ label, icon, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) =>
                pressed
                    ? [styles.rootContainer, styles.pressed]
                    : styles.rootContainer
            }
        >
            <View style={styles.labelContainer}>
                {icon}
                <Text style={styles.label}>{label}</Text>
            </View>
        </Pressable>
    );
};

export default Logout;

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 20,
        marginVertical: 12,
        overflow: "hidden",
    },
    pressed: {
        opacity: 0.7,
    },
    labelContainer: {
        marginHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
    },
    label: {
        marginLeft: 16,
        fontSize: 14,
    },
});
