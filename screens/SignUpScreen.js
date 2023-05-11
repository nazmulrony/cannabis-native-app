import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../constants/style";
import { licensedUsers, unlicensedUsers } from "../dummyData";
import RadioButtons from "../ui/RadioButtons";
import CardRadioButtons from "../ui/CardRadioButtons";
import PrimaryButton from "../ui/PrimaryButton";
import TextButton from "../ui/TextButton";
import { Box, Button, Image, ScrollView, Text } from "native-base";

const SignUpScreen = ({ navigation }) => {
    const [licenseType, setLicenseType] = useState("licensed");
    const [userType, setUserType] = useState(null);

    const signUpHandler = () => {
        navigation.navigate("SignUpFormScreen", { userType: userType });
    };

    return (
        <Box style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.image}
                        alt=""
                    />
                </Box>
                <Text style={styles.title}>Sign Up To Cannabis Connecter</Text>
                <Box style={styles.radioButtonContainer}>
                    <RadioButtons
                        items={[
                            { value: "licensed", label: "Licensed Users" },
                            { value: "unlicensed", label: "Unlicensed Users" },
                        ]}
                        color={GlobalStyles.colors.primary500}
                        onPress={setLicenseType}
                        initial={licenseType}
                        direction="row"
                        gap={32}
                    />
                </Box>
                {licenseType === "licensed" ? (
                    <CardRadioButtons
                        items={licensedUsers}
                        onPress={setUserType}
                        initial={userType}
                    />
                ) : (
                    <CardRadioButtons
                        items={unlicensedUsers}
                        onPress={setUserType}
                        initial={userType}
                    />
                )}
                <Box style={styles.button}>
                    {/* <PrimaryButton onPress={signUpHandler}>
                        Continue
                    </PrimaryButton> */}
                    <Button
                        w={"full"}
                        onPress={signUpHandler}
                        background={"primary.400"}
                    >
                        Continue
                    </Button>
                </Box>
                <Box style={styles.sinInButtonContainer}>
                    <Text style={styles.signInText}>
                        Already have an account?
                    </Text>
                    <Button
                        onPress={() => navigation.navigate("SignInScreen")}
                        variant={"ghost"}
                        backgroundColor={"white"}
                    >
                        Sign in.
                    </Button>
                </Box>
            </ScrollView>
        </Box>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        // marginTop: 32,
        paddingHorizontal: 20,
        paddingVertical: 32,
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    image: {
        height: 107,
        width: 143,
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "500",
        marginVertical: 16,
    },
    radioButtonContainer: {
        alignItems: "center",
    },
    button: {
        alignItems: "center",
    },
    signInText: {
        alignItems: "center",
        color: GlobalStyles.colors.gray300,
    },
    sinInButtonContainer: {
        marginVertical: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50,
    },
});
