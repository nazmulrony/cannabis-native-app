import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CardRadioButtons = ({ items, onPress, initial }) => {
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <Pressable
                    key={index}
                    style={[
                        styles.card,
                        item.userType === initial && styles.selected,
                    ]}
                    onPress={() => onPress(item.userType)}
                >
                    <View
                        style={[
                            styles.iconContainer,
                            item.userType === initial && {
                                backgroundColor: GlobalStyles.colors.primary50,
                            },
                        ]}
                    >
                        <item.Icon width={30} height={30} />
                    </View>
                    <View>
                        <Text style={styles.userType}>{item.userType}</Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                    </View>
                    {/* <View style={styles.outer}></View> */}
                    <View style={styles.outer}>
                        {item.userType === initial ? (
                            <Ionicons
                                name="checkmark-circle-sharp"
                                size={24}
                                color={GlobalStyles.colors.primary500}
                            />
                        ) : (
                            <Ionicons
                                name="radio-button-off-outline"
                                size={24}
                                color={GlobalStyles.colors.gray200}
                            />
                        )}
                    </View>
                </Pressable>
            ))}
        </View>
    );
};

export default CardRadioButtons;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        justifyContent: "center",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray200,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 18,
        marginVertical: 8,
        position: "relative",
    },
    iconContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: GlobalStyles.colors.light50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    userType: {
        fontWeight: "bold",
        fontSize: 14,
    },
    description: {
        fontSize: 12,
        width: "60%",
        color: GlobalStyles.colors.gray300,
    },
    outer: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    inner: {},
    selected: {
        borderWidth: 1.2,
        borderColor: GlobalStyles.colors.primary500,
    },
});
