import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, HStack, Input } from "native-base";
import { useSendMessageMutation } from "../../ApiServices/messages.service";
import { useState } from "react";

const SendMessage = ({ room }) => {
    const [sendMessage] = useSendMessageMutation();
    const [values, setValues] = useState("");
    const handleSendMessage = (values) => {
        const str = values;
        if (!str.replace(/\s/g, "").length) {
            // console.log(
            //     "string only contains whitespace (ie. spaces, tabs or line breaks)"
            // );
            return;
        }
        if (!room?._id || values === null || values === "") {
            // console.log("nothing to send");
            return;
        }
        console.log(values);
        const data = {
            room_id: room?._id,
            text: values,
        };
        sendMessage(data);
        setValues("");
    };
    return (
        <HStack space={2} marginY={4} mx={4}>
            <Input
                placeholder="Type message"
                w={"70%"}
                value={values}
                onChangeText={(text) => setValues(text)}
                style={{
                    backgroundColor: "white",
                    fontSize: 14,
                }}
            />
            <Button onPress={() => handleSendMessage(values)} flex={1}>
                Send
            </Button>
        </HStack>
    );
};

export default SendMessage;

const styles = StyleSheet.create({});
