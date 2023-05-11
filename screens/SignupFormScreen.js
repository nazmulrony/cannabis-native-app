import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

// import Input from "../ui/Input";
import TextButton from "../ui/TextButton";
import PrimaryButton from "../ui/PrimaryButton";
import { GlobalStyles } from "../constants/style";
import {
    Box,
    FormControl,
    Input,
    Stack,
    ScrollView,
    Text,
    Button,
    Select,
    CheckIcon,
} from "native-base";
import InputField from "../ui/InputField";
import SelectOptions from "../ui/SelectOptions";

const SignupFormScreen = ({ navigation, route }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [service, setService] = useState("");
    const onPressHandler = () => {
        console.log("Button clicked");
        navigation.navigate("StackNavigator");
    };
    return (
        <Box style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <Text style={styles.title}>
                    Become a{" "}
                    {route.params?.userType ? route.params.userType : "Grower"}
                </Text>
                {/* <Input label={"First Name*"} inputConfig={{}} /> */}
                {/* <Input label={"Last Name*"} inputConfig={{}} />
                <Input label={"Business Name*"} inputConfig={{}} />
                <Input label={"Contact Email*"} inputConfig={{}} />
                <Input label={"Contact Number*"} inputConfig={{}} />
                <Input label={"DBA"} inputConfig={{}} />
                <Input label={"License Type*"} inputConfig={{}} />
                <Input label={"License Number*"} inputConfig={{}} />
                <Input label={"State"} inputConfig={{}} />
                <Input label={"City"} inputConfig={{}} />
                <Input label={"ZIP Code"} inputConfig={{}} />
                <Input label={"Website"} inputConfig={{}} /> */}
                <Controller
                    control={control}
                    name="firstName"
                    rules={{ required: "First Name is required" }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            label="First Name"
                            placeholder={"Enter first name"}
                            error={errors?.firstName?.message}
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
                    name="lastName"
                    rules={{ required: "Last Name is required" }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            label="Last Name"
                            placeholder={"Enter last name"}
                            error={errors?.lastName?.message}
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
                    name="email"
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid Email",
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputField
                            label="Email"
                            placeholder={"Enter email"}
                            error={errors?.email?.message}
                            inputConfig={{
                                onBlur,
                                value,
                                onChangeText: (value) => onChange(value),
                            }}
                        />
                    )}
                />
                <Box alignItems="center">
                    <Box w="100%">
                        <FormControl>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    First Name*
                                </FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    Last Name*
                                </FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    Business Name*
                                </FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    Contact Email*
                                </FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    Contact Number*
                                </FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>DBA</FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    License Type*
                                </FormControl.Label>
                                <Select
                                    animationType="fade"
                                    selectedValue={service}
                                    minWidth="200"
                                    accessibilityLabel="Choose Service"
                                    placeholder="Choose Service"
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="2" />,
                                    }}
                                    mt={1}
                                    onValueChange={(itemValue) =>
                                        setService(itemValue)
                                    }
                                >
                                    <Select.Item label="Grower" value="ux" />
                                    <Select.Item
                                        label="Processor"
                                        value="web"
                                    />
                                    <Select.Item
                                        label="Dispensary"
                                        value="cross"
                                    />
                                    <Select.Item
                                        label="Transporter"
                                        value="ui"
                                    />
                                </Select>
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>
                                    License Number*
                                </FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>State</FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>City</FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>ZIP Code</FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <Stack marginBottom={4}>
                                <FormControl.Label>Website</FormControl.Label>
                                <Input type="text" />
                            </Stack>
                            <SelectOptions label={"Select one.."} />
                        </FormControl>
                    </Box>
                </Box>
                <Box
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginVertical: 8,
                    }}
                >
                    <Box alignItems={"center"} flexDirection={"row"}>
                        <Text style={styles.termsText}>
                            By proceeding, I agree to Cannabis Connector
                        </Text>
                        {/* <TextButton style={{ fontSize: 12 }}>
                        Terms of Use
                    </TextButton> */}
                        <Button
                            _text={{
                                fontSize: 12,
                            }}
                            variant={"ghost"}
                            backgroundColor={"white"}
                        >
                            Terms of Use
                        </Button>
                    </Box>
                    <Box flexDirection={"row"} alignItems="center">
                        <Text style={styles.termsText}>
                            and acknowledge that I have read the
                        </Text>
                        {/* <TextButton style={{ fontSize: 12 }}>
                        Privacy Policy.
                    </TextButton> */}
                        <Button
                            variant={"ghost"}
                            backgroundColor={"white"}
                            _text={{
                                fontSize: 12,
                            }}
                        >
                            Privacy Policy.
                        </Button>
                    </Box>
                </Box>
                <Box style={styles.button}>
                    {/* <PrimaryButton onPress={onPressHandler}>
                        Create Account
                    </PrimaryButton> */}
                    <Button
                        onPress={handleSubmit(onPressHandler)}
                        background={"primary.400"}
                        w="full"
                    >
                        Sign Up
                    </Button>
                </Box>
            </ScrollView>
        </Box>
    );
};

export default SignupFormScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 18,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 16,
    },

    button: {
        alignItems: "center",
        marginVertical: 24,
        paddingBottom: 36,
    },
    termsText: {
        fontSize: 12,
        color: GlobalStyles.colors.gray300,
    },
});
