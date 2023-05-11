import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, HStack, VStack } from "native-base";
import { GlobalStyles } from "../../../constants/style";

const TopBidderSection = () => {
    const arr = [1, 2, 3, 4, 5, 6, 8, 9];
    const [showMore, setShowMore] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Bidder</Text>
            {showMore
                ? arr.map((item) => (
                      <HStack key={item} style={styles.bidderContainer}>
                          <HStack space={4} alignItems={"center"}>
                              <Avatar source={require("../../../assets/images/auctionUser.png")} />
                              <VStack>
                                  <Text style={{ fontWeight: "600" }}>Malik Cupang</Text>
                                  <Text style={{ color: GlobalStyles.colors.gray300 }}>
                                      2 hours ago
                                  </Text>
                              </VStack>
                          </HStack>
                          <Text style={styles.title}>$ 235.00</Text>
                      </HStack>
                  ))
                : arr.slice(0, 4).map((item) => (
                      <HStack key={item} style={styles.bidderContainer}>
                          <HStack space={4} alignItems={"center"}>
                              <Avatar source={require("../../../assets/images/auctionUser.png")} />
                              <VStack>
                                  <Text style={{ fontWeight: "600" }}>Malik Cupang</Text>
                                  <Text style={{ color: GlobalStyles.colors.gray300 }}>
                                      2 hours ago
                                  </Text>
                              </VStack>
                          </HStack>
                          <Text style={styles.title}>$ 235.00</Text>
                      </HStack>
                  ))}
            <Button
                variant={"ghost"}
                _text={{ fontWeight: "bold" }}
                onPress={() => setShowMore(!showMore)}
            >
                {showMore ? "Show less" : "View more"}
            </Button>
        </View>
    );
};

export default TopBidderSection;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 6,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 16,
    },
    bidderContainer: {
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: GlobalStyles.colors.gray200,
        justifyContent: "space-between",
        alignItems: "center",
    },
});
