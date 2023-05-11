import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuctionAllocation from "../ProductAllocation/AuctionAllocation";
import MarketplaceAllocation from "../ProductAllocation/MarketplaceAllocation";
import AllocationSummary from "../ProductAllocation/AllocationSummary";
import { Button, HStack } from "native-base";
import { useState } from "react";
import { useEffect } from "react";
import { GlobalStyles } from "../../constants/style";

const ProductAllocation = ({ setStep }) => {
    const productData = { quantity: 200, unit: "lb" };
    const [marketplaceData, setMarketplaceData] = useState({
        quantity: 0,
    });
    const [auctionData, setAuctionData] = useState([]);
    const [remaining, setRemaining] = useState(0);

    // console.log(auctionData);
    useEffect(() => {
        const updatedRemaining =
            Number(productData?.quantity) - Number(marketplaceData.quantity);

        const totalAuctionAmount = auctionData.reduce(
            (total, { totalQuantity }) => total + Number(totalQuantity),
            0
        );
        console.log(totalAuctionAmount);
        setRemaining(updatedRemaining - totalAuctionAmount);
    }, [marketplaceData?.quantity, auctionData]);
    return (
        <View>
            <AllocationSummary
                productData={productData}
                marketplaceData={marketplaceData}
                auctionData={auctionData}
                remaining={remaining}
            />
            <MarketplaceAllocation
                remaining={remaining}
                marketplaceData={marketplaceData}
                setMarketplaceData={setMarketplaceData}
            />
            <AuctionAllocation
                productData={productData}
                marketplaceData={marketplaceData}
                auctionData={auctionData}
                remaining={remaining}
                setAuctionData={setAuctionData}
            />
            <HStack mb={8} justifyContent="space-between">
                <Button
                    variant={"outline"}
                    borderColor={GlobalStyles.colors.primary500}
                    w={"45%"}
                >
                    Draft
                </Button>
                <Button w={"45%"}>Publish</Button>
            </HStack>
            <Button onPress={() => setStep(1)}>Previous</Button>
        </View>
    );
};

export default ProductAllocation;

const styles = StyleSheet.create({});
