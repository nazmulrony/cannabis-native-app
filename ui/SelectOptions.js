import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/style";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { formSelector, setFormData } from "../redux/slices/inventory.slice";
const SelectOptions = ({
    label,
    style,
    options,
    initialValue,
    setSelected,
    error,
    name,
    containerStyle,
}) => {
    const [activeLabel, setActiveLabel] = useState(initialValue || "Select one");
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const form = useSelector(formSelector);
    return (
        <View style={[{ marginBottom: 16 }, containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            <Pressable
                style={[styles.container, style, error && { borderColor: "#dc2626" }]}
                onPress={() => setShowModal(!showModal)}
            >
                <Text>{activeLabel}</Text>
                <AntDesign name="down" size={16} color={GlobalStyles.colors.gray700} />
                <Modal
                    visible={showModal}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setShowModal(false)}
                >
                    <Pressable style={styles.outerContainer} onPress={() => setShowModal(false)}>
                        <View style={styles.innerContainer}>
                            {options?.map((option, index) => (
                                <Pressable
                                    onPress={() => {
                                        setSelected(option);
                                        setActiveLabel(option);
                                        setShowModal(false);
                                    }}
                                    key={index}
                                    style={({ pressed }) => [
                                        styles.option,
                                        pressed && styles.pressed,
                                    ]}
                                >
                                    <Text>{option}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </Pressable>
                </Modal>
            </Pressable>
            {error && (
                <View style={styles.errorContainer}>
                    <MaterialIcons name="error-outline" size={14} color="#dc2626" />
                    <Text
                        style={{
                            color: "#dc2626",
                            fontSize: 12,
                            marginLeft: 4,
                        }}
                    >
                        {error}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default SelectOptions;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: GlobalStyles.colors.gray100,
        // marginVertical: 10,
        backgroundColor: "white",
    },
    outerContainer: {
        borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000071",
    },
    innerContainer: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width - 40,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 8,
    },

    label: {
        color: GlobalStyles.colors.gray300,
        fontWeight: "500",
        marginVertical: 4,
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    pressed: {
        backgroundColor: GlobalStyles.colors.light50,
    },
    optionText: {},
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
});
