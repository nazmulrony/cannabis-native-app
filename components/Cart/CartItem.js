import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, HStack, Icon, IconButton, Input, VStack } from "native-base";
import image from "../../assets/images/no-product-thumb.png";
import thumb from "../../assets/images/image_thumb.png";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import {
    useRemoveProductMutation,
    useUpdateCartMutation,
} from "../../ApiServices/cart.service";

const CartItem = ({ item, index, len }) => {
    const product = item?.product || {};
    const [increment, incrementReq] = useUpdateCartMutation();
    const [decrement, decrementReq] = useUpdateCartMutation();
    const [updateQuantity, updateQuantityReq] = useUpdateCartMutation();
    const [updateUnitLb, updateUnitLbReq] = useUpdateCartMutation();
    const [updateUnitG, updateUnitGReq] = useUpdateCartMutation();
    const [removeProduct, { error: removeError, isLoading: removing }] =
        useRemoveProductMutation();
    const [value, setValue] = useState(item?.quantity);

    useEffect(() => {
        setValue(item?.quantity);
    }, [item]);

    const handleChange = async () => {
        const number = parseInt(value);
        if (item?.unit === "lb") {
            if (number > 100) {
                await updateQuantity({
                    product: product?._id,
                    unit: item?.unit,
                    quantity: 100,
                });
                setValue(100);
            } else if (
                number <= 100 &&
                number >= product?.allocations?.marketplace?.min_qty_lb
            ) {
                await updateQuantity({
                    product: product?._id,
                    unit: item?.unit,
                    quantity: number,
                });
                setValue(number);
            } else {
                await updateQuantity({
                    product: product?._id,
                    unit: item?.unit,
                    quantity: product?.allocations?.marketplace?.min_qty_lb,
                });
                setValue(product?.allocations?.marketplace?.min_qty_lb);
            }
        } else {
            if (number > 100) {
                await updateQuantity({
                    product: product?._id,
                    unit: item?.unit,
                    quantity: 100,
                });
                setValue(100);
            } else if (
                number <= 100 &&
                number >= product?.allocations?.marketplace?.min_qty_g
            ) {
                await updateQuantity({
                    product: product?._id,
                    unit: item?.unit,
                    quantity: number,
                });
                setValue(number);
            } else {
                await updateQuantity({
                    product: product?._id,
                    unit: item?.unit,
                    quantity: product?.allocations?.marketplace?.min_qty_g,
                });
                setValue(product?.allocations?.marketplace?.min_qty_g);
            }
        }
    };

    const price =
        item?.unit === "lb"
            ? product?.allocations?.marketplace?.price_per_lb
            : product?.allocations?.marketplace?.price_per_g;
    return (
        <View
            style={{
                padding: 20,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.light500,
                marginBottom: index === len - 1 ? 4 : 20,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    source={
                        product?.images[0] ? { uri: product?.images[0] } : thumb
                    }
                    alt=""
                    style={{
                        width: "30%",
                        height: 90,
                        borderRadius: 5,
                        marginRight: 10,
                        // borderWidth: 1,
                        borderColor: "green",
                    }}
                />
                <View
                    style={{
                        borderColor: "blue",
                        width: "65%",
                        // borderWidth: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            marginBottom: 4,
                        }}
                    >
                        {product?.title}
                    </Text>
                    <HStack space={2} mb={1}>
                        <VStack space={1}>
                            <Text>THC: {product?.specifications?.thc}%</Text>
                            <Text>
                                Price/lb:{" "}
                                {
                                    product?.allocations?.marketplace
                                        ?.price_per_lb
                                }
                                $
                            </Text>
                        </VStack>
                        <VStack space={1}>
                            <Text>
                                Strain: {product?.specifications?.strain}
                            </Text>
                            <Text>
                                Price/lb:{" "}
                                {product?.allocations?.marketplace?.price_per_g}
                                $
                            </Text>
                        </VStack>
                    </HStack>
                    <Text>
                        Cultivation: {product?.specifications?.cultivation_type}
                    </Text>
                </View>
            </View>
            <HStack mt={4}>
                <Text>
                    ({item?.quantity}
                    {item?.unit} x {price}):{" "}
                </Text>
                <Text>${item?.quantity * price}</Text>
            </HStack>
            <HStack
                mt={4}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <HStack space={1} alignItems={"center"}>
                    <Text>Unit: </Text>
                    <Pressable
                        disabled={
                            updateUnitGReq?.isLoading ||
                            updateUnitLbReq?.isLoading
                        }
                        onPress={async () => {
                            console.log("G clicked");
                            if (item?.unit !== "g") {
                                if (
                                    product?.allocations?.marketplace
                                        ?.min_qty_g > item?.quantity
                                ) {
                                    await updateUnitG({
                                        ...item,
                                        product: product?._id,
                                        unit: "g",
                                        quantity:
                                            product?.allocations?.marketplace
                                                ?.min_qty_g,
                                    });
                                } else {
                                    await updateUnitG({
                                        ...item,
                                        product: product?._id,
                                        unit: "g",
                                    });
                                }
                            }
                            console.log(item);
                        }}
                    >
                        <Text
                            style={
                                item?.unit === "g"
                                    ? styles.selectedUnit
                                    : styles.unit
                            }
                        >
                            g
                        </Text>
                    </Pressable>
                    <Pressable
                        disabled={
                            updateUnitGReq?.isLoading ||
                            updateUnitLbReq?.isLoading
                        }
                        onPress={async () => {
                            console.log("lb clicked");
                            if (item?.unit !== "lb") {
                                if (
                                    product?.allocations?.marketplace
                                        ?.min_qty_lb > item?.quantity
                                ) {
                                    const res = await updateUnitLb({
                                        ...item,
                                        product: product?._id,
                                        unit: "lb",
                                        quantity:
                                            product?.allocations?.marketplace
                                                ?.min_qty_lb,
                                    });
                                    console.log(res);
                                } else {
                                    const res = await updateUnitLb({
                                        ...item,
                                        product: product?._id,
                                        unit: "lb",
                                    });
                                    console.log(res);
                                }
                            }
                            console.log(item);
                        }}
                    >
                        <Text
                            style={
                                item?.unit === "lb"
                                    ? styles.selectedUnit
                                    : styles.unit
                            }
                        >
                            lb
                        </Text>
                    </Pressable>
                </HStack>
                <HStack space={1} alignItems={"center"}>
                    <IconButton
                        onPress={async () => {
                            console.log("decrement clicked");
                            if (
                                item?.unit === "lb" &&
                                item?.quantity >
                                    product?.allocations?.marketplace
                                        ?.min_qty_lb
                            ) {
                                await decrement({
                                    product: product?._id,
                                    unit: item?.unit,
                                    quantity: item?.quantity - 1,
                                });
                            }
                            if (
                                item?.unit === "g" &&
                                item?.quantity >
                                    product?.allocations?.marketplace?.min_qty_g
                            ) {
                                await decrement({
                                    product: product?._id,
                                    unit: item?.unit,
                                    quantity: item?.quantity - 1,
                                });
                            }
                        }}
                        colorScheme={"primary"}
                        variant={"outline"}
                        icon={<Icon as={AntDesign} name="minus" />}
                        size={5}
                        rounded={"full"}
                        disabled={decrementReq?.isLoading}
                    />
                    <Input
                        onChangeText={(e) => setValue(e)}
                        onBlur={handleChange}
                        value={`${value}`}
                        p={0}
                        textAlign={"center"}
                        w={8}
                        isReadOnly={updateQuantityReq?.isLoading}
                    />
                    <IconButton
                        onPress={async () => {
                            console.log("increment clicked");
                            if (
                                product?.variants[0]?.quantity > item?.quantity
                            ) {
                                const res = await increment({
                                    product: product?._id,
                                    unit: item?.unit,
                                    quantity: item?.quantity + 1,
                                });
                                console.log("increment res: ", res);
                            }
                        }}
                        disabled={incrementReq?.isLoading}
                        colorScheme={"primary"}
                        variant={"outline"}
                        icon={<Icon as={AntDesign} name="plus" />}
                        size={5}
                        rounded={"full"}
                    />
                </HStack>
                <IconButton
                    onPress={async () => {
                        console.log("delete clicked");
                        await removeProduct(product?._id);
                        console.log(
                            "Remove Error: ",
                            removeError,
                            "Removing: ",
                            removing
                        );
                    }}
                    colorScheme={"danger"}
                    variant={"solid"}
                    icon={<Icon as={AntDesign} name="delete" />}
                    size={6}
                />
            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    unit: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: Colors.light500,
        borderRadius: 5,
    },
    selectedUnit: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderColor: Colors.light500,
        borderRadius: 5,
        backgroundColor: Colors.green500,
        color: "white",
    },
});

export default CartItem;
