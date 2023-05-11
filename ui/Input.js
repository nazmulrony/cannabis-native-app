import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../constants/style";

const Input = ({ label, inputConfig }) => {
    const [focused, setFocused] = useState("");
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                {...inputConfig}
                style={focused === label ? styles.inputFocused : styles.input}
                onFocus={() => setFocused(label)}
                onBlur={() => setFocused("")}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 10,
    },
    label: {
        color: GlobalStyles.colors.gray700,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "white",
    },
    inputFocused: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#4CAF50",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: "#4CAF50",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
    },
});
