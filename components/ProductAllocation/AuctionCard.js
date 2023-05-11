import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { HStack, Icon, IconButton, VStack } from "native-base";
import { GlobalStyles } from "../../constants/style";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteAuctionData } from "../../redux/slices/inventory.slice";
import AllocationModal from "./AllocationModal";
import UpdateAuctionModal from "./UpdateAuctionModal";

const AuctionCard = ({ last, data, index, product }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={[styles.auctionItem, { marginBottom: last ? 0 : 20 }]}>
            <VStack space={1}>
                <HStack>
                    <Text style={styles.key}>Quantity</Text>
                    <Text style={styles.value}>{data?.quantity}</Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Min Quantity</Text>
                    <Text style={styles.value}>{data?.min_qty}</Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Bids Received</Text>
                    <Text style={styles.value}>{data?.bids_received ? data.bids_received : 'none'}</Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Duration</Text>
                    <Text style={styles.value}>
                        {data?.duration?.value} {data?.duration?.unit}
                    </Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Reserve</Text>
                    <Text style={styles.value}>{data?.reserve}</Text>
                </HStack>
                <HStack>
                    <Text style={styles.key}>Buy Now</Text>
                    <Text style={styles.value}>{data?.buy_now}</Text>
                </HStack>
                <HStack alignItems={"center"}>
                    <Text style={styles.key}>Actions</Text>
                    <HStack space={2}>
                        {/* <IconButton
                            onPress={() => setShowModal(true)}
                            icon={<Icon as={AntDesign} name="edit" />}
                            borderRadius="full"
                            colorScheme={"blue"}
                        /> */}
                        <UpdateAuctionModal index={index} auction={data} product={product} />
                        <IconButton
                            onPress={() => dispatch(deleteAuctionData(index))}
                            icon={<Icon as={AntDesign} name="delete" />}
                            borderRadius="full"
                            colorScheme={"danger"}
                        />
                    </HStack>
                </HStack>
            </VStack>
            {/* <AllocationModal showModal={showModal} setShowModal={setShowModal} auction={data} index={index} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    auctionItem: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        borderRadius: 8,
        marginBottom: 8,
        padding: 16,
    },
    key: {
        width: "60%",
    },
    value: {
        fontWeight: "500",
    },
});

export default AuctionCard;
