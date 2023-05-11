import {
    View,
    Text,
    Pressable,
    Dimensions,
    Modal,
    StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const OrderOnlineModal = ({
    orderOnlineModalIsOpen,
    setOrderOnlineModalIsOpen,
    setSelectedFilters,
    selectedFilters,
    checkboxData,
    setCheckboxData,
}) => {
    useEffect(() => {
        let count = 0;
        checkboxData.map((d) => {
            if (d.isSelected) {
                count = count + 1;
            }
        });
        if (count > 0) {
            selectedFilters.map((sf) => {
                if (sf.name === "Order online") {
                    const rest = selectedFilters.filter(
                        (sf2) => sf2.name !== "Order online"
                    );
                    setSelectedFilters([
                        ...rest,
                        {
                            name: "Order online",
                            isSelected: true,
                        },
                    ]);
                } else {
                    setSelectedFilters([
                        ...selectedFilters,
                        {
                            name: "Order online",
                            isSelected: true,
                        },
                    ]);
                }
            });
        } else {
            selectedFilters.map((sf) => {
                if (sf.name === "Order online") {
                    const rest = selectedFilters.filter(
                        (sf2) => sf2.name !== "Order online"
                    );
                    setSelectedFilters([
                        ...rest,
                        {
                            name: "Order online",
                            isSelected: false,
                        },
                    ]);
                } else {
                    setSelectedFilters([
                        ...selectedFilters,
                        {
                            name: "Order online",
                            isSelected: false,
                        },
                    ]);
                }
            });
        }
    }, [checkboxData]);

    const clearAll = () => {
        selectedFilters.map((sf) => {
            if (sf.name === "Order online") {
                const rest = selectedFilters.filter(
                    (sf) => sf.name !== "Order online"
                );
                setSelectedFilters([
                    ...rest,
                    {
                        name: "Order online",
                        isSelected: false,
                    },
                ]);
            }
        });
        setCheckboxData([
            {
                name: "Order Online",
                isSelected: false,
            },
            {
                name: "Order Delivery",
                isSelected: false,
            },
        ]);
        setOrderOnlineModalIsOpen(false);
    };

    return (
        <Modal
            transparent={true}
            visible={orderOnlineModalIsOpen}
            animationType="slide"
            onRequestClose={() => {
                setOrderOnlineModalIsOpen(false);
            }}
        >
            <Pressable
                onPress={() => {
                    setOrderOnlineModalIsOpen(false);
                }}
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                <Pressable
                    onPress={() => {
                        //console.log("pressed inside");
                    }}
                    style={{
                        height: HEIGHT / 2,
                        width: WIDTH,
                        backgroundColor: "white",
                        borderRadius: 10,
                        //paddingHorizontal: 10,
                        paddingVertical: 16,
                        alignItems: "center",
                        marginBottom: 49,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            paddingHorizontal: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.light500,
                            paddingBottom: 16,
                        }}
                    >
                        <Pressable style={{ flex: 0.3 }} onPress={clearAll}>
                            <Text
                                style={{
                                    color: Colors.green500,
                                    fontSize: 16,
                                    lineHeight: 22,
                                    fontWeight: "400",
                                }}
                            >
                                Clear all
                            </Text>
                        </Pressable>
                        <Text
                            style={{
                                color: Colors.dark600,
                                fontSize: 16,
                                lineHeight: 22,
                                fontWeight: "600",
                                //marginRight: 102,
                                flex: 0.3,
                                textAlign: "center",
                            }}
                        >
                            Order Online
                        </Text>
                        <Pressable
                            onPress={() => {
                                setOrderOnlineModalIsOpen(false);
                            }}
                            style={{
                                flex: 0.3,
                                alignItems: "flex-end",
                            }}
                        >
                            <AntDesign name="close" size={16} color="black" />
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 16,
                        }}
                    >
                        <View style={{ marginTop: 14, width: WIDTH - 40 }}>
                            <View style={{ flexDirection: "column" }}>
                                {checkboxData.map((cd, index) => (
                                    <Pressable
                                        key={index}
                                        style={styles.radioRow}
                                        onPress={() => {
                                            const rest = checkboxData.filter(
                                                (cd2) => cd2.name !== cd.name
                                            );
                                            setCheckboxData([
                                                ...rest,
                                                {
                                                    name: cd.name,
                                                    isSelected: !cd.isSelected,
                                                },
                                            ]);
                                        }}
                                    >
                                        <View
                                            style={[
                                                styles.outer,
                                                {
                                                    borderColor: `${
                                                        cd.isSelected
                                                            ? Colors.green500
                                                            : Colors.dark400
                                                    }`,
                                                },
                                            ]}
                                        >
                                            {cd.isSelected && (
                                                <View style={styles.inner} />
                                            )}
                                        </View>
                                        <Text style={styles.radioText}>
                                            {cd.name}
                                        </Text>
                                    </Pressable>
                                ))}
                            </View>
                        </View>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    radioText: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "400",
        color: "#6D6D6D",
    },
    inner: {
        width: 8,
        height: 8,
        borderRadius: 2,
        backgroundColor: Colors.green500,
    },
    outer: {
        width: 16,
        height: 16,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
    },
    radioRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 11,
    },
});

export default OrderOnlineModal;
