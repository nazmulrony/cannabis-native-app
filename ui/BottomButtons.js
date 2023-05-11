import { View, Text, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import IconTextButton from "./IconTextButton";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const BottomButtons = ({ num, setNum, min, onSubmit, disabled }) => {
    // console.log(num);
    const [value, setValue] = useState(num);
    useEffect(() => {
        setValue(num);
    }, [num]);
    const handleChange = () => {
        const numericValue = parseInt(value);
        if (isNaN(numericValue)) {
            setNum(min);
            // setValue(min);
        } else if (numericValue > 100) {
            setNum(100);
            // setValue(100);
        } else if (numericValue <= 100 && numericValue > min) {
            setNum(numericValue);
            // setValue(numericValue);
        } else {
            setNum(min);
            // setValue(min);
        }
    };
    return (
        <>
            <View
                style={{
                    flex: 0.45,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    borderColor: Colors.light500,
                    borderWidth: 1,
                    backgroundColor: "#F5F5F5",
                }}
            >
                <Pressable
                    disabled={num <= min}
                    android_ripple={{
                        color: "#cccccc",
                    }}
                    onPress={() => {
                        if (num <= 1) {
                            return;
                        }
                        setNum(num - 1);
                        setValue(num - 1);
                    }}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: Colors.light500,
                        backgroundColor: "white",
                    }}
                >
                    <AntDesign name="minus" size={24} color="#6D6D6D" />
                </Pressable>
                <TextInput
                    style={{
                        fontSize: 14,
                        lineHeight: 22,
                        fontWeight: "500",
                        color: Colors.dark600,
                    }}
                    value={`${value}`}
                    onChangeText={(value) => {
                        setValue(value);
                    }}
                    onBlur={handleChange}
                    keyboardType={"numeric"}
                />
                <Pressable
                    android_ripple={{
                        color: "#cccccc",
                    }}
                    onPress={() => {
                        setNum(num + 1);
                        setValue(num + 1);
                    }}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 5,
                        borderLeftWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: Colors.light500,
                        backgroundColor: "white",
                    }}
                >
                    <AntDesign name="plus" size={24} color="#6D6D6D" />
                </Pressable>
            </View>
            <IconTextButton
                disabled={disabled}
                onPress={onSubmit}
                style={{
                    flex: 0.45,
                }}
                icon={<AntDesign name="shoppingcart" size={20} color="white" />}
            >
                Add to cart
            </IconTextButton>
        </>
    );
};

export default BottomButtons;
