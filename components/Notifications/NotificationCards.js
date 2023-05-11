import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import moment from "moment/moment";

const NotificationCards = ({ data, handleRemove, image }) => {
    return (
        <View
            style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#E1E1E1",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <View
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: Colors.light500,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 12,
                    }}
                >
                    <Image style={{ width: 30, height: 30 }} source={image} />
                </View>
                <View
                    style={{
                        flexWrap: "wrap",
                        // borderWidth: 1,
                        width: "70%",
                        flexDirection: "row",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 24,
                            fontWeight: "400",
                            color: Colors.dark600,
                            // borderWidth: 1,
                            width: "auto",
                        }}
                    >
                        {data?.text}{" "}
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 24,
                                fontWeight: "500",
                                color: Colors.dark600,
                                width: "auto",
                                borderWidth: 1,
                            }}
                        >
                            {/* {data?.keyWord} */}
                        </Text>
                    </Text>
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 13,
                            lineHeight: 15.5,
                            color: Colors.dark500,
                            marginTop: 6,
                        }}
                    >
                        {moment(data?.updatedAt).fromNow()}
                    </Text>
                </View>
            </View>
            <Pressable
                style={({ pressed }) => [
                    {
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        // borderWidth: 1,
                        marginTop: 5,
                        backgroundColor: "#F2F2F1",
                        opacity: pressed ? 0.6 : 1, // Set the opacity based on the pressed state
                    },
                ]}
                onPress={() => handleRemove(data?.id)}
            >
                <AntDesign name="close" size={14} color="black" />
            </Pressable>
        </View>
    );
};

export default NotificationCards;
