import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";
import {
    Button,
    ChevronDownIcon,
    ChevronUpIcon,
    Divider,
    HStack,
    Input,
    VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import InputField from "../../ui/InputField";
import moment from "moment";
import { Pressable } from "react-native";

const Timeline = ({ timeline }) => {
    console.log(timeline);
    const [times, setTimes] = useState([...timeline]);
    console.log(times);
    const [enteredText, setEnteredText] = useState(null);
    const [show, setShow] = useState(false);
    // console.log(enteredText);
    const onPostHandler = (text) => {
        if (enteredText) {
            setTimes([
                ...times,
                {
                    title: text,
                    createdAt: new Date(),
                    postedBy: "Abcd",
                    _id: "abcd",
                },
            ]);
        }
        setEnteredText(null);
    };
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
                    <Text style={{ fontWeight: "500" }}>Timeline</Text>
                </HStack>
            </Pressable>
            {/* <View style={styles.divider}></View> */}

            {show && (
                <View style={styles.timelineContainer}>
                    {times?.map((time, index) => (
                        <HStack
                            key={index}
                            style={{
                                justifyContent: "space-between",
                                marginBottom: 16,
                                position: "relative",
                            }}
                        >
                            <HStack
                                w={"70%"}
                                space={3}
                                style={{
                                    alignItems: "flex-start",
                                }}
                            >
                                <FontAwesome
                                    name="dot-circle-o"
                                    size={14}
                                    color={GlobalStyles.colors.primary500}
                                />
                                <VStack>
                                    {time?.title && <Text>{time?.title}</Text>}
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: GlobalStyles.colors.gray300,
                                        }}
                                    >
                                        {moment(time?.createdAt).format("LL")}
                                    </Text>
                                </VStack>
                                {index < times?.length - 1 && (
                                    <Divider
                                        orientation="vertical"
                                        thickness={2}
                                        style={{
                                            position: "absolute",
                                            left: 5,
                                            top: 13,
                                        }}
                                    />
                                )}
                            </HStack>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: GlobalStyles.colors.gray300,
                                }}
                            >
                                {moment(time?.createdAt).format("LT")}
                            </Text>
                        </HStack>
                    ))}
                </View>
            )}

            {/* post option for timeline */}

            {/* <HStack space={2}>
                <Input
                    w={"70%"}
                    style={{ backgroundColor: "white" }}
                    _input={{ fontSize: 14 }}
                    onChangeText={setEnteredText}
                    value={enteredText}
                />
                <Button
                    flex={1}
                    // background="primary.400"
                    onPress={() => onPostHandler(enteredText)}
                >
                    Post
                </Button>
            </HStack> */}
        </View>
    );
};

export default Timeline;

const styles = StyleSheet.create({
    container: {},
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        marginVertical: 16,
        borderColor: GlobalStyles.colors.gray200,
    },
    timelineContainer: {
        paddingVertical: 16,
        backgroundColor: "white",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        // borderTopWidth: 1,
        // borderTopColor: "#C4C4C4",
    },
});
