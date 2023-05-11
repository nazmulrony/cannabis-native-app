import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const RadioButtons = ({ items, onPress, initial, color, direction, gap }) => {
    const lastChildIndex = items.length - 1;

    return (
        <View style={[styles.container, { flexDirection: direction }]}>
            {items.map((item, index) => (
                <Pressable
                    key={item.value}
                    onPress={() => onPress(item.value)}
                    style={[
                        styles.wrapper,
                        direction === "row" &&
                            index < lastChildIndex && {
                                marginRight: gap ? gap : 8,
                            },
                        direction !== "row" &&
                            index < lastChildIndex && {
                                marginBottom: gap ? gap : 4,
                            },
                    ]}
                >
                    <View
                        style={[styles.outer, color && { borderColor: color }]}
                    >
                        {initial === item.value && (
                            <View
                                style={[
                                    styles.inner,
                                    color && { backgroundColor: color },
                                ]}
                            ></View>
                        )}
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                </Pressable>
            ))}
        </View>
    );
};

export default RadioButtons;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexWrap: "wrap",
    // },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    outer: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        marginRight: 4,
    },
    inner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "black",
    },
    label: {
        // textTransform: "capitalize",
        fontSize: 13,
    },
});
