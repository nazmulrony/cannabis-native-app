import {
    View,
    Text,
    Pressable,
    Dimensions,
    Modal,
    StyleSheet,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SortModal = ({
    sortModalIsOpen,
    setSortModalIsOpen,
    setSelectedFilters,
    selectedFilters,
    sort,
    setSort,
}) => {
    const clearAll = () => {
        selectedFilters.map((sf) => {
            if (sf.name === "Sort") {
                const rest = selectedFilters.filter((sf) => sf.name !== "Sort");
                setSelectedFilters([
                    ...rest,
                    {
                        name: "Sort",
                        isSelected: false,
                    },
                ]);
            }
        });
        setSort(null);
        setSortModalIsOpen(false);
    };
    return (
        <Modal
            transparent={true}
            visible={sortModalIsOpen}
            animationType="slide"
            onRequestClose={() => {
                setSortModalIsOpen(false);
            }}
        >
            <Pressable
                onPress={() => {
                    setSortModalIsOpen(false);
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
                            Sort
                        </Text>
                        <Pressable
                            onPress={() => {
                                setSortModalIsOpen(false);
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
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Sort") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !== "Sort"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Sort",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Sort",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });

                                        setSort("Best Seller");
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Best Seller" === sort
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Best Seller" === sort && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Best Seller
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Sort") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !== "Sort"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Sort",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Sort",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });

                                        setSort("Newly Added");
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Newly Added" === sort
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Newly Added" === sort && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Newly Added
                                    </Text>
                                </Pressable>
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
        borderRadius: 4,
        backgroundColor: Colors.green500,
    },
    outer: {
        width: 16,
        height: 16,
        borderRadius: 8,
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

export default SortModal;
