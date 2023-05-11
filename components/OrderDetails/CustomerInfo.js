import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    Divider,
    HStack,
    VStack,
} from "native-base";
import { GlobalStyles } from "../../constants/style";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { useState } from "react";

const CustomerInfo = ({ info }) => {
    const [show, setShow] = useState();
    return (
        <View style={styles.container}>
            <Pressable
                style={{
                    // borderTopWidth: 1,
                    // borderTopColor: "#C4C4C4",
                    borderBottomWidth: 1,
                    borderBottomColor: "#C4C4C4",
                }}
                onPress={() => setShow(!show)}
            >
                <HStack
                    space={2}
                    alignItems={"center"}
                    style={{ paddingHorizontal: 20, paddingVertical: 12 }}
                >
                    {!show && <ChevronDownIcon size={4} mr={2} />}
                    {show && <ChevronUpIcon size={4} mr={2} />}
                    <FontAwesome5
                        name="user-circle"
                        size={20}
                        color={Colors.dark600}
                    />
                    <Text style={{ fontWeight: "500" }}>Seller</Text>
                </HStack>
            </Pressable>

            {show && (
                <View style={styles.infoContainer}>
                    {/* <View style={styles.divider}></View> */}
                    {/* <Text>Contact Information</Text> */}
                    <HStack space={20}>
                        <VStack space={1}>
                            <Text style={styles.lightText}>Business Name</Text>
                            <Text style={styles.lightText}>Email</Text>
                            <Text style={styles.lightText}>Phone</Text>
                        </VStack>
                        <VStack space={1}>
                            <Text style={styles.darkText}>
                                {info?.business_name}
                            </Text>
                            <Text style={styles.darkText}>
                                {info?.contact_email}
                            </Text>
                            <Text style={styles.darkText}>
                                {info?.contact_number}
                            </Text>
                        </VStack>
                    </HStack>
                    <View style={styles.divider}></View>
                    <Text style={styles.lightText}>Address</Text>
                    <Text style={styles.darkText}>
                        {info?.address?.zip}, {info?.address?.street},{" "}
                        {info?.address?.state}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default CustomerInfo;

const styles = StyleSheet.create({
    container: {
        // marginBottom: 20,
    },
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        marginVertical: 16,
        borderColor: GlobalStyles.colors.gray200,
    },
    infoContainer: {
        paddingVertical: 16,
        backgroundColor: "white",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        // borderTopWidth: 1,
        // borderTopColor: "#C4C4C4",
    },
    lightText: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color: Colors.dark500,
    },
    darkText: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "500",
        color: Colors.dark600,
    },
});
