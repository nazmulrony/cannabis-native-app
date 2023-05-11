import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawer from "./CustomDrawer";
import Header from "../components/DashBoard/Header";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/slices/auth.slice";

const Drawer = createDrawerNavigator();
const DrawerNavigator = ({ navigation }) => {
    const { user } = useSelector(authSelector) || {};
    // console.log(navigation.getState());

    // useEffect(() => {
    //     // console.log(navigation.getCurrentRoute());
    //     console.log("Screen Stack changed");
    // }, [navigation?.getState()?.routes[1]?.name]);
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={({ navigation }) => ({
                headerLeft: () => <Header />,
                headerLeftContainerStyle: {
                    width: "100%",
                },
            })}
        >
            <Drawer.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{ title: "" }}
            />
        </Drawer.Navigator>
        //<BottomTabNavigator />
    );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
    profileImageContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: "hidden",
        marginLeft: 16,
    },
    pressed: {
        opacity: 0.7,
    },
    profileImage: {
        height: "100%",
        width: "100%",
    },
});
