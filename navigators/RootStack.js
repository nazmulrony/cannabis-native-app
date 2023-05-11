import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "./LoginStack";
import StackNavigator from "./StackNavigator";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/slices/auth.slice";
import NetInfo from "@react-native-community/netinfo";

const rStack = createStackNavigator();
const RootStack = () => {
    const { user } = useSelector(authSelector);
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        setCurrentUser(user);
        NetInfo.fetch().then((state) => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
        });
    }, [user]);
    return (
        <rStack.Navigator>
            <rStack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{ headerShown: false }}
            />
            <rStack.Screen
                name="StackNavigator"
                component={StackNavigator}
                options={{ headerShown: false }}
            />
            {/* {user && (
                <rStack.Screen
                    name="StackNavigator"
                    component={StackNavigator}
                    options={{ headerShown: false }}
                />
            )} */}
        </rStack.Navigator>
    );
};

export default RootStack;
