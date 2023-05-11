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
    setDraftProductId,
    setFormData,
    setSummary,
} from "../../redux/slices/inventory.slice";
import { useCreateProductsMutation } from "../../ApiServices/inventory.service";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

const AddProductSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),

    unit: Yup.string().required("Required"),
    specifications: Yup.object({
        brand: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        strain: Yup.string().required("Required"),
        thc: Yup.string()
            .matches(/[-.0-9]+/, "Type a number")
            .min(1, "Too Short!")
            .max(2, "Too Long!")
            .required("Required"),
        cultivation_type: Yup.string().required("Required"),
        total_cannabinoids: Yup.string()
            .matches(/[-.0-9]+/, "Type a number")
            .min(1, "Too Short!")
            .max(2, "Too Long!")
            .required("Required"),
        terpenes: Yup.string()
            .matches(/[-.0-9]+/, "Type a number")
            .min(1, "Too Short!")
            .max(2, "Too Long!")
            .required("Required"),
    }),
    batch: Yup.object({
        size: Yup.string()
            .matches(/[-.0-9]+/, "Type a number")
            .min(1, "Too Short!")
            .max(15, "Too Long!")
            .required("Required"),
        number: Yup.string()
            .matches(/[-.0-9]+/, "Type a number")
            .min(1, "Too Short!")
            .max(15, "Too Long!")
            .required("Required"),
    }),
    variants: Yup.object({
        unit: Yup.string().required("Required"),
        quantity: Yup.string()
            .matches(/[-.0-9]+/, "Type a number")
            .min(1, "Too Short!")
            .max(15, "Too Long!")
            .required("Required"),
    }),
});

const FormikProductForm = ({ product }) => {
    const navigation = useNavigation();
    const { data: formData, draftProductId } = useSelector(formSelector);
    // const {
    //     handleSubmit,
    //     control,
    //     getValues,
    //     setValue,
    //     reset,
    //     formState: { errors, isValid },
    // } = useForm({
    //     mode: "onChange",
    //     defaultValues: product && {
    //         ...product,
    //         variants: {
    //             unit: product?.variants && product?.variants[0]?.unit,
    //             quantity: product?.variants && product?.variants[0]?.quantity,
    //         },
    //     },
    // });
    const [createProduct, { isLoading, data }] = useCreateProductsMutation();

    const dispatch = useDispatch();
    // console.log(getValues());
    // useEffect(() => { console.log(getValues()); }, [])

    //setting summary unit and total quantity
    // useEffect(() => {
    //     // console.log("default values", getValues());
    //     const unit = getValues("variants")?.unit;
    //     const quantity = getValues("variants")?.quantity;
    //     if (unit && quantity) {
    //         // console.log(unit, quantity);
    //         const summaryData = {
    //             totalQuantity: quantity,
    //             unit,
    //             remaining: quantity,
    //         };
    //         const setData = setTimeout(() => dispatch(setSummary(summaryData)), 1000);
    //         // console.log(summaryData);
    //         return () => clearTimeout(setData);
    //     }
    // }, [dispatch, getValues()?.variants?.quantity, getValues()?.variants?.unit]);

    const addToDraftHandler = async (data) => {
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
        <Formik
            initialValues={{
                title: null,
                category: null,
                specifications: {
                    brand: null,
                    strain: null,
                    thc: null,
                    cultivation_type: null,
                    total_cannabinoids: null,
                    terpenes: null,
                },
                batch: { size: null, number: null },
                variants: { unit: null, quantity: null },
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={AddProductSchema}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                setFieldValue,
                errors,
                setFieldTouched,
                touched,
            }) => (
                <View>
                    <InputField
                        error={touched?.title && errors?.title}
                        required={true}
                        label="Product Name "
                        placeholder={"Please enter product name"}
                        inputConfig={{
                            // defaultValue: product?.title,
                            onBlur: () => {
                                setFieldTouched("title");
                                dispatch(
                                    setFormData({
                                        title: values?.title,
                                    })
                                );
                            },
                            onChangeText: handleChange("title"),
                            value: values.title,
                        }}
                    />
                    <SelectOptions
                        error={touched?.category && errors?.category}
                        label="Category"
                        options={["flower", "trim", "biomas", "oil"]}
                        // initialValue={product?.specifications?.cultivation_type}
                        setSelected={(value) => {
                            setFieldValue("category", value);
                            setFieldTouched("category", true);
                            console.log(errors);
                            console.log(touched);
                            dispatch(
                                setFormData({
                                    category: value,
                                })
                            );
                        }}
                    />

                    <InputField
                        required={true}
                        label="Brand "
                        placeholder={"Please enter brand product name"}
                        error={touched?.specifications?.brand && errors?.specifications?.brand}
                        inputConfig={{
                            onBlur: () => {
                                setFieldTouched("specifications.brand");
                                dispatch(
                                    setFormData({
                                        specifications: { brand: values?.specifications?.brand },
                                    })
                                );
                            },
                            onChangeText: handleChange("specifications.brand"),
                            value: values.specifications?.brand,
                        }}
                    />

                    <SelectOptions
                        label="Strain"
                        options={["Indica", "Sativa", "Hybrid"]}
                        error={touched?.specifications?.strain && errors?.specifications?.strain}
                        setSelected={(value) => {
                            setFieldValue("specifications.strain", value);
                            setFieldTouched("specifications.strain", true);
                            console.log(errors?.specifications);
                            dispatch(
                                setFormData({
                                    specifications: { strain: value },
                                })
                            );
                        }}
                    />

                    <InputField
                        required={true}
                        label="THC "
                        placeholder={"thc level"}
                        error={touched?.specifications?.thc && errors?.specifications?.thc}
                        inputConfig={{
                            onBlur: () => {
                                setFieldTouched("specifications.thc");
                                dispatch(
                                    setFormData({
                                        specifications: { thc: values?.specifications?.thc },
                                    })
                                );
                            },
                            onChangeText: handleChange("specifications.thc"),
                            value: values.specifications?.thc,
                        }}
                    />

                    <SelectOptions
                        error={
                            touched?.specifications?.cultivation_type &&
                            errors?.specifications?.cultivation_type
                        }
                        label="Cultivation Type"
                        options={["Indoor", "Outdoor"]}
                        // initialValue={product?.specifications?.cultivation_type}
                        setSelected={(value) => {
                            setFieldValue("specifications.cultivation_type", value);
                            setFieldTouched("specifications.cultivation_type", true);
                            dispatch(
                                setFormData({
                                    specifications: { cultivation_type: value },
                                })
                            );
                        }}
                    />

                    <InputField
                        label="Total Cannabinoids"
                        required={true}
                        placeholder={"Enter cannabinoids"}
                        error={
                            touched?.specifications?.total_cannabinoids &&
                            errors?.specifications?.total_cannabinoids
                        }
                        inputConfig={{
                            // defaultValue: product?.specifications?.total_cannabinoids,
                            onBlur: () => {
                                setFieldTouched("specifications.total_cannabinoids");
                                dispatch(
                                    setFormData({
                                        specifications: {
                                            total_cannabinoids:
                                                values?.specifications?.total_cannabinoids,
                                        },
                                    })
                                );
                            },
                            onChangeText: handleChange("specifications.total_cannabinoids"),
                            keyboardType: "numeric",
                            value: values?.specifications?.total_cannabinoids,
                        }}
                    />

                    <InputField
                        label="Terpenes"
                        required={true}
                        placeholder={"Enter terpenes"}
                        error={
                            touched?.specifications?.terpenes && errors?.specifications?.terpenes
                        }
                        inputConfig={{
                            // defaultValue: product?.specifications?.terpenes,
                            onBlur: () => {
                                setFieldTouched("specifications.terpenes");
                                dispatch(
                                    setFormData({
                                        specifications: {
                                            terpenes: values?.specifications?.terpenes,
                                        },
                                    })
                                );
                            },
                            onChangeText: handleChange("specifications.terpenes"),
                            value: values?.specifications?.terpenes,
                            keyboardType: "numeric",
                        }}
                    />
                    <InputField
                        label="Batch Size"
                        required={true}
                        placeholder={"Enter batch size"}
                        error={touched?.batch?.size && errors?.batch?.size}
                        inputConfig={{
                            // defaultValue: product?.batch?.size,
                            onBlur: () => {
                                setFieldTouched("batch.size");
                                dispatch(
                                    setFormData({
                                        batch: { size: values?.batch?.size },
                                    })
                                );
                            },
                            onChangeText: handleChange("batch.size"),
                            value: values?.batch?.size,
                            keyboardType: "numeric",
                        }}
                    />
                    <InputField
                        label="Batch Number"
                        required={true}
                        placeholder={"Enter batch number"}
                        error={touched?.batch?.number && errors?.batch?.number}
                        inputConfig={{
                            // defaultValue: product?.batch?.number,
                            onBlur: () => {
                                setFieldTouched("batch.number");
                                dispatch(
                                    setFormData({
                                        batch: { number: values?.batch?.number },
                                    })
                                );
                            },
                            onChangeText: handleChange("batch.number"),
                            value: values?.batch?.number,
                            keyboardType: "numeric",
                        }}
                    />
                    <SelectOptions
                        error={touched?.variants?.unit && errors?.variants?.unit}
                        label="Unit"
                        options={["lb", "g"]}
                        // initialValue={product?.specifications?.cultivation_type}
                        setSelected={(value) => {
                            setFieldValue("variants.unit", value);
                            setFieldTouched("variants.unit", true);
                            dispatch(
                                setFormData({
                                    variants: { unit: value },
                                })
                            );
                        }}
                    />

                    <InputField
                        label="Quantity"
                        required={true}
                        placeholder={"Enter quantity"}
                        error={touched?.variants?.quantity && errors?.variants?.quantity}
                        inputConfig={{
                            // defaultValue:
                            //     product?.variants &&
                            //     product?.variants[0]?.quantity?.toString(),
                            onBlur: () => {
                                setFieldTouched("variants.quantity");
                                dispatch(
                                    setFormData({
                                        variants: { quantity: values?.variants?.quantity },
                                    })
                                );
                            },
                            onChangeText: handleChange("variants.quantity"),
                            value: values?.variants?.quantity,
                            keyboardType: "numeric",
                        }}
                    />
                    {/* <Controller
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
                    /> */}

                    <MultiImagePicker
                        label="Product Image"
                        existingImages={product?.images}
                        setSelectedImages={(images) => {
                            setFieldValue("images", images);
                            dispatch(
                                setFormData({
                                    images: values?.images,
                                })
                            );
                        }}
                    />
                    {/* <Controller
                        control={control}
                        name="certificates"
                        // rules={{ required: "Product image is required" }}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <MultiImagePicker
                                label="Certificates or Lab Reports"
                                setSelectedImages={onChange}
                            />
                        )}
                    /> */}
                    <Button mb={6} onPress={handleSubmit}>
                        Next
                    </Button>
                </View>
            )}
        </Formik>
    );
};

export default FormikProductForm;

const styles = StyleSheet.create({});
