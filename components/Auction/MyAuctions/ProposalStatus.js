import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "../../../constants/Colors";
import { Pressable } from "react-native";
import SelectOptions from "../../../ui/SelectOptions";
import ProposalCard from "./ProposalCard";

const ProposalStatus = () => {
    const [selected, setSelected] = useState("Active");
    const [price, setPrice] = useState();
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: "500",
                    color: Colors.dark600,
                    marginBottom: 6,
                }}
            >
                Proposal Status
            </Text>
            <Text
                style={{
                    fontSize: 13,
                    lineHeight: 19.5,
                    fontWeight: "400",
                    color: Colors.dark500,
                    marginBottom: 18,
                }}
            >
                Select your proposals as their current status
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#F5F5F5",
                    borderRadius: 8,
                    marginBottom: 18,
                }}
            >
                <Pressable
                    onPress={() => setSelected("Active")}
                    style={
                        selected === "Active" ? styles.active : styles.inactive
                    }
                >
                    <Text
                        style={
                            selected === "Active"
                                ? styles.activeText
                                : styles.inactiveText
                        }
                    >
                        Active
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => setSelected("Pending")}
                    style={
                        selected === "Pending" ? styles.active : styles.inactive
                    }
                >
                    <Text
                        style={
                            selected === "Pending"
                                ? styles.activeText
                                : styles.inactiveText
                        }
                    >
                        Pending
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => setSelected("Archive")}
                    style={
                        selected === "Archive" ? styles.active : styles.inactive
                    }
                >
                    <Text
                        style={
                            selected === "Archive"
                                ? styles.activeText
                                : styles.inactiveText
                        }
                    >
                        Archive
                    </Text>
                </Pressable>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ width: "47%" }}>
                    <SelectOptions
                        label={"Price"}
                        containerStyle={{ marginBottom: 0 }}
                        initialValue={"$200"}
                        setSelected={(value) => setPrice(value)}
                        options={["$200", "$400", "$600", "$800"]}
                    />
                </View>
                <View style={{ width: "47%" }}>
                    <SelectOptions
                        containerStyle={{ marginBottom: 0 }}
                        label={"Sort by"}
                        setSelected={(value) => setPrice(value)}
                        options={["Date", "Price", "Popularity"]}
                    />
                </View>
            </View>
        </View>
    );
};

export default ProposalStatus;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 16,
        borderRadius: 7,
        backgroundColor: "white",
        marginBottom: 0,
    },
    active: {
        backgroundColor: Colors.green500,
        paddingVertical: 9,
        flex: 1,
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    inactive: {
        flex: 1,
        // borderWidth: 1,
        paddingVertical: 9,
        justifyContent: "center",
        alignItems: "center",
    },
    activeText: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "500",
        color: "white",
    },
    inactiveText: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "400",
        color: "#6D6D6D",
    },
});
