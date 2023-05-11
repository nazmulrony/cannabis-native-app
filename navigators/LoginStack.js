import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignupFormScreen from "../screens/SignupFormScreen";

const lStack = createStackNavigator();
const LoginStack = () => {
    return (
        <lStack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: "#ffffff" },
            }}
        >
            <lStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <lStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            <lStack.Screen
                name="SignUpFormScreen"
                component={SignupFormScreen}
                options={{ title: "" }}
            />
        </lStack.Navigator>
    );
};

export default LoginStack;
