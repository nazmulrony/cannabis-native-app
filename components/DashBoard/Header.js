import { View, Text, StyleSheet, Image, Pressable, StatusBar, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/slices/auth.slice";
import { Box, Button, Popover } from "native-base";
import Badge from "../../ui/Badge";
import { useGetCartQuery } from "../../ApiServices/cart.service";

const Header = () => {
    const navigation = useNavigation();
    const { user } = useSelector(authSelector) || {};
    const { data, isLoading } = useGetCartQuery(null, {
        refetchOnMountOrArgChange: true,
        // pollingInterval: 500,
    });
    const len = data?.product_list.length || 0;
    // console.log(typeof len);

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    {user?.user?.profile_pic ? (
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${user?.user?.profile_pic}`,
                            }}
                        />
                    ) : (
                        <Image
                            style={[styles.image, { width: 50, height: 50 }]}
                            source={require("../../assets/avatar.png")}
                        />
                    )}
                </Pressable>
                <View>
                    <Text style={styles.greetings}>Welcome!</Text>
                    <Text>
                        {user?.user?.first_name} {user?.user?.last_name}
                    </Text>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <Pressable
                    onPress={() => navigation.navigate("CartScreen")}
                    style={[({ pressed }) => pressed && { opacity: 0.6 }, { position: "relative" }]}
                >
                    {/* {len && (
                        <Badge style={{ backgroundColor: Colors.green500 }}>
                            2
                        </Badge>
                    )} */}
                    {len > 0 && <Badge>{len}</Badge>}
                    <AntDesign
                        name="shoppingcart"
                        size={24}
                        color={Colors.dark400}
                        style={{ marginRight: 14 }}
                    />
                </Pressable>
                <Popover
                    trigger={(triggerProps) => {
                        return (
                            <Pressable
                                {...triggerProps}
                                variant={"unstyled"}
                                style={({ pressed }) => pressed && { opacity: 0.6 }}
                            >
                                <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={24}
                                    color={Colors.dark400}
                                    style={{ marginRight: 12 }}
                                />
                            </Pressable>
                        );
                    }}
                >
                    <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                        <Popover.Arrow />
                        <Popover.CloseButton />
                        <Popover.Header>Conversations</Popover.Header>
                        <Popover.Body>No new conversations.</Popover.Body>
                    </Popover.Content>
                </Popover>
                <Pressable
                    style={({ pressed }) => pressed && { opacity: 0.6 }}
                    onPress={() => navigation.navigate("NotificationsScreen")}
                >
                    <Ionicons name="ios-notifications-outline" size={24} color={Colors.dark400} />
                </Pressable>
                {/* <Popover
                    trigger={(triggerProps) => {
                        return (
                            <Pressable
                                style={({ pressed }) =>
                                    pressed && { opacity: 0.6 }
                                }
                                {...triggerProps}
                                variant={"unstyled"}
                            >
                                <Ionicons
                                    name="ios-notifications-outline"
                                    size={24}
                                    color={Colors.dark400}
                                />
                            </Pressable>
                        );
                    }}
                >
                    <Popover.Content
                        accessibilityLabel="Delete Customerd"
                        w="56"
                    >
                        <Popover.Arrow />
                        <Popover.CloseButton />
                        <Popover.Header>Notifications</Popover.Header>
                        <Popover.Body>No new notifications.</Popover.Body>
                    </Popover.Content>
                </Popover> */}
                {/* <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={24}
                    color={Colors.dark400}
                    style={{ marginRight: 24 }}
                /> */}
                {/* <Ionicons
                    name="ios-notifications-outline"
                    size={24}
                    color={Colors.dark400}
                /> */}
            </View>
            <StatusBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 17,
        flex: 1,
        paddingHorizontal: 20,
    },
    profileContainer: {
        borderColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    iconsContainer: {
        borderColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "white",
        marginRight: 6,
    },
    greetings: {
        color: Colors.dark400,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
    },
    name: {
        color: Colors.dark600,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
    },
});

export default Header;
