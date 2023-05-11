import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Modal,
    Pressable,
    KeyboardAvoidingView,
} from "react-native";
import { GlobalStyles } from "../../constants/style";
import { Button, Popover, useDisclose } from "native-base";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import AllocationSummary from "./AllocationSummary";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import moment from "moment/moment";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    addAuctionToFormData,
    formSelector,
    updateAuctionData,
} from "../../redux/slices/inventory.slice";

const AllocationModal = ({ showModal, setShowModal, product }) => {
    const {
        data: formData,
        summary: { remaining },
    } = useSelector(formSelector);
    const dispatch = useDispatch();
    const [durationUnit, setDurationUnit] = useState("Hours");
    const { isOpen, onClose, onOpen } = useDisclose();
    const [date, setDate] = useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    // console.log(durationUnit);
    const showDatepicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: "date",
            is24Hour: true,
        });
    };
    const {
        getValues,
        control,
        setValue,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            start_date: date,
            duration: { unit: durationUnit },
        },
        mode: "onChange",
    });
    useEffect(() => {
        setValue("start_date", date);
        setValue("duration.unit", durationUnit);
    }, [date, durationUnit]);
    const addAuctionHandler = (data) => {
        reset();
        const auction = { ...data }
        const prevAuction = product?.allocations?.auction;
        if (prevAuction && !formData?.allocations?.auction?.length) {
            dispatch(addAuctionToFormData([...prevAuction, auction]))
        } else {
            dispatch(addAuctionToFormData([auction]))
        }
        setShowModal(false);
        setDurationUnit("Hours");
    };
    return (
        <Modal
            animationType="fade"
            visible={showModal}
            transparent
            onRequestClose={() => setShowModal(false)}
        >
            <Pressable
                onPress={() => setShowModal(false)}
                style={styles.modalOuterContainer}
            >
                <Pressable style={styles.modalContent}>
                    <KeyboardAvoidingView
                        behavior="padding"
                        style={{ flex: 1, marginBottom: 8, paddingTop: 8 }}
                    >
                        <ScrollView
                            style={{
                                flex: 1,
                            }}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                        >
                            <AllocationSummary />
                            <View style={{ paddingBottom: 16 }}>
                                <Text style={styles.title}>
                                    Create New Auction
                                </Text>
                                <View style={styles.divider} />
                                <Controller
                                    control={control}
                                    name="quantity"
                                    rules={{
                                        max: {
                                            value: remaining,
                                            message: "Invalid total quantity",
                                        },
                                        required: "Total Quantity is required",
                                        pattern: {
                                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                                            message:
                                                "Invalid total quantity! Quantity must be a number.",
                                        },
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <InputField
                                            label="Total Quantity"
                                            placeholder={"Enter total quantity"}
                                            error={errors?.quantity?.message}
                                            required={true}
                                            inputConfig={{
                                                onBlur,
                                                // value,
                                                keyboardType: "numeric",
                                                onChangeText: (value) =>
                                                    onChange(value),
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="min_qty"
                                    rules={{
                                        required:
                                            "Minimum Quantity is required.",
                                        max: {
                                            value:
                                                parseInt(
                                                    getValues("quantity")
                                                ) || remaining,
                                            message: "Invalid minimum quantity",
                                        },
                                        pattern: {
                                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                                            message:
                                                "Invalid minimum quantity! Minimum Quantity must be a number.",
                                        },
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <InputField
                                            label="Minimum Quantity"
                                            placeholder={
                                                "Enter minimum quantity"
                                            }
                                            error={errors?.min_qty?.message}
                                            required={true}
                                            inputConfig={{
                                                onBlur,
                                                value,
                                                keyboardType: "numeric",
                                                onChangeText: (value) =>
                                                    onChange(value),
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="start_date"
                                    rules={{
                                        required: "start date is required",
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <InputField
                                            label="Start Date"
                                            placeholder={"Select a start date"}
                                            error={errors?.start_date?.message}
                                            inputConfig={{
                                                editable: false,
                                                // value: auction?.start_date ? moment(auction.start_date).format("L") : moment(date).format("L"),
                                                defaultValue:
                                                    moment(date).format("L"),
                                                onFocus: () => showDatepicker(),
                                                showSoftInputOnFocus: false,
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="reserve"
                                    rules={{
                                        required: "Reserve is required.",
                                        max: {
                                            value:
                                                parseInt(
                                                    getValues("quantity")
                                                ) || remaining,
                                            message: "Invalid reserve quantity",
                                        },
                                        pattern: {
                                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                                            message:
                                                "Invalid reserve quantity! Reserve Quantity must be a number.",
                                        },
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <InputField
                                            label="Reserve"
                                            placeholder={
                                                "Enter reserve quantity"
                                            }
                                            error={errors?.reserve?.message}
                                            required={true}
                                            inputConfig={{
                                                onBlur,
                                                value,
                                                keyboardType: "numeric",
                                                onChangeText: (value) => {
                                                    onChange(value);
                                                },
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="duration.value"
                                    rules={{
                                        required: "Duration is required.",

                                        pattern: {
                                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                                            message:
                                                "Invalid duration! Duration must be a number.",
                                        },
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <InputField
                                            label="Duration"
                                            placeholder={"Enter duration"}
                                            error={
                                                errors?.duration?.value?.message
                                            }
                                            required={true}
                                            inputConfig={{
                                                value,
                                                keyboardType: "numeric",
                                                onChangeText: (value) =>
                                                    onChange(value),
                                                InputRightElement: (
                                                    <View
                                                        style={[
                                                            styles.clicked,
                                                            {
                                                                borderLeftWidth: 1,
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                                backgroundColor:
                                                                    GlobalStyles
                                                                        .colors
                                                                        .light50,
                                                                borderColor:
                                                                    GlobalStyles
                                                                        .colors
                                                                        .gray100,
                                                            },
                                                        ]}
                                                    >
                                                        <Popover
                                                            isOpen={isOpen}
                                                            onClose={onClose}
                                                            trigger={(
                                                                triggerProps
                                                            ) => {
                                                                return (
                                                                    <Pressable
                                                                        {...triggerProps}
                                                                        onPress={
                                                                            onOpen
                                                                        }
                                                                        variant={
                                                                            "unstyled"
                                                                        }
                                                                        style={({
                                                                            pressed,
                                                                        }) => [
                                                                                pressed && {
                                                                                    opacity: 0.6,
                                                                                },
                                                                            ]}
                                                                    >
                                                                        <View
                                                                            style={{
                                                                                flexDirection:
                                                                                    "row",
                                                                                alignItems:
                                                                                    "center",
                                                                                // borderWidth: 1,
                                                                                // paddingHorizontal: 20,
                                                                            }}
                                                                        >
                                                                            <Text
                                                                                style={{
                                                                                    marginRight: 10,
                                                                                }}
                                                                            >
                                                                                {
                                                                                    durationUnit
                                                                                }
                                                                            </Text>
                                                                            <AntDesign
                                                                                name="down"
                                                                                size={
                                                                                    18
                                                                                }
                                                                                color="black"
                                                                            />
                                                                        </View>
                                                                    </Pressable>
                                                                );
                                                            }}
                                                        >
                                                            <Popover.Content
                                                                accessibilityLabel=""
                                                                w={20}
                                                            >
                                                                {/* <Popover.Arrow />
                                                        <Popover.CloseButton />
                                                        <Popover.Header>
                                                            Conversations
                                                        </Popover.Header> */}
                                                                <Popover.Body>
                                                                    <Pressable
                                                                        style={{
                                                                            paddingHorizontal: 5,
                                                                        }}
                                                                        onPress={() => {
                                                                            setDurationUnit(
                                                                                "Hours"
                                                                            );
                                                                            onClose();
                                                                        }}
                                                                    >
                                                                        <Text>
                                                                            Hours
                                                                        </Text>
                                                                    </Pressable>
                                                                    <View
                                                                        style={[
                                                                            styles.divider,
                                                                            {
                                                                                marginVertical: 5,
                                                                            },
                                                                        ]}
                                                                    />
                                                                    <Pressable
                                                                        style={{
                                                                            paddingHorizontal: 5,
                                                                        }}
                                                                        onPress={() => {
                                                                            setDurationUnit(
                                                                                "Days"
                                                                            );
                                                                            onClose();
                                                                        }}
                                                                    >
                                                                        <Text>
                                                                            Days
                                                                        </Text>
                                                                    </Pressable>
                                                                </Popover.Body>
                                                            </Popover.Content>
                                                        </Popover>
                                                    </View>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="buy_now"
                                    rules={{
                                        required: "Buy now is required.",
                                        max: {
                                            value:
                                                parseInt(
                                                    getValues("quantity")
                                                ) || remaining,
                                            message: "Invalid buy now quantity",
                                        },
                                        pattern: {
                                            value: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                                            message:
                                                "Invalid buy now quantity! Buy now Quantity must be a number.",
                                        },
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <InputField
                                            label="Buy Now"
                                            placeholder={
                                                "Enter buy now quantity"
                                            }
                                            error={errors?.buy_now?.message}
                                            required={true}
                                            inputConfig={{
                                                onBlur,
                                                value,
                                                keyboardType: "numeric",
                                                onChangeText: (value) =>
                                                    onChange(value),
                                            }}
                                        />
                                    )}
                                />

                                <Button
                                    disabled={!isValid}
                                    colorScheme={isValid ? "primary" : "light"}
                                    // mb={5}
                                    onPress={handleSubmit(addAuctionHandler)}
                                >
                                    Add Auction
                                </Button>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </Pressable>
            </Pressable>
            {/* <StatusBar backgroundColor={"rgba(0, 0, 0, 0.4)"} /> */}
        </Modal>
    );
};

export default AllocationModal;

const styles = StyleSheet.create({
    modalOuterContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width - 40,
        height: Dimensions.get("screen").height - 200,
        borderRadius: 8,
        paddingHorizontal: 20,
    },
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        borderBottomColor: GlobalStyles.colors.gray200,
        marginVertical: 16,
    },
    clicked: {
        height: "100%",
        flexDirection: "row",
        width: "35%",
    },
});
