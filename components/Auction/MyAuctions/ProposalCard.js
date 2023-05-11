import { StyleSheet, Text, View } from "react-native";
import React from "react";
import treehousehq from "../../../assets/images/treehousehq.png";
import { Image } from "react-native";
import Colors from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Button, HStack } from "native-base";

const ProposalCard = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    style={{ width: 56, height: 56, borderRadius: 100 }}
                    source={require("../../../assets/images/treehousehq.png")}
                />
                <View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 24,
                                fontWeight: "500",
                                color: Colors.dark600,
                            }}
                        >
                            Treehouse HQ
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                lineHeight: 19.5,
                                fontWeight: "400",
                                color: Colors.dark500,
                            }}
                        >
                            Erick, Oklahoma
                        </Text>
                    </View>

                    <HStack space={0.5} alignItems={"center"}>
                        <Text
                            style={{
                                fontSize: 14,
                                lineHeight: 21,
                                fontWeight: "500",
                                color: Colors.dark600,
                                marginRight: 4,
                            }}
                        >
                            4.9
                        </Text>
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#FFD600"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#FFD600"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#FFD600"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#FFD600"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star-half-full"
                            size={14}
                            color="#FFD600"
                        />
                    </HStack>
                </View>
                <View>
                    <Button
                        py={2}
                        px={9}
                        _text={{
                            fontSize: 13,
                            lineHeight: 19,
                            fontWeight: "500",
                            color: "white",
                        }}
                        colorScheme={"primary"}
                        marginBottom={3}
                    >
                        Active
                    </Button>
                    <Button
                        _text={{
                            fontSize: 13,
                            lineHeight: 19,
                            fontWeight: "500",
                            color: Colors.dark500,
                        }}
                        py={2}
                        px={9}
                        // colorScheme={"#F5F5F5"}
                        backgroundColor={"#ffffff"}
                        _pressed={{ backgroundColor: "#e0e0e0" }}
                        variant={"outline"}
                    >
                        Decline
                    </Button>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 24,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 13,
                            lineHeight: 19.5,
                            fontWeight: "500",
                            color: "#6D6D6D",
                            marginBottom: 6,
                        }}
                    >
                        Bid Amount
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            lineHeight: 21,
                            fontWeight: "500",
                            color: Colors.dark600,
                        }}
                    >
                        $260.00
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 13,
                            lineHeight: 19.5,
                            fontWeight: "500",
                            color: "#6D6D6D",
                            marginBottom: 2,
                        }}
                    >
                        License & Expiration
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            lineHeight: 18,
                            fontWeight: "400",
                            color: "#949494",
                            marginBottom: 2,
                        }}
                    >
                        DAA-4ISC-MT
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            lineHeight: 19.5,
                            fontWeight: "400",
                            color: Colors.dark600,
                        }}
                    >
                        22-07-2022
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ProposalCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 14,
        backgroundColor: "white",
        borderRadius: 7,
        marginTop: 20,
    },
});
