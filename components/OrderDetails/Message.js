import {
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { GlobalStyles } from "../../constants/style";
import {
    Button,
    Center,
    ChevronDownIcon,
    ChevronUpIcon,
    HStack,
    Image,
    Input,
} from "native-base";
import { Pressable } from "react-native";
import { useState } from "react";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useGetRoomMessagesQuery } from "../../ApiServices/messages.service";
import SingleMessage from "../InvoiceDetails/SingleMessage";
import { ScrollView } from "react-native";
import SendMessage from "../InvoiceDetails/SendMessage";

const Message = ({ room, loading }) => {
    const { data: { messages } = [], isLoading: messageLoading } =
        useGetRoomMessagesQuery(room?._id, {
            refetchOnMountOrArgChange: true,
            pollingInterval: 2000,
            skip: !room?._id,
        });
    console.log(messages);
    const scrollViewRef = useRef(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
        // Scroll to the bottom when new content is added
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);
    return (
        <View style={styles.container}>
            <Pressable
                style={{
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
                    <AntDesign name="mail" size={20} color={Colors.dark600} />
                    <Text style={{ fontWeight: "500" }}>Message</Text>
                </HStack>
            </Pressable>
            {show && (
                <KeyboardAvoidingView
                    style={{ flex: 1, backgroundColor: "white" }}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                >
                    {room ? (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderBottomWidth: 1,
                                borderBottomColor: "#C4C4C4",
                                marginHorizontal: 20,
                            }}
                        >
                            <Text
                                style={{
                                    paddingVertical: 11,
                                    fontSize: 14,
                                    lineHeight: 21,
                                    fontWeight: "500",
                                    color: Colors.dark600,
                                }}
                            >
                                {room?.companies.reduce(
                                    (acc, curr) =>
                                        acc === ""
                                            ? curr.business_name
                                            : `${acc}, ${curr?.business_name}`,
                                    ""
                                )}
                            </Text>
                            <Text style={styles.text}>{room?.topic}</Text>
                        </View>
                    ) : !room && loading ? (
                        <Text>Loading...</Text>
                    ) : null}
                    <ScrollView
                        style={{
                            height: messages?.length
                                ? Dimensions.get("screen").height / 3
                                : "auto",
                        }}
                        nestedScrollEnabled
                        ref={scrollViewRef}
                        onContentSizeChange={() =>
                            scrollViewRef?.current?.scrollToEnd({
                                animated: true,
                            })
                        }
                        onLayout={() =>
                            scrollViewRef?.current?.scrollToEnd({
                                animated: true,
                            })
                        }
                    >
                        {messageLoading ? (
                            <Text>Loading...</Text>
                        ) : messages?.length ? (
                            messages?.map((message, index) => (
                                <SingleMessage message={message} key={index} />
                            ))
                        ) : (
                            <Center style={styles.messageContainer}>
                                <Image
                                    source={require("../../assets/images/noMessage.png")}
                                    size={"sm"}
                                    alt={""}
                                />
                                <Text style={styles.text}>
                                    Conversation is not started yet.
                                </Text>
                            </Center>
                        )}
                    </ScrollView>
                    <SendMessage room={room} />
                </KeyboardAvoidingView>
            )}
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        // borderRadius: 8,
        // padding: 20,
        // elevation: 2,
        // marginHorizontal: 20,
        // marginBottom: 20,
    },
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        marginVertical: 16,
        borderColor: GlobalStyles.colors.gray200,
    },
    text: {
        color: GlobalStyles.colors.gray300,
        marginVertical: 8,
    },
    messageContainer: {
        paddingVertical: 16,
        backgroundColor: "white",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
    },
});
