import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Live from "../components/Auction/MyAuctions/Live";
import UpComing from "../components/Auction/MyAuctions/UpComing";
import Archived from "../components/Auction/MyAuctions/Archived";
import Colors from "../constants/Colors";
import { Skeleton } from "native-base";

const Tab = createMaterialTopTabNavigator();

const MyAuctionTopTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Live"
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarGap: 0,
                    tabBarStyle: {
                        elevation: 0.5,
                    },
                    tabBarItemStyle: {
                        // borderWidth: 1,
                        paddingVertical: 0,
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: "auto",
                        // marginRight: 20,
                        // position: "relative",
                    },
                    tabBarActiveTintColor: Colors.green500,
                    tabBarIndicatorStyle: { backgroundColor: Colors.green500 },
                    tabBarInactiveTintColor: Colors.dark300,
                    tabBarLabelStyle: {
                        fontWeight: 600,
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        position: "relative",
                    },
                    tabBarScrollEnabled: true,
                    tabBarBadge: () => (
                        <>
                            {route.name === "Live" ? (
                                <View
                                    style={{
                                        position: "absolute",
                                        display: navigation.isFocused()
                                            ? "flex"
                                            : "none",
                                        top: 15,
                                        left: -25,
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: 10,
                                        backgroundColor: navigation.isFocused()
                                            ? Colors.green500
                                            : Colors.dark300,
                                        borderRadius: 100,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {route.name === "Live" && (
                                        <Text
                                            style={{
                                                color: "white",
                                            }}
                                        >
                                            3
                                        </Text>
                                    )}
                                </View>
                            ) : (
                                <></>
                            )}
                        </>
                    ),
                };
            }}
        >
            <Tab.Screen
                name="Live"
                component={Live}
                options={({ route, navigation }) => {
                    return {
                        headerShown: false,
                        tabBarBadge: () => (
                            <View
                                style={{
                                    position: "absolute",
                                    display: navigation.isFocused()
                                        ? "flex"
                                        : "none",
                                    top: 15,
                                    left: -25,
                                    width: 20,
                                    height: 20,
                                    marginRight: 10,
                                    marginLeft: 5,
                                    backgroundColor: Colors.green100,
                                    borderRadius: 100,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {/* <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 100,
                                        backgroundColor: Colors.green500,
                                    }}
                                /> */}
                                <Skeleton
                                    rounded={"full"}
                                    width={3}
                                    height={3}
                                    startColor={Colors.green500}
                                    endColor={Colors.green100}
                                />
                            </View>
                        ),
                    };
                }}
            />
            <Tab.Screen
                name="Upcoming"
                component={UpComing}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Archived"
                component={Archived}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default MyAuctionTopTabs;
