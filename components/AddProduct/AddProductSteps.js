import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { HStack, Divider } from "native-base";
import { GlobalStyles } from "../../constants/style";
import { AntDesign } from "@expo/vector-icons";

const AddProductSteps = ({ step }) => {
    return (
        <View style={styles.container}>
            <HStack
                alignItems={"center"}
                space={2}
                justifyContent="space-between"
            >
                <HStack space={2}>
                    <View
                        style={
                            step === 1
                                ? styles.stepBgActive
                                : styles.stepBgCompleted
                        }
                    >
                        {step === 1 ? (
                            <Text style={styles.step1Active}>1</Text>
                        ) : (
                            <AntDesign
                                name="check"
                                size={18}
                                color={GlobalStyles.colors.primary500}
                            />
                        )}
                    </View>
                    <Text>Product Details</Text>
                </HStack>
                <Divider thickness={1.5} width={50} />
                <HStack space={2}>
                    <View
                        style={
                            step === 2
                                ? styles.stepBgActive
                                : styles.stepBgInactive
                        }
                    >
                        <Text
                            style={
                                step === 2
                                    ? { color: "white" }
                                    : styles.stepInactive
                            }
                        >
                            2
                        </Text>
                    </View>
                    <Text style={step !== 2 && styles.stepInactive}>
                        Product Allocation
                    </Text>
                </HStack>
            </HStack>
        </View>
    );
};

export default AddProductSteps;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginTop: 36
    },
    step1Active: { color: "white" },
    stepBgActive: {
        backgroundColor: GlobalStyles.colors.primary500,
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    stepBgInactive: {
        backgroundColor: GlobalStyles.colors.gray100,
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    stepBgCompleted: {
        backgroundColor: GlobalStyles.colors.primary100,
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    stepInactive: {
        color: GlobalStyles.colors.gray300,
    },
});
