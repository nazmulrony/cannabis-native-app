import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../../constants/style";
import { Button, HStack, Icon, IconButton, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AllocationModal from "./AllocationModal";
import AuctionCard from "./AuctionCard";
import { useDispatch, useSelector } from "react-redux";
import {
    formSelector,
    setAllowPublish,
    setSummary,
} from "../../redux/slices/inventory.slice";

const AuctionAllocation = ({ product }) => {
    const {
        data: formData,
        summary: { totalQuantity, totalMarketplaceQuantity },
    } = useSelector(formSelector);
    const auction = formData?.allocations?.auction?.length
        ? formData?.allocations?.auction
        : product?.allocations?.auction;
    const totalAuctionQuantity = auction?.length
        ? auction?.reduce((acc, curr) => Number(curr.quantity) + Number(acc), 0)
        : 0;

    const remaining =
        Number(totalQuantity) -
        (Number(totalAuctionQuantity) + Number(totalMarketplaceQuantity));
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (remaining >= 0) {
            dispatch(setSummary({ remaining: remaining }));
            if (totalAuctionQuantity > 0) {
                dispatch(setSummary({ totalAuctionQuantity }));
                dispatch(setAllowPublish(true));
            } else {
                dispatch(setSummary({ totalAuctionQuantity: 0 }));
            }
        } else {
            dispatch(setSummary({ remaining: 0 }));
            dispatch(setAllowPublish(false));
        }
    }, [dispatch, auction?.length, totalAuctionQuantity]);

    return (
        <View style={styles.container}>
            <HStack justifyContent={"space-between"} alignItems="center">
                <Text style={styles.title}>Auction</Text>
                <Button
                    // disabled={remaining <= 0}
                    // colorScheme={remaining <= 0 ? "light" : "primary"}
                    onPress={() => setShowModal(!showModal)}
                    py={2}
                    leftIcon={<Icon as={AntDesign} name="plus" size="sm" />}
                >
                    Add Auction
                </Button>
            </HStack>
            <AllocationModal
                product={product}
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <View style={styles.divider} />
            {auction?.length ? (
                auction?.map((data, index) => (
                    <AuctionCard
                        product={product}
                        data={data}
                        index={index}
                        key={index}
                        last={index === auction?.length - 1}
                    />
                ))
            ) : (
                <Text style={{ textAlign: "center" }}>No data to show !</Text>
            )}
        </View>
    );
};

export default AuctionAllocation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,

        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 16,
    },
    divider: {
        borderBottomWidth: 1,
        marginHorizontal: -20,
        borderBottomColor: GlobalStyles.colors.gray100,
        // marginVertical: 16,
        marginBottom: 16,
    },
});
