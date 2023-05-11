import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "native-base";
import MultiImagePicker from "../../ui/MultiImagePicker";
import InputField from "../../ui/InputField";
import SelectOptions from "../../ui/SelectOptions";
import { useDispatch, useSelector } from "react-redux";
import { formSelector, setDraftProductId, setSummary } from "../../redux/slices/inventory.slice";
import { useCreateProductsMutation } from "../../ApiServices/inventory.service";
import { testSetFormData } from "../../redux/slices/inventory.slice";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/style";

const TestProductForm = ({ product }) => {
    const navigation = useNavigation();
    const { data: formData, draftProductId } = useSelector(formSelector);
    const {
        handleSubmit,
        control,
        getValues,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: product && {
            ...product,
            variants: {
                unit: product?.variants && product?.variants[0]?.unit,
                quantity: product?.variants && product?.variants[0]?.quantity,
            },
        },
    });
    const [createProduct, { isLoading, data }] = useCreateProductsMutation();

    const dispatch = useDispatch();
    // console.log(getValues());
    // useEffect(() => { console.log(getValues()); }, [])

    //setting summary unit and total quantity
    useEffect(() => {
        // console.log("default values", getValues());
        const unit = getValues("variants")?.unit;
        const quantity = getValues("variants")?.quantity;
        if (unit && quantity) {
            // console.log(unit, quantity);
            const summaryData = {
                totalQuantity: quantity,
                unit,
                remaining: quantity,
            };
            const setData = setTimeout(() => dispatch(setSummary(summaryData)), 1000);
            // console.log(summaryData);
            return () => clearTimeout(setData);
        }
    }, [dispatch, getValues()?.variants?.quantity, getValues()?.variants?.unit]);

    const addToDraftHandler = async () => {
        // console.log("execution started");
        if (draftProductId || product?._id) {
            console.log(draftProductId || product?._id);
        } else {
            // console.log("test");
            const response = await createProduct(formData);
            if (response?.data?.product) {
                // console.log(response.data.product);
                dispatch(setDraftProductId(response?.data?.product?._id));
            }
        }
        // console.log("execution finished`");
        navigation.navigate("ProductAllocationScreen", product);
    };

    return (
        <View>
            <Controller
                control={control}
                name="title"
                rules={{ required: "product name is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputField
                        required={true}
                        label="Product Name "
                        placeholder={"Please enter product name"}
                        error={errors?.title?.message}
                        inputConfig={{
                            onBlur,
                            // value: formData?.title,
                            value,
                            defaultValue: product?.title,

                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        title: getValues("title"),
                                    })
                                );
                            },
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="category"
                rules={{ required: "category is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <SelectOptions
                        error={errors?.category?.message}
                        label="Category"
                        options={["flower", "trim", "biomas", "oil"]}
                        // setSelected={onChange}
                        initialValue={product?.category}
                        setSelected={(value) => {
                            onChange(value);
                            dispatch(
                                testSetFormData({
                                    category: getValues("category"),
                                })
                            );
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="specifications.brand"
                rules={{ required: "brand name is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputField
                        required={true}
                        label="Brand "
                        placeholder={"Please brand product name"}
                        error={errors?.specifications?.brand?.message}
                        inputConfig={{
                            onBlur,
                            // value: formData?.specifications?.brand,
                            defaultValue: product?.specifications?.brand,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        specifications: getValues("specifications"),
                                    })
                                );
                            },
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="specifications.strain"
                rules={{ required: "strain is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <SelectOptions
                        error={errors?.specifications?.strain?.message}
                        label="Strain"
                        options={["Indica", "Sativa", "Hybrid"]}
                        initialValue={product?.specifications?.strain}
                        setSelected={(value) => {
                            onChange(value);
                            dispatch(
                                testSetFormData({
                                    specifications: getValues("specifications"),
                                })
                            );
                        }}
                        name={"strain"}
                    />
                )}
            />
            <Controller
                control={control}
                name="specifications.thc"
                rules={{
                    required: "THC level is required",
                    pattern: {
                        value: /[-.0-9]+/,
                        message: "Invalid THC. THC must be a number",
                    },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                        label="THC level"
                        required={true}
                        placeholder={"THC"}
                        error={errors?.specifications?.thc?.message}
                        inputConfig={{
                            // value: formData?.specifications?.thc,
                            defaultValue: product?.specifications?.thc,
                            onBlur,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        specifications: getValues("specifications"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="specifications.cultivation_type"
                rules={{ required: "Cultivation type is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <SelectOptions
                        error={errors?.specifications?.cultivation_type?.message}
                        label="Cultivation Type"
                        options={["Indoor", "Outdoor"]}
                        initialValue={product?.specifications?.cultivation_type}
                        setSelected={(value) => {
                            onChange(value);
                            dispatch(
                                testSetFormData({
                                    specifications: getValues("specifications"),
                                })
                            );
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="specifications.total_cannabinoids"
                rules={{
                    required: "cannabinoids is required",
                    pattern: {
                        value: /[-.0-9]+/,
                        message: "Invalid cannabinoids. Cannabinoids must be a number",
                    },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                        label="Total Cannabinoids"
                        required={true}
                        placeholder={"Enter cannabinoids"}
                        error={errors?.specifications?.total_cannabinoids?.message}
                        inputConfig={{
                            // value: formData?.specifications?.total_cannabinoids,
                            defaultValue: product?.specifications?.total_cannabinoids,
                            onBlur,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        specifications: getValues("specifications"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="specifications.terpenes"
                rules={{
                    required: "terpenes is required",
                    pattern: {
                        value: /[-.0-9]+/,
                        message: "Invalid terpenes. Terpenes must be a number",
                    },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                        label="Terpenes"
                        required={true}
                        placeholder={"Enter terpenes"}
                        error={errors?.specifications?.terpenes?.message}
                        inputConfig={{
                            // value: formData?.specifications?.terpenes,
                            defaultValue: product?.specifications?.terpenes,
                            onBlur,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        specifications: getValues("specifications"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="batch.size"
                rules={{
                    required: "batch size is required",
                    pattern: {
                        value: /[-.0-9]+/,
                        message: "Invalid batch size. Batch size must be a number",
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <InputField
                        label="Batch Size"
                        required={true}
                        placeholder={"Enter batch size"}
                        error={errors?.batch?.size?.message}
                        inputConfig={{
                            // value: formData?.batch?.size,
                            defaultValue: product?.batch?.size,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        batch: getValues("batch"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="batch.number"
                rules={{
                    required: "batch number is required",
                    pattern: {
                        value: /[-.0-9]+/,
                        message: "Invalid batch number. Batch number must be a number",
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <InputField
                        label="Batch Number"
                        required={true}
                        placeholder={"Enter batch number"}
                        error={errors?.batch?.number?.message}
                        inputConfig={{
                            // value: formData?.batch?.number,
                            defaultValue: product?.batch?.number,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        batch: getValues("batch"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="variants.unit"
                rules={{ required: "unit is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <SelectOptions
                        error={errors?.variants?.unit?.message}
                        label="Unit"
                        options={["lb", "g"]}
                        initialValue={product?.variants && product?.variants[0]?.unit}
                        setSelected={(value) => {
                            onChange(value);
                            dispatch(
                                testSetFormData({
                                    variants: getValues("variants"),
                                })
                            );
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="variants.quantity"
                rules={{
                    required: "quantity is required",
                    pattern: {
                        value: /[-.0-9]+/,
                        message: "Invalid quantity. Quantity must be a number",
                    },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                        label="Quantity"
                        required={true}
                        placeholder={"Enter quantity"}
                        // error={errors?.variants?.quantity?.message}
                        inputConfig={{
                            defaultValue:
                                product?.variants && product?.variants[0]?.quantity?.toString(),
                            onBlur,
                            onChangeText: (value) => {
                                onChange(value);
                                dispatch(
                                    testSetFormData({
                                        variants: getValues("variants"),
                                    })
                                );
                            },
                            keyboardType: "numeric",
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputField
                        style={{ textAlignVertical: "top" }}
                        label="Description"
                        placeholder={"Write description"}
                        error={errors?.description?.message}
                        inputConfig={{
                            value,
                            onBlur,
                            onChangeText: (value) => onChange(value),
                            multiline: true,
                            numberOfLines: 3,
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="productImages"
                // rules={{ required: "Product image is required" }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <MultiImagePicker
                        label="Product Image"
                        existingImages={product?.images}
                        setSelectedImages={(images) => {
                            onChange(images);
                            dispatch(
                                testSetFormData({
                                    images: getValues("productImages"),
                                })
                            );
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="certificates"
                // rules={{ required: "Product image is required" }}
                render={({ field: { onChange, value } }) => (
                    <MultiImagePicker
                        label="Certificates or Lab Reports"
                        setSelectedImages={onChange}
                    />
                )}
            />
            <Button
                mb={6}
                isLoading={isLoading}
                onPress={handleSubmit(addToDraftHandler)}
                disabled={!isValid}
                _loading={{ opacity: 1 }}
                colorScheme={isValid ? "primary" : "muted"}
                // _disabled={{ backgroundColor: GlobalStyles.colors.primary50 }}
                _disabled={{ opacity: 0.4 }}
            >
                Next
            </Button>
        </View>
    );
};

export default TestProductForm;
