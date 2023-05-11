import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider, HStack } from "native-base";
import { Image } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const AvailableTransports = () => {
    const data = [
        {
            image: require("../../assets/images/mini-van.png"),
            title: "Mini Van",
            description: "Get a mini van at your doorstep",
        },
        {
            image: require("../../assets/images/pickup-van.png"),
            title: "Pickup Van",
            description: "Get a pickup van at your doorstep",
        },
        {
            image: require("../../assets/images/van.png"),
            title: "Van",
            description: "Get a van at your doorstep",
        },
        {
            image: require("../../assets/images/truck.png"),
            title: "Truck",
            description: "Get a truck at your doorstep",
        },
    ];
    return (
        <View style={{ marginVertical: 16 }}>
            <Text style={[styles.title, { marginBottom: 12 }]}>
                AvailableTransports
            </Text>
            <View style={styles.container}>
                {data?.map((d, index) => (
                    <Pressable
                        key={index}
                        style={({ pressed }) => pressed && { opacity: 0.7 }}
                    >
                        <HStack
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <HStack>
                                <Image
                                    style={{
                                        width: 50,
                                        height: 39,
                                        marginRight: 29,
                                    }}
                                    source={d?.image}
                                />
                                <View>
                                    <Text style={styles.title}>{d?.title}</Text>
                                    <Text style={styles.description}>
                                        {d?.description}
                                    </Text>
                                </View>
                            </HStack>
                            <AntDesign
                                name="right"
                                size={20}
                                color={Colors.dark600}
                            />
                        </HStack>
                        {index !== data.length - 1 && (
                            <Divider
                                my={3}
                                orientation="horizontal"
                                // color={Colors.dark500}
                                // size={1}
                                // w={"1"}
                                thickness={2}
                                rounded={"full"}
                            />
                        )}
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

export default AvailableTransports;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        paddingVertical: 23,
        backgroundColor: "white",
        borderRadius: 7,
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: Colors.dark600,
    },
    description: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "400",
        color: Colors.dark500,
    },
});
