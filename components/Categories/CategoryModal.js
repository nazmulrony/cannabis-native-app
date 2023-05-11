import {
    View,
    Text,
    Pressable,
    ScrollView,
    Dimensions,
    Modal,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const CategoryModal = ({
    categoriesModalIsOpen,
    setCategoriesModalIsOpen,
    selected,
    setSelected,
    setSelectedFilters,
    selectedFilters,
}) => {
    const clearAll = () => {
        selectedFilters.map((sf) => {
            if (sf.name === "Categories") {
                const rest = selectedFilters.filter(
                    (sf) => sf.name !== "Categories"
                );
                setSelectedFilters([
                    ...rest,
                    {
                        name: "Categories",
                        isSelected: false,
                    },
                ]);
            }
        });
        setSelected(null);
        //console.log(selectedFilters);
        setCategoriesModalIsOpen(false);
    };

    return (
        <Modal
            transparent={true}
            visible={categoriesModalIsOpen}
            animationType="slide"
            onRequestClose={() => {
                setCategoriesModalIsOpen(false);
            }}
        >
            <Pressable
                onPress={() => {
                    setCategoriesModalIsOpen(false);
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
                                flex: 0.4,
                                textAlign: "center",
                            }}
                        >
                            Categories
                        </Text>
                        <Pressable
                            onPress={() => {
                                setCategoriesModalIsOpen(false);
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
                        {/* <ScrollView showsVerticalScrollIndicator={false}>
                            {subCategoriesData.map((item, index) => (
                                <SubCategories
                                    active={active}
                                    setActive={setActive}
                                    key={index}
                                    item={item}
                                />
                            ))}
                        </ScrollView> */}
                        <View style={{ marginTop: 14, width: WIDTH - 40 }}>
                            <View style={{ flexDirection: "column" }}>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf) =>
                                                            sf.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: false,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("All");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "All" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"All" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>All</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Vape Pen");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Vape Pen" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Vape Pen" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Vape Pen
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Flower");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Flower" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Flower" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>Flower</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Concentrates");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Concentrates" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Concentrates" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Concentrates
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Pre roll");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Pre roll" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Pre roll" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Pre-Roll
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("CBD");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "CBD" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"CBD" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>CBD</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.radioRow}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Topicals");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Topicals" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Topicals" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Topicals
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.radioRow, styles.subCat]}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf2) =>
                                                            sf2.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Pre Roll");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Pre Roll" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Pre Roll" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Pre Roll
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.radioRow, styles.subSubCat]}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf) =>
                                                            sf.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Infused pre roll");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Infused pre roll" ===
                                                    selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Infused pre roll" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Infused pre roll
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.radioRow, styles.subSubCat]}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf) =>
                                                            sf.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Blunt Wrap");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Blunt Wrap" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Blunt Wrap" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Blunt Wrap
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.radioRow, styles.subCat]}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf) =>
                                                            sf.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Infused flower");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Infused flower" ===
                                                    selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Infused flower" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>
                                        Infused flower
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.radioRow, styles.subCat]}
                                    onPress={() => {
                                        selectedFilters.map((sf) => {
                                            if (sf.name === "Categories") {
                                                const rest =
                                                    selectedFilters.filter(
                                                        (sf) =>
                                                            sf.name !==
                                                            "Categories"
                                                    );
                                                setSelectedFilters([
                                                    ...rest,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            } else {
                                                setSelectedFilters([
                                                    ...selectedFilters,
                                                    {
                                                        name: "Categories",
                                                        isSelected: true,
                                                    },
                                                ]);
                                            }
                                        });
                                        setSelected("Shake");
                                        //console.log(selectedFilters);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.outer,
                                            {
                                                borderColor: `${
                                                    "Shake" === selected
                                                        ? Colors.green500
                                                        : Colors.dark400
                                                }`,
                                            },
                                        ]}
                                    >
                                        {"Shake" === selected && (
                                            <View style={styles.inner} />
                                        )}
                                    </View>
                                    <Text style={styles.radioText}>Shake</Text>
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
    subCat: {
        marginLeft: 20,
    },
    subSubCat: {
        marginLeft: 40,
    },
});

export default CategoryModal;
