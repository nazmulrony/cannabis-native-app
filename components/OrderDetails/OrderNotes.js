import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon, HStack, VStack } from "native-base";
import { Foundation } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useState } from "react";
import { Pressable } from "react-native";

const OrderNotes = () => {
    const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
            <Pressable
                style={{
                    borderTopWidth: 1,
                    borderTopColor: "#C4C4C4",
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
                    <Foundation
                        name="clipboard-notes"
                        size={20}
                        color={Colors.dark600}
                    />
                    <Text style={{ fontWeight: "500" }}>Notes</Text>
                </HStack>
            </Pressable>
            {show && (
                <View style={styles.notesContainer}>
                    <Text style={styles.notes}>No notes from customer</Text>
                </View>
            )}
        </View>
    );
};

export default OrderNotes;

const styles = StyleSheet.create({
    container: {
        // marginBottom: 20,
    },
    notes: {
        color: Colors.dark500,
    },
    notesContainer: {
        paddingVertical: 16,
        backgroundColor: "white",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        // borderTopWidth: 1,
        // borderTopColor: "#C4C4C4",
    },
});
