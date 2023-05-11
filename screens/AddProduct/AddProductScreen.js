import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import InputField from "../../ui/InputField";
import SelectOptions from "../../ui/SelectOptions";
import { Controller, useForm } from "react-hook-form";
import { Button } from "native-base";
import ImagePickerButton from "../../ui/ImagePickerButton";
import MultiImagePicker from "../../ui/MultiImagePicker";
import AddProductSteps from "../../components/AddProduct/AddProductSteps";
import ProductForm from "../../components/AddProduct/ProductForm";
import ProductAllocation from "../../components/AddProduct/ProductAllocation";
import TestProductForm from "../../components/AddProduct/TestProductForm";
import { GlobalStyles } from "../../constants/style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFormUpdate } from "../../redux/slices/inventory.slice";

const AddProductScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFormUpdate());
    }, [dispatch]);
    return (
        <View style={styles.screen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <AddProductSteps step={1} />
                <TestProductForm />
                {/* <Text style={styles.title}>Fill the Product Details</Text>
                <Text style={{ marginBottom: 16 }}>
                    Fill up these product information
                </Text> */}
                {/* <Controller
                    control={control}
                    name="productName"
                    rules={{ required: "product name is required" }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            required={true}
                            label="Product Name "
                            placeholder={"Please enter product name"}
                            error={errors?.productName?.message}
                            inputConfig={{
                                onBlur,
                                value,
                                onChangeText: (value) => onChange(value),
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="category"
                    rules={{ required: "category is required" }}
                    render={({ field: { onChange, onblur, value } }) => (
                        <SelectOptions
                            error={errors?.category?.message}
                            label="Category"
                            options={["flower", "trim", "biomas", "oil"]}
                            setSelected={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="brand"
                    rules={{ required: "brand name is required" }}
                    render={({ field: { onChange, onblur, value } }) => (
                        <InputField
                            required={true}
                            label="Brand "
                            placeholder={"Please brand product name"}
                            error={errors?.brand?.message}
                            inputConfig={{
                                onblur,
                                value,
                                onChangeText: (value) => onChange(value),
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="strain"
                    rules={{ required: "strain is required" }}
                    render={({ field: { onChange, onblur, value } }) => (
                        <SelectOptions
                            error={errors?.strain?.message}
                            label="Strain"
                            options={["Indica", "Sativa", "Hybrid"]}
                            setSelected={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="THC"
                    rules={{
                        required: "THC level is required",
                        pattern: {
                            value: /[-.0-9]+/,
                            message: "Invalid THC. THC must be a number",
                        },
                    }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <InputField
                            label="THC level"
                            required={true}
                            placeholder={"THC"}
                            error={errors?.THC?.message}
                            inputConfig={{
                                value,
                                onblur,
                                onChangeText: (value) => onChange(value),
                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="cannabinoids"
                    rules={{
                        required: "cannabinoids is required",
                        pattern: {
                            value: /[-.0-9]+/,
                            message:
                                "Invalid cannabinoids. Cannabinoids must be a number",
                        },
                    }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <InputField
                            label="Total Cannabinoids"
                            required={true}
                            placeholder={"Enter cannabinoids"}
                            error={errors?.cannabinoids?.message}
                            inputConfig={{
                                value,
                                onblur,
                                onChangeText: (value) => onChange(value),
                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="terpenes"
                    rules={{
                        required: "terpenes is required",
                        pattern: {
                            value: /[-.0-9]+/,
                            message:
                                "Invalid terpenes. Terpenes must be a number",
                        },
                    }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <InputField
                            label="Terpenes"
                            required={true}
                            placeholder={"Enter terpenes"}
                            error={errors?.terpenes?.message}
                            inputConfig={{
                                value,
                                onblur,
                                onChangeText: (value) => onChange(value),
                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="batchSize"
                    rules={{
                        required: "batch size is required",
                        pattern: {
                            value: /[-.0-9]+/,
                            message:
                                "Invalid batch size. Batch size must be a number",
                        },
                    }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <InputField
                            label="Batch Size"
                            required={true}
                            placeholder={"Enter batch size"}
                            error={errors?.batchSize?.message}
                            inputConfig={{
                                value,
                                onblur,
                                onChangeText: (value) => onChange(value),
                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="batchNumber"
                    rules={{
                        required: "batch number is required",
                        pattern: {
                            value: /[-.0-9]+/,
                            message:
                                "Invalid batch number. Batch number must be a number",
                        },
                    }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <InputField
                            label="Batch Number"
                            required={true}
                            placeholder={"Enter batch number"}
                            error={errors?.batchNumber?.message}
                            inputConfig={{
                                value,
                                onblur,
                                onChangeText: (value) => onChange(value),
                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="unit"
                    rules={{ required: "unit is required" }}
                    render={({ field: { onChange, onblur, value } }) => (
                        <SelectOptions
                            error={errors?.unit?.message}
                            label="Unit"
                            options={["lb", "g"]}
                            setSelected={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="quantity"
                    rules={{
                        required: "quantity is required",
                        pattern: {
                            value: /[-.0-9]+/,
                            message:
                                "Invalid quantity. Quantity must be a number",
                        },
                    }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <InputField
                            label="Quantity"
                            required={true}
                            placeholder={"Enter quantity"}
                            error={errors?.quantity?.message}
                            inputConfig={{
                                value,
                                onblur,
                                onChangeText: (value) => onChange(value),
                                keyboardType: "numeric",
                            }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="productImages"
                    // rules={{ required: "Product image is required" }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <MultiImagePicker
                            label="Product Image"
                            setSelectedImages={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="certificates"
                    // rules={{ required: "Product image is required" }}
                    render={({ field: { onChange, value, onblur } }) => (
                        <MultiImagePicker
                            label="Certificates or Lab Reports"
                            setSelectedImages={onChange}
                        />
                    )}
                />
                <Button
                    mb={6}
                    onPress={handleSubmit(addProductHandler)}
                    // onPress={() =>
                    //     navigation.navigate("ProductAllocationScreen")
                    // }
                    disabled={!isValid}
                    colorScheme={isValid ? "primary" : "light"}
                >
                    Next
                </Button> */}
            </ScrollView>
        </View>
    );
};

export default AddProductScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,

        // paddingTop: 20,
        backgroundColor: "white",
        // borderTopWidth: 1,
        borderWidth: 0.5,
        borderColor: GlobalStyles.colors.gray100,
    },
    title: { fontSize: 18, fontWeight: "500" },
});
