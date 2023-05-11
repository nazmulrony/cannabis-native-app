import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import InventoryScreen from "../screens/InventoryScreen";
import MarketPlaceScreen from "../screens/MarketPlaceScreen";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addUser, authSelector } from "../redux/slices/auth.slice";
import { useVerifyCompanyQuery } from "../ApiServices/company.service";
import DashBoardScreen from "../screens/DashBoardScreen";
import { Line, Mask, Rect, Svg } from "react-native-svg";
import { Path } from "victory-native";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
    const { user } = useSelector(authSelector);
    const dispatch = useDispatch();
    const { dashboard, inventory, marketplace, settings } = user?.permissions || {};
    const { data, refetch } = useVerifyCompanyQuery(user?.company?._id, {
        skip: !user?.company?._id,
    });
    const [userRole, setUserRole] = useState(user?.company?.license_type);
    // useEffect(() => {
    //     refetch();
    //     // console.log("screen tab switched");
    //     if (data?.company) {
    //         dispatch(addUser(data));
    //     } else {
    //         // dispa
    //     }
    // }, [navigation?.getState()?.routes[0]?.state?.index]);
    // useEffect(() => {
    //     refetch();
    //     console.log("screen tab switched");
    // }, [
    //     navigation?.getState()?.routes[0]?.state?.index,
    //     navigation?.getState()?.routes[1]?.name,
    // ]);
    useEffect(() => {
        setUserRole(user?.company?.license_type);
    }, [user]);
    return (
        <BottomTab.Navigator
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarHideOnKeyboard: true,
                    // tabBarLabel: navigation.isFocused() ? route.name : "",
                    headerShown: false,
                    lazy: false,
                    tabBarStyle: {
                        height: 55,
                        //paddingVertical: 14,
                        //paddingTop: 14,
                        // paddingBottom: 12,
                        // marginBottom: 0,
                    },
                    tabBarIconStyle: {
                        // width: 20,
                        // height: 20,
                        // borderWidth: 1,
                        marginTop: 2,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        //lineHeight: 18,
                        fontWeight: "500",
                        marginBottom: 5,
                        // borderWidth: 1,
                    },
                    tabBarItemStyle: {
                        borderTopWidth: navigation.isFocused() ? 2 : 0,
                        borderTopColor: Colors.green500,
                    },
                    tabBarActiveTintColor: "#4CAF50",
                };
            }}
        >
            <BottomTab.Screen
                options={{
                    title: "Home",
                    tabBarIcon: ({ size, color, focused }) => {
                        // return <Ionicons name="home" size={size} color={color} />;
                        return (
                            <Svg
                                width={size}
                                height={size}
                                viewBox="0 0 24 24"
                                fill={focused ? color : "none"}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M10 18H14M16.1804 22H7.81965C5.5109 22 3.6393 20.214 3.6393 18.0108V13.133C3.6393 12.4248 3.34447 11.7456 2.81969 11.2448C1.60381 10.0845 1.76187 8.16205 3.15251 7.19692L9.54124 2.763C11.0071 1.74567 12.9929 1.74567 14.4588 2.763L20.8475 7.19691C22.2381 8.16205 22.3962 10.0845 21.1803 11.2448C20.6555 11.7456 20.3607 12.4248 20.3607 13.133V18.0108C20.3607 20.214 18.4891 22 16.1804 22Z"
                                    stroke={focused ? "white" : "#8D8D97"}
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                />
                            </Svg>
                        );
                    },
                }}
                name="DashboardScreen"
                component={DashBoardScreen}
            />
            <BottomTab.Screen
                options={{
                    title: "Inventory",
                    tabBarIcon: ({ size, color, focused }) => {
                        // return <MaterialIcons name="inventory" size={size} color={color} />;
                        return (
                            <Svg
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill={focused ? color : "none"}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Rect
                                    x={0.75}
                                    y={0.75}
                                    width={18.5}
                                    height={4.5}
                                    rx={0.75}
                                    fill={"white"}
                                    stroke={focused ? color : "#8D8D97"}
                                    strokeWidth={1.5}
                                />
                                <Path
                                    d="M2 6V18.5C2 19.0523 2.44772 19.5 3 19.5H17C17.5523 19.5 18 19.0523 18 18.5V6"
                                    stroke={focused ? color : "#8D8D97"}
                                    strokeWidth={1.5}
                                />
                                <Line
                                    x1={7}
                                    y1={10.25}
                                    x2={13}
                                    y2={10.25}
                                    stroke={focused ? "white" : "#8D8D97"}
                                    strokeWidth={1.5}
                                />
                            </Svg>
                        );
                    },
                }}
                name="InventoryScreen"
                component={InventoryScreen}
            />

            <BottomTab.Screen
                options={{
                    title: "Marketplace",
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <Svg
                                width={size}
                                height={size}
                                viewBox="0 0 24 24"
                                fill={focused ? color : "none"}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12"
                                    stroke={focused ? "white" : "#8D8D97"}
                                    strokeWidth={1.5}
                                />
                                <Path
                                    d="M16.7687 2H7.23122C5.41387 2 3.7796 3.24476 3.10466 5.14305L2.34667 7.27487C2.11723 7.92019 1.95862 8.61074 2.12598 9.27488C2.52232 10.8478 3.8082 12 5.3333 12C7.17424 12 8.66663 10.3211 8.66663 8.25C8.66663 10.3211 10.159 12 12 12C13.8409 12 15.3333 10.3211 15.3333 8.25C15.3333 10.3211 16.8257 12 18.6666 12C20.1917 12 21.4776 10.8478 21.8739 9.27488C22.0413 8.61074 21.8827 7.92019 21.6533 7.27487L20.8953 5.14305C20.2203 3.24475 18.5861 2 16.7687 2Z"
                                    stroke={focused ? "white" : "#8D8D97"}
                                    strokeWidth={1.5}
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M9 17C11.3561 18.3404 12.6476 18.3263 15 17"
                                    stroke={focused ? "white" : "#8D8D97"}
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        );
                    },
                }}
                name="MarketplaceScreen"
                component={MarketPlaceScreen}
            />
            {userRole === "grower" && (
                <BottomTab.Screen
                    options={{
                        tabBarIcon: ({ size, color, focused }) => {
                            return (
                                <Ionicons
                                    name={focused ? "settings" : "settings-outline"}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                    name="Settings"
                    component={SettingsScreen}
                />
            )}
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
