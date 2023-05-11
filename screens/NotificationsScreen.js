import {
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Colors from "../constants/Colors";
import NotificationCards from "../components/Notifications/NotificationCards";
import { Image } from "react-native";
import { useToast } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
    useGetNotificationQuery,
    useReadAllNotificationMutation,
} from "../ApiServices/notification.service";

const NotificationsScreen = () => {
    const toast = useToast();
    const [toastIds, setToastIds] = useState([]);
    const { data, isLoading, isError } = useGetNotificationQuery(0, {
        pollingInterval: 3000,
    });
    const [readAllNotification] = useReadAllNotificationMutation();

    console.log(data);
    useEffect(() => {
        console.log("Opened");
        const ids = [];
        data?.notification.forEach((item) => {
            if (item.is_read === false) {
                ids.push(item._id);
            }
        });
        readAllNotification(ids);
    }, []);

    // const data = [
    //     {
    //         id: 1,
    //         image: require("../assets/icons/order.png"),
    //         text: "Your order is placed waiting for ",
    //         keyWord: "shipping",
    //         time: "new",
    //     },
    //     {
    //         id: 2,
    //         image: require("../assets/icons/order.png"),
    //         text: "Your order is placed waiting for ",
    //         keyWord: "shipping",
    //         time: "new",
    //     },
    //     {
    //         id: 3,
    //         image: require("../assets/icons/delivery.png"),
    //         text: "Delivery processing your order is being",
    //         keyWord: "shipped",
    //         time: "old",
    //     },
    //     {
    //         id: 4,
    //         image: require("../assets/icons/delivery.png"),
    //         text: "Delivery processing your order is being",
    //         keyWord: "shipped",
    //         time: "old",
    //     },
    //     {
    //         id: 5,
    //         image: require("../assets/icons/delivery.png"),
    //         text: "Delivery processing your order is being",
    //         keyWord: "shipped",
    //         time: "old",
    //     },
    //     {
    //         id: 6,
    //         image: require("../assets/icons/delivery.png"),
    //         text: "Delivery processing your order is being",
    //         keyWord: "shipped",
    //         time: "old",
    //     },
    // ];

    const handleRemove = (id) => {
        //setNotifications(notifications.filter((item) => item.id !== id));
        const toastId = toast.show({
            // title: "Filters pressed",
            placement: "top",
            render: () => {
                return (
                    <View
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 18,
                            backgroundColor: "white",
                            elevation: 10,
                            borderRadius: 6,
                            alignItems: "center",
                            // margin: 2,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // width: "80%",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginRight: 91,
                            }}
                        >
                            <AntDesign
                                name="checkcircle"
                                size={18}
                                color={Colors.green500}
                            />
                            <Text
                                style={{
                                    // backgroundColor: "black",
                                    color: Colors.green500,
                                    marginLeft: 16,
                                }}
                            >
                                Notification Deleted !
                            </Text>
                        </View>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // borderWidth: 1,
                                    // backgroundColor: "#F2F2F1",
                                    opacity: pressed ? 0.6 : 1, // Set the opacity based on the pressed state
                                },
                            ]}
                            onPress={() => {
                                toast.close(toastId);
                                setToastIds((prevIds) =>
                                    prevIds.filter(
                                        (prevId) => prevId !== toastId
                                    )
                                );
                            }}
                        >
                            <AntDesign name="close" size={20} color="black" />
                        </Pressable>
                    </View>
                );
            },
            duration: 5000,
        });
        setToastIds((prevIds) => [...prevIds, toastId]);
    };
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                {data?.notification?.filter((item) => item.is_read === false)
                    ?.length > 0 && <Text style={styles.title}>New</Text>}
                {data?.notification
                    ?.filter((item) => item.is_read === false)
                    .map((item, index) => (
                        <NotificationCards
                            key={index}
                            data={item}
                            handleRemove={handleRemove}
                            image={require("../assets/icons/order.png")}
                        />
                    ))}
                {data?.notification?.filter((item) => item.is_read === true)
                    ?.length > 0 && <Text style={styles.title}>Earlier</Text>}
                {data?.notification
                    ?.filter((item) => item.is_read === true)
                    .map((item, index) => (
                        <NotificationCards
                            key={index}
                            data={item}
                            handleRemove={handleRemove}
                            image={require("../assets/icons/delivery.png")}
                        />
                    ))}
                {data?.total_notifications === 0 && (
                    <View
                        style={{
                            width: Dimensions.get("window").width,
                            height: Dimensions.get("window").height - 150,
                            // borderWidth: 10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            style={{
                                width: 148,
                                height: 148,
                                // borderWidth: 1,
                                // backgroundColor: "green",
                            }}
                            source={require("../assets/icons/bell.jpg")}
                        />
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "500",
                                lineHeight: 24,
                                color: Colors.dark500,
                                marginTop: 24,
                                width: "50%",
                                textAlign: "center",
                            }}
                        >
                            You have no notification at this time
                        </Text>
                    </View>
                )}
                {/* <NotificationCards
                    data={{
                        id: 6,
                        text: "Delivery processing your order is being",
                        keyWord: "shipped",
                        time: "old",
                    }}
                    image={require("../assets/icons/delivery.png")}
                /> */}
            </ScrollView>
        </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 19.5,
        color: Colors.dark600,
        marginLeft: 20,
        marginBottom: 6,
        marginTop: 8,
    },
});
