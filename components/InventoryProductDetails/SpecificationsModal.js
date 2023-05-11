import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { Pressable } from "react-native";
import { Modal } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { Icon, IconButton, Stack } from "native-base";

const SpecificationsModal = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const data = [
        { key: "Category", value: product?.category || "N/A" },
        { key: "Strain", value: product?.specifications?.strain || "N/A" },
        { key: "Terpenes", value: product?.specifications?.terpenes || "N/A" },
        {
            key: "Cannabinoids",
            value: product?.specifications?.total_cannabinoids || "N/A",
        },
        { key: "Batch No:", value: product?.batch?.number || "N/A" },
        { key: "THC: %", value: product?.specifications?.thc || "N/A" },
        { key: "Brand", value: product?.specifications?.brand || "N/A" },
    ];
    console.log(product, data);
    return (
        <>
            <Pressable
                onPress={() => setShowModal(true)}
                style={({ pressed }) => [
                    {
                        flexDirection: "row",
                        alignItems: "center",
                    },
                    pressed && { opacity: 0.6 },
                ]}
            >
                <Text style={[styles.company, { fontWeight: "400" }]}>
                    Category,Strain,Terpenes
                </Text>
                <AntDesign name="right" size={14} color={Colors.dark600} />
            </Pressable>
            <Modal
                animationType="slide"
                visible={showModal}
                transparent
                onRequestClose={() => setShowModal(false)}
            >
                <Pressable onPress={() => setShowModal(false)} style={styles.modalOuterContainer}>
                    <Pressable style={styles.modalContent}>
                        <View
                            style={{
                                paddingVertical: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: Colors.light500,
                                position: "relative",
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "500",
                                    fontSize: 16,
                                    lineHeight: 22,
                                }}
                            >
                                Specifications
                            </Text>
                            <IconButton
                                onPress={() => setShowModal(false)}
                                icon={<Icon as={Feather} name="x" />}
                                // borderRadius="full"
                                colorScheme={"light"}
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    right: 20,
                                }}
                                size={5}
                            />
                        </View>
                        <View style={{ padding: 20 }}>
                            <Stack flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                                {data?.map((d, index) => (
                                    <View key={index} style={{ marginBottom: 20, width: '40%' }}>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                lineHeight: 22,
                                                fontWeight: "500",
                                                color: Colors.dark600,
                                            }}
                                        >
                                            {d.key}
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                marginLeft: 28,
                                                marginTop: 8,
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: 6,
                                                    height: 6,
                                                    backgroundColor:
                                                        Colors.green500,
                                                    marginRight: 8,
                                                }}
                                            />
                                            <Text
                                                style={{
                                                    fontWeight: "400",
                                                    fontSize: 15,
                                                    lineHeight: 22.5,
                                                    color: Colors.dark500,
                                                }}
                                            >
                                                {d.value}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </Stack>
                        </View>
                    </Pressable>
                </Pressable>
                {/* <StatusBar backgroundColor={"rgba(0, 0, 0, 0.4)"} /> */}
            </Modal>
        </>
    );
};

export default SpecificationsModal;

const styles = StyleSheet.create({
    modalOuterContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height - 200,
        // borderRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        // paddingHorizontal: 20,
    },
});
