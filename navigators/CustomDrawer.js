import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { GlobalStyles } from "../constants/style";
import {
    Ionicons,
    FontAwesome,
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import TestDropDown from "./TestDropDown";
import {
    auctionScreens,
    ordersScreen,
    transportScreen,
    eventsScreens,
    jobScreens,
} from "../screenData";
import Logout from "./Drawer/Logout";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, logout } from "../redux/slices/auth.slice";
import CompanyModal from "../components/Drawer/CompanyModal";
import { Svg } from "react-native-svg";
import { Path } from "victory-native";

const CustomDrawer = (props) => {
    const [activeLabel, setActiveLabel] = useState(null);
    // const { user } = useSelector(state => state.auth)
    const { user } = useSelector(authSelector);
    // console.log(user);
    const dispatch = useDispatch();
    const { auctions, jobs, orders, transports, events, trackers } = user?.permissions || {};
    const [companyModalIsOpen, setCompanyModalIsOpen] = useState(false);
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    setCompanyModalIsOpen(!companyModalIsOpen);
                }}
                style={styles.userSection}
            >
                <View style={styles.profileImageContainer}>
                    {user?.user?.profile_pic ? (
                        <Image
                            style={styles.profileImage}
                            source={{
                                uri: `${user?.user?.profile_pic}`,
                            }}
                        />
                    ) : (
                        <Image
                            style={[styles.profileImage, { width: 50, height: 50 }]}
                            source={require("../assets/avatar.png")}
                        />
                    )}
                </View>
                <View style={{ width: "100%" }}>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                width: "76%",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <Text style={styles.userName}>
                                    {user?.user.first_name} {user?.user.last_name.slice(0, 7)}...
                                </Text>
                                <Text style={styles.userRole}>{user?.company?.business_name}</Text>
                            </View>
                            <AntDesign name="sync" size={18} color="black" />
                        </View>
                        <CompanyModal
                            companies={user?.company_list}
                            currentCompanyId={user?.company._id}
                            companyModalIsOpen={companyModalIsOpen}
                            setCompanyModalIsOpen={setCompanyModalIsOpen}
                        />
                    </View>
                </View>
            </Pressable>
            <DrawerContentScrollView {...props} style={{ borderWidth: 0, margin: 0, padding: 0 }}>
                <View style={styles.horizontalLine}></View>
                {auctions?.access && (
                    <TestDropDown
                        label={"Auction"}
                        screens={auctionScreens}
                        onPress={setActiveLabel}
                        // activeLabel={activeLabel}
                        icon={
                            <Svg
                                width={19}
                                height={19}
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M10.6667 16.6668V18.3334H0.666687V16.6668H10.6667ZM11.155 0.571777L17.6367 7.05344L16.4584 8.23344L15.575 7.93844L13.5109 10.0001L18.225 14.7143L17.0467 15.8926L12.3334 11.1784L10.33 13.1818L10.5659 14.1251L9.38669 15.3034L2.90502 8.82178L4.08419 7.64344L5.02585 7.87844L10.2709 2.63428L9.97669 1.75094L11.155 0.571777ZM11.7442 3.51844L5.85169 9.41011L8.79752 12.3568L14.69 6.46511L11.7442 3.51844Z"
                                    fill="black"
                                />
                            </Svg>
                        }
                    />
                )}
                {orders?.access && (
                    <TestDropDown
                        label={"Orders"}
                        screens={ordersScreen}
                        onPress={setActiveLabel}
                        // activeLabel={activeLabel}
                        icon={
                            <AntDesign
                                name="shoppingcart"
                                size={18}
                                color={
                                    // activeLabel === "Orders" ? "#4CAF50" : "black"
                                    "black"
                                }
                            />
                        }
                    />
                )}
                {transports?.access && (
                    <TestDropDown
                        label={"Transports"}
                        screens={transportScreen}
                        onPress={setActiveLabel}
                        // activeLabel={activeLabel}
                        icon={
                            <MaterialCommunityIcons
                                name="truck-fast-outline"
                                size={18}
                                color={
                                    // activeLabel === "Transports"
                                    //     ? "#4CAF50"
                                    //     : "black"
                                    "black"
                                }
                            />
                        }
                    />
                )}
                {events?.access && (
                    <TestDropDown
                        label={"Events"}
                        screens={eventsScreens}
                        onPress={setActiveLabel}
                        // activeLabel={activeLabel}
                        icon={
                            <MaterialCommunityIcons
                                name="calendar-range-outline"
                                size={18}
                                color={
                                    // activeLabel === "Events" ? "#4CAF50" : "black"
                                    "black"
                                }
                            />
                        }
                    />
                )}
                {jobs?.access && (
                    <TestDropDown
                        label={"Job"}
                        screens={jobScreens}
                        onPress={setActiveLabel}
                        // activeLabel={activeLabel}
                        icon={
                            <MaterialCommunityIcons
                                name="briefcase-variant-outline"
                                size={18}
                                color={
                                    // activeLabel === "Job" ? "#4CAF50" : "black"
                                    "black"
                                }
                            />
                        }
                    />
                )}
                {trackers?.access && (
                    <TestDropDown
                        label={"Tracker"}
                        screens={eventsScreens}
                        onPress={setActiveLabel}
                        // activeLabel={activeLabel}
                        icon={
                            <MaterialCommunityIcons
                                name="crosshairs-gps"
                                size={18}
                                color={
                                    // activeLabel === "Tracker" ? "#4CAF50" : "black"
                                    "black"
                                }
                            />
                        }
                    />
                )}

                <View style={styles.horizontalLine}></View>
                <Logout
                    onPress={() => {
                        dispatch(logout());
                        props.navigation.replace("LoginStack");
                        props.navigation.closeDrawer();
                    }}
                    label="Logout"
                    icon={<Ionicons name="ios-log-out-outline" size={18} color="black" />}
                />
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
    },
    userSection: {
        marginTop: 36,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    profileImageContainer: {
        marginRight: 8,
        height: 44,
        width: 44,
        borderRadius: 22,
        overflow: "hidden",
    },
    profileImage: {
        height: "100%",
        width: "100%",
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
    },
    userRole: {
        fontSize: 12,
        color: GlobalStyles.colors.gray300,
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.gray200,
        // marginBottom: -16,
        marginVertical: 16,
    },
});
