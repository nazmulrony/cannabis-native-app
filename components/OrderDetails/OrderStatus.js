import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import { HStack, VStack, Divider, Box, Icon, Text } from "native-base";
import Colors from "../../constants/Colors";
import { GlobalStyles } from "../../constants/style";

const OrderStatus = ({ orderStatus, selected }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {orderStatus?.map((os, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                            key={index}
                        >
                            <View
                                style={{
                                    padding: 6,
                                    borderRadius: 100,
                                    backgroundColor: selected.includes(os.title)
                                        ? Colors.green100
                                        : Colors.light500,
                                    // marginRight: 5,
                                }}
                            >
                                <Icon
                                    as={os.icon.type}
                                    name={os.icon.name}
                                    color={
                                        selected.includes(os.title)
                                            ? Colors.green500
                                            : GlobalStyles.colors.gray300
                                    }
                                    size={18}
                                />
                            </View>
                            {/* <Text
                                color={
                                    selected.includes(os.title)
                                        ? Colors.green500
                                        : GlobalStyles.colors.gray300
                                }
                            >
                                {os.title}
                            </Text> */}
                        </View>
                        {index !== orderStatus.length - 1 && (
                            <Divider
                                bg={
                                    selected.includes(
                                        orderStatus[index + 1].title
                                    )
                                        ? Colors.green500
                                        : "gray.400"
                                }
                                thickness="2"
                                mx="2"
                                w={5}
                                // orientation="vertical"
                                // h={5}
                            />
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default OrderStatus;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: "white",
        padding: 20,
        elevation: 2,
        marginHorizontal: 20,
        marginTop: 20,
    },
});
