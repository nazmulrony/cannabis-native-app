import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, HStack, VStack } from "native-base";
import moment from "moment";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
// import { useDeleteOrderMutation } from "../../ApiServices/order.service";

const OrderCard = ({ order }) => {
    const navigation = useNavigation();
    // const [deleteOrder, { isLoading }] = useDeleteOrderMutation();
    const onPressHandler = () => {
        navigation.navigate("InvoiceDetailsScreen", order._id);
    };
    // console.log(order);
    const totalPrice = order?.product_list
        .reduce((total, { price, quantity }) => total + price * quantity, 0)
        .toFixed(0);
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed,
            ]}
            onPress={onPressHandler}
        >
            <VStack space={2}>
                {/* <HStack space={8}>
                    <Text style={styles.cardData}>Order ID:</Text>
                    <Text style={styles.bold}>{order?.order_number}</Text>
                </HStack> */}
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Text style={styles.boldText}>
                        Order ID#{order?.order_number}
                    </Text>
                    <View
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 100,
                            backgroundColor: "#F5F5F5",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AntDesign
                            name="right"
                            size={16}
                            color={Colors.dark600}
                        />
                    </View>
                </HStack>
                <HStack space={8}>
                    <Text style={[styles.cardData, styles.lightText]}>
                        Item:
                    </Text>
                    <Text style={styles.lightText}>
                        {order?.product_list?.length}
                    </Text>
                </HStack>
                <HStack space={8}>
                    <Text style={[styles.cardData, styles.lightText]}>
                        Date:
                    </Text>
                    <Text style={styles.lightText}>
                        {moment(order?.createdAt).calendar()}
                    </Text>
                </HStack>
                <HStack space={8}>
                    <Text style={[styles.cardData, styles.lightText]}>
                        Seller:
                    </Text>
                    <Text style={styles.bold}>
                        {order?.seller?.business_name}
                    </Text>
                </HStack>
                <HStack space={8} alignItems={"center"}>
                    <Text style={[styles.cardData, styles.lightText]}>
                        Status:
                    </Text>
                    <Text style={styles.status}>{order?.status}</Text>
                </HStack>
                <HStack space={8}>
                    <Text style={[styles.cardData, styles.boldText]}>
                        Total:
                    </Text>
                    <Text style={[styles.boldText, { color: Colors.green500 }]}>
                        ${totalPrice}
                    </Text>
                </HStack>
                {/* <Button
                    disabled={isLoading}
                    onPress={async () => {
                        const res = await deleteOrder(order?._id);
                        console.log(res);
                    }}
                    mt={2}
                    py={1}
                    colorScheme={"error"}
                >
                    Delete Order
                </Button> */}
            </VStack>
        </Pressable>
    );
};

export default OrderCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 18,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 20,
        elevation: 2,
    },
    cardData: {
        width: "30%",
    },
    boldText: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 24,
        color: Colors.dark600,
    },
    bold: {
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 19.5,
    },
    status: {
        textAlign: "center",
        // borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "#E6F4FF",
        // borderColor: "#E6F4FF",
        color: "#2574E0",
        justifyContent: "center",
        // width: 80,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500",
    },
    price: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "500",
        fontSize: 18,
    },
    pressed: {
        opacity: 0.75,
    },
    lightText: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.dark500,
    },
});
