import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../../constants/style";
import InputField from "../../ui/InputField";
import { Controller, get, useForm } from "react-hook-form";
import { HStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import {
    formSelector,
    setAllowPublish,
    setSummary,
    testSetFormData,
} from "../../redux/slices/inventory.slice";

const MarketplaceAllocation = ({ product }) => {
    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            allocations: {
                marketplace: { ...product?.allocations?.marketplace },
            },
        },
    });
    const {
        data: formData,
        summary: {
            totalQuantity,
            // totalMarketplaceQuantity,
            totalAuctionQuantity,
            remaining,
        },
    } = useSelector(formSelector);

    const totalMarketplaceQuantity =
        getValues("allocations")?.marketplace?.quantity || 0;
    const remainingQty =
        Number(totalQuantity) -
        (Number(totalMarketplaceQuantity) + Number(totalAuctionQuantity));
    // console.log(remainingQty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSummary({ totalMarketplaceQuantity }));

        if (remainingQty >= 0) {
            dispatch(setSummary({ remaining: remainingQty }));
            if (
                totalMarketplaceQuantity > 0 ||
                totalAuctionQuantity > 0 ||
                product?.allocations?.marketplace?.quantity > 0
            ) {
                dispatch(setAllowPublish(true));
            } else {
                dispatch(setAllowPublish(false));
            }
        } else {
            // console.log("zero remaining");
            dispatch(setSummary({ remaining: 0 }));
            dispatch(setAllowPublish(false));
        }
    }, [remainingQty, totalMarketplaceQuantity, totalAuctionQuantity]);
    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            <Text style={styles.title}>Marketplace</Text>
            <Controller
                control={control}
                name="allocations.marketplace.quantity"
                rules={{
                    max: {
                        value: totalQuantity - totalAuctionQuantity,
                        message: "Invalid quantity",
                    },
                    min: { value: 1, message: "Invalid quantity" },
                    pattern: {
                        value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                        message: "Invalid quantity! Quantity must be a number.",
                    },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                        action="dispatch"
                        label="Quantity"
                        placeholder={"quantity"}
                        error={
                            errors?.allocations?.marketplace?.quantity?.message
                        }
                        inputConfig={{
                            // value,
                            defaultValue:
                                product?.allocations?.marketplace?.quantity?.toString(),
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    setSummary({
                                        totalMarketplaceQuantity:
                                            getValues("allocations").marketplace
                                                .quantity || 0,
                                    })
                                );
                                dispatch(
                                    testSetFormData({
                                        allocations: getValues("allocations"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <View style={styles.divider} />
            <HStack justifyContent="space-between">
                <Controller
                    control={control}
                    name="allocations.marketplace.min_qty_lb"
                    rules={{
                        max: {
                            value: totalMarketplaceQuantity,
                            message: "Invalid quantity",
                        },
                        pattern: {
                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                            message: "Invalid quantity!",
                        },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <InputField
                            width={"46%"}
                            label="Min Quantity in lb"
                            placeholder={"min qty in lb"}
                            error={
                                errors?.allocations?.marketplace?.min_qty_lb
                                    ?.message
                            }
                            inputConfig={{
                                // value,
                                defaultValue:
                                    product?.allocations?.marketplace?.min_qty_lb?.toString(),
                                onChangeText: (value) => {
                                    onChange(value);
                                    dispatch(
                                        testSetFormData({
                                            allocations:
                                                getValues("allocations"),
                                        })
                                    );
                                },
                                InputRightElement: (
                                    <View style={styles.inputUnit}>
                                        <Text>lb</Text>
                                    </View>
                                ),

                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="allocations.marketplace.price_per_lb"
                    rules={{
                        pattern: {
                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                            message: "Invalid price",
                        },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <InputField
                            width={"46%"}
                            label="Price per lb"
                            placeholder={"price per lb"}
                            error={
                                errors?.allocations?.marketplace?.price_per_lb
                                    ?.message
                            }
                            inputConfig={{
                                // value,
                                defaultValue:
                                    product?.allocations?.marketplace?.price_per_lb?.toString(),
                                onChangeText: (value) => {
                                    onChange(value);
                                    dispatch(
                                        testSetFormData({
                                            allocations:
                                                getValues("allocations"),
                                        })
                                    );
                                },
                                InputRightElement: (
                                    <View style={styles.inputUnit}>
                                        <Text>$</Text>
                                    </View>
                                ),

                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
            </HStack>
            <HStack justifyContent={"space-between"}>
                <Controller
                    control={control}
                    name="allocations.marketplace.min_qty_g"
                    rules={{
                        max: {
                            value: totalMarketplaceQuantity,
                            message: "Invalid quantity",
                        },
                        pattern: {
                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                            message: "Invalid quantity!",
                        },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <InputField
                            width={"46%"}
                            label="Min Quantity in g"
                            placeholder={"min qty in g"}
                            error={
                                errors?.allocations?.marketplace?.min_qty_g
                                    ?.message
                            }
                            inputConfig={{
                                // value,
                                defaultValue:
                                    product?.allocations?.marketplace?.min_qty_g?.toString(),
                                onChangeText: (value) => {
                                    onChange(value);
                                    dispatch(
                                        testSetFormData({
                                            allocations:
                                                getValues("allocations"),
                                        })
                                    );
                                },
                                InputRightElement: (
                                    <View style={styles.inputUnit}>
                                        <Text>g</Text>
                                    </View>
                                ),

                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="allocations.marketplace.price_per_g"
                    rules={{
                        pattern: {
                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                            message: "Invalid price",
                        },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <InputField
                            width={"46%"}
                            label="Price per g"
                            placeholder={"price per g"}
                            error={
                                errors?.allocations?.marketplace?.price_per_g
                                    ?.message
                            }
                            inputConfig={{
                                // value,
                                defaultValue:
                                    product?.allocations?.marketplace?.price_per_g?.toString(),
                                onChangeText: (value) => {
                                    onChange(value);
                                    dispatch(
                                        testSetFormData({
                                            allocations:
                                                getValues("allocations"),
                                        })
                                    );
                                },
                                InputRightElement: (
                                    <View style={styles.inputUnit}>
                                        <Text>$</Text>
                                    </View>
                                ),

                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
            </HStack>
            <View style={styles.divider} />
        </View>
    );
};

export default MarketplaceAllocation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 20,
    },
    title: {
        marginVertical: 16,
        fontSize: 18,
        fontWeight: "500",
    },
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        borderBottomColor: GlobalStyles.colors.gray100,
        // marginVertical: 16,
        marginBottom: 16,
    },
    inputUnit: {
        borderLeftWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        backgroundColor: GlobalStyles.colors.light50,
        height: "100%",
        flexDirection: "row",
        width: 32,
        justifyContent: "center",
        alignItems: "center",
    },
});
