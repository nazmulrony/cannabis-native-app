import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    Button,
    Divider,
    HStack,
    Icon,
    IconButton,
    Popover,
    VStack,
    useDisclose,
} from "native-base";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import InputField from "../../../ui/InputField";
import { GlobalStyles } from "../../../constants/style";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import SpecificationsModal from "../../InventoryProductDetails/SpecificationsModal";

const AuctionDetails = ({ product }) => {
    console.log(product);
    const description =
        "Cannabis product means a product containing usable cannabis, cannabis extract, or any other cannabis resin and other ingredients intended for human consumption or use, including a product intended to be applied to the skin or hair, edible cannabis products, ointments, and tinctures.";
    const [showMore, setShowMore] = useState(false);
    const [unit, setUnit] = useState("g");
    const { isOpen, onClose, onOpen } = useDisclose();
    return (
        <View style={styles.container}>
            <HStack space={1} alignItems={"center"}>
                <AntDesign name="checkcircle" size={10} color={GlobalStyles.colors.primary500} />
                <Text style={styles.fontSmall}>BLOOM</Text>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Text style={[styles.title, { width: "70%" }]}>{product?.title}</Text>
                <VStack alignItems={"center"} space={1}>
                    <HStack space={1}>
                        <FontAwesome name="star" size={18} color="#FFD600" />
                        <FontAwesome name="star" size={18} color="#FFD600" />
                        <FontAwesome name="star" size={18} color="#FFD600" />
                        <FontAwesome name="star" size={18} color="#FFD600" />
                        <FontAwesome name="star-half-full" size={18} color="#FFD600" />
                    </HStack>
                    <Text>4.9(1900 reviews)</Text>
                </VStack>
            </HStack>
            <InputField
                placeholder="Enter amount"
                width={"46%"}
                inputConfig={{
                    InputRightElement: (
                        <View style={styles.inputUnit}>
                            <Popover
                                onClose={onClose}
                                isOpen={isOpen}
                                trigger={(triggerProps) => {
                                    return (
                                        <Pressable {...triggerProps} onPress={onOpen}>
                                            <HStack alignItems={"center"} space={2}>
                                                <Text>{unit}</Text>
                                                <AntDesign name="down" size={14} color="black" />
                                            </HStack>
                                        </Pressable>
                                    );
                                }}
                            >
                                <Popover.Content accessibilityLabel="select unit" w="20">
                                    <Popover.Body>
                                        <Pressable
                                            style={styles.poppedUnit}
                                            onPress={() => {
                                                setUnit("g");
                                                onClose();
                                            }}
                                        >
                                            <Text>g </Text>
                                        </Pressable>
                                        <View style={styles.divider} />
                                        <Pressable
                                            style={styles.poppedUnit}
                                            onPress={() => {
                                                setUnit("lb");
                                                onClose();
                                            }}
                                        >
                                            <Text>lb </Text>
                                        </Pressable>
                                    </Popover.Body>
                                </Popover.Content>
                            </Popover>
                        </View>
                    ),
                }}
            />
            <HStack justifyContent={"space-between"}>
                <InputField
                    placeholder="Enter price"
                    width={"46%"}
                    inputConfig={{
                        InputRightElement: (
                            <View style={styles.inputUnit}>
                                <Text>$</Text>
                            </View>
                        ),
                    }}
                />

                <Button w={"46%"} mt={2.5} mb={3.5}>
                    Place a Bid
                </Button>
            </HStack>
            <HStack justifyContent={"space-between"}>
                <HStack space={1}>
                    <AntDesign name="eyeo" size={18} color="black" />
                    <Text>Add to watchlist!</Text>
                </HStack>
                <HStack>
                    <Text style={{ color: GlobalStyles.colors.gray300 }}>Starting bid :</Text>
                    <Text style={{}}>$10.00 </Text>
                </HStack>
            </HStack>
            <HStack justifyContent={"space-between"} my={4}>
                <Button variant={"outline"} w={"46%"} borderColor={"primary.500"}>
                    Buy Now $1,990.00
                </Button>
                <Button w={"46%"}>0h : 25m : 45s</Button>
            </HStack>
            <Text style={styles.subTitle}>Product description</Text>
            <HStack flexWrap={"wrap"}>
                <Text
                    style={{
                        fontSize: 13,
                        color: GlobalStyles.colors.gray300,
                        textAlign: "justify",
                    }}
                >
                    {showMore ? description : description.slice(0, 155)}
                    <Text
                        style={{ color: GlobalStyles.colors.primary500 }}
                        onPress={() => setShowMore(!showMore)}
                    >
                        {showMore ? "...show less" : "...read more"}
                    </Text>
                </Text>
            </HStack>
            <Divider my={3} />
            <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Text style={styles.subTitle}>Specifications</Text>
                <SpecificationsModal product={product} />
            </HStack>
            <Divider mt={3} />
            <Text style={styles.sectionTitle}>Auction History</Text>
            <Text style={{ fontSize: 16, color: GlobalStyles.colors.gray300 }}>
                August 20, 2023 12:00 am
            </Text>
            <View style={styles.auctionStatusContainer}>
                <Text style={styles.auctionStatus}>Auction started !</Text>
            </View>
            <Text style={styles.sectionTitle}>Vendor Information</Text>
            <HStack alignItems={"center"}>
                <Text style={{ color: GlobalStyles.colors.gray300 }}>Address:</Text>
                <Text style={{ fontSize: 16 }}> Oklahoma City, OK</Text>
            </HStack>
            <HStack alignItems={"center"} space={6} mt={2}>
                <HStack alignItems={"center"} space={2}>
                    <Text
                        style={{
                            fontSize: 28,
                            color: GlobalStyles.colors.primary500,
                            fontWeight: "600",
                        }}
                    >
                        4.3
                    </Text>
                    <FontAwesome name="star" size={24} color="#4CAF50" />
                </HStack>
                <Text style={{ fontSize: 12, color: GlobalStyles.colors.gray300 }}>
                    305 Ratings, 68 Reviews
                </Text>
            </HStack>
        </View>
    );
};

export default AuctionDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 6,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "600",
    },
    fontSmall: {
        fontSize: 12,
    },
    inputUnit: {
        borderLeftWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        backgroundColor: GlobalStyles.colors.light50,
        height: "100%",
        flexDirection: "row",
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "500",
        backgroundColor: GlobalStyles.colors.light100,
        paddingVertical: 12,
        paddingLeft: 24,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginVertical: 16,
    },
    auctionStatusContainer: {
        width: "50%",
        backgroundColor: GlobalStyles.colors.light50,
        paddingVertical: 12,
        borderRadius: 6,
        marginVertical: 16,
    },
    auctionStatus: {
        fontSize: 16,
        fontWeight: "500",
        color: GlobalStyles.colors.primary500,
        textAlign: "center",
    },
    poppedUnit: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
    },
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        borderBottomColor: GlobalStyles.colors.gray200,
    },
});
