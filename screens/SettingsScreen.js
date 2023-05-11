import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { TextInput } from "react-native";
import InputField from "../ui/InputField";
import { Button } from "native-base";
import SelectOptions from "../ui/SelectOptions";
import { onChange } from "react-native-reanimated";
import { set } from "react-hook-form";
import FormikProductForm from "../components/AddProduct/FormikProductForm";
const SettingsScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            {/* <Formik initialValues={{ email: "" }} onSubmit={(values) => console.log(values)}>
                {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                    <View>
                        <InputField
                            placeholder={"Email"}
                            inputConfig={{
                                onBlur: handleBlur("email"),
                                onChangeText: handleChange("email"),
                                value: values.email,
                            }}
                        />
                        <SelectOptions
                            label="Category"
                            options={["flower", "trim", "biomas", "oil"]}
                            setSelected={(value) => {
                                setFieldValue("category", value);
                            }}
                        />

                        <Button onPress={handleSubmit}>Submit</Button>
                    </View>
                )}
            </Formik> */}
            <FormikProductForm />
        </ScrollView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginHorizontal: 20,
        // borderWidth: 1,
    },
    text: {
        fontSize: 24,
    },
});
