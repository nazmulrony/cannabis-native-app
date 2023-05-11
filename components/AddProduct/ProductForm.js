import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "native-base";
import MultiImagePicker from "../../ui/MultiImagePicker";
import InputField from "../../ui/InputField";
import SelectOptions from "../../ui/SelectOptions";
import { useDispatch, useSelector } from "react-redux";
import {
    formSelector,
    setFormData,
    setSummary,
} from "../../redux/slices/inventory.slice";
import { useCreateProductsMutation } from "../../ApiServices/inventory.service";
import { useNavigation } from "@react-navigation/native";

const ProductForm = ({ setStep }) => {
    const navigation = useNavigation();
    const {
        handleSubmit,
        control,
        getValues,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });
    const [createProduct, { isLoading, data }] = useCreateProductsMutation();
    const form = useSelector(formSelector);
    // console.log(form);
    const unit = getValues("unit");
    const quantity = getValues("quantity");
    const dispatch = useDispatch();

    //setting summary unit and total quantity
    useEffect(() => {
        if (unit && quantity) {
            const summaryData = { totalQuantity: quantity, unit };
            dispatch(setSummary(summaryData));
        }
    }, [dispatch, unit, quantity]);

    const addToDraftHandler = (data) => {
        console.log("clicked");
        // dispatch(setFormData(data))
        // const product = {
        //     batch: {
        //         number: data?.batchSize,
        //         number: data?.batchNumber
        //     },
        //     category: data?.category,
        //     specifications: {
        //         brand: data?.brand,
        //         cultivation_type: data?.cultivationType,
        //         strain: data?.strain,
        //         terpenes: data?.terpenes,
        //         thc: data?.THC,
        //         total_cannabinoids: data?.cannabinoids,
        //     },
        //     title: data?.productName,
        //     variants: [{
        //         unit: data?.unit,
        //         quantity: data?.quantity
        //     }],
        //     images: data?.productImages?.length ? data?.productImages : [],
        // }
        // setStep(2)
        // createProduct(product);
        navigation.navigate("ProductAllocationScreen");
    };
    const printResult = (value) => {
        console.log(value);
    };
    return (
        <View>
            <Controller
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
                        // setSelected={onChange}
                        setSelected={(value) => {
                            onChange(value);
                            printResult(value);
                        }}
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
                        name={"strain"}
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
                name="cultivationType"
                rules={{ required: "Cultivation type is required" }}
                render={({ field: { onChange, onblur, value } }) => (
                    <SelectOptions
                        error={errors?.cultivationType?.message}
                        label="Cultivation Type"
                        options={["Indoor", "Outdoor"]}
                        setSelected={onChange}
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
                        message: "Invalid terpenes. Terpenes must be a number",
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
                        message: "Invalid quantity. Quantity must be a number",
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
                name="description"
                render={({ field: { onChange, value, onblur } }) => (
                    <InputField
                        label="Description"
                        placeholder={"Write description"}
                        error={errors?.description?.message}
                        inputConfig={{
                            value,
                            onblur,
                            onChangeText: (value) => onChange(value),
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
                onPress={handleSubmit(addToDraftHandler)}
                onCh
                // onPress={() =>
                //     navigation.navigate("ProductAllocationScreen")
                // }
                disabled={!isValid}
                colorScheme={isValid ? "primary" : "light"}
            >
                Next
            </Button>
        </View>
    );
};

export default ProductForm;

const styles = StyleSheet.create({});
