import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
    HStack,
    ChevronDownIcon,
    ChevronUpIcon,
    Icon,
    Image,
    Center,
    Box,
    VStack,
    Divider,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductsList = ({ order }) => {
    const [show, setShow] = useState(true);
    return (
        <View style={[styles.container]}>
            <Pressable onPress={() => setShow(!show)}>
                <HStack
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    py={2}
                    px={4}
                >
                    <HStack alignItems={"center"}>
                        {show && <ChevronDownIcon size={4} mr={2} />}
                        {!show && <ChevronUpIcon size={4} mr={2} />}
                        <Text>Products List</Text>
                    </HStack>
                    {show && <Icon as={Feather} name={"edit"} size={4} />}
                </HStack>
            </Pressable>
            {show && (
                <>
                    <Center mt={2}>
                        <Image
                            source={{
                                uri: order?.product_list[0]?.product?.images[0],
                            }}
                            alt="Alternate Text"
                            size="2xl"
                            rounded={"lg"}
                        />
                    </Center>
                    <View>
                        <View style={{ paddingHorizontal: 16 }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    marginTop: 4,
                                    // borderWidth: 1,
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        // borderWidth: 1,
                                    }}
                                >
                                    {order?.product_list[0]?.product?.title} |{" "}
                                </Text>
                                <Text>
                                    {order?.product_list[0]?.product?.category}
                                </Text>
                            </View>
                            <HStack mt={1}>
                                <Text>
                                    {
                                        order?.product_list[0]?.product
                                            ?.allocations?.marketplace
                                            ?.min_qty_lb
                                    }
                                    {" lb x "}
                                </Text>
                                <Text>
                                    {"$"}
                                    {
                                        order?.product_list[0]?.product
                                            ?.allocations?.marketplace
                                            ?.price_per_lb
                                    }
                                    {" :   $"}
                                    {order?.product_list[0]?.price}
                                </Text>
                            </HStack>
                            <HStack flex={1} mt={1}>
                                <VStack flex={0.5}>
                                    <Text>
                                        THC:{" "}
                                        {
                                            order?.product_list[0]?.product
                                                ?.specifications?.thc
                                        }
                                        %
                                    </Text>
                                    <Text>
                                        Strain:{" "}
                                        {
                                            order?.product_list[0]?.product
                                                ?.specifications?.strain
                                        }
                                    </Text>
                                    <Text>
                                        Cultivation:{" "}
                                        {
                                            order?.product_list[0]?.product
                                                ?.specifications
                                                ?.cultivation_type
                                        }
                                    </Text>
                                </VStack>
                                <VStack flex={0.5}>
                                    <Text>
                                        Price/lb:{" "}
                                        {
                                            order?.product_list[0]?.product
                                                ?.allocations?.marketplace
                                                ?.price_per_lb
                                        }
                                    </Text>
                                    <Text>
                                        Price/g:{" "}
                                        {
                                            order?.product_list[0]?.product
                                                ?.allocations?.marketplace
                                                ?.price_per_g
                                        }
                                    </Text>
                                </VStack>
                            </HStack>
                        </View>
                        <Divider my={4} thickness={1} />
                        <Box px={4}>
                            <HStack space={2} alignItems={"center"} mb={2}>
                                <MaterialCommunityIcons
                                    name="check-decagram"
                                    size={18}
                                    color={Colors.green500}
                                />
                                <Text>Paid to be</Text>
                            </HStack>
                            <HStack justifyContent={"space-between"} mb={1}>
                                <Text>Sub Total</Text>
                                <Text>Items</Text>
                                <Text>${order?.product_list[0]?.price}</Text>
                            </HStack>
                            <HStack justifyContent={"space-between"}>
                                <Text>Discount</Text>
                                <Text>0.0 %</Text>
                                <Text>$0</Text>
                            </HStack>
                        </Box>
                        <Divider my={4} thickness={1} />
                        <HStack justifyContent={"space-between"} px={4} pb={4}>
                            <Text>Paid by customer</Text>
                            <Text>${order?.product_list[0]?.price}</Text>
                        </HStack>
                    </View>
                </>
            )}
        </View>
    );
};

export default ProductsList;

const styles = StyleSheet.create({
    container: {
        // padding: 20,
        borderRadius: 5,
        backgroundColor: "white",
        marginTop: 20,
        elevation: 2,
        marginHorizontal: 20,
    },
});
