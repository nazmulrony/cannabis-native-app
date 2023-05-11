import { View, Text } from "react-native";
import React from "react";
import { Button } from "native-base";

import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
import OrderSummery from "../../components/CheckoutOrder/OrderSummery";
import ShippingAddress from "../../components/CheckoutOrder/ShippingAddress";
const ProposalListScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        // <View style={styles.screen}>
        //   <Text>ProposalList</Text>
        // </View>
        <View style={styles.screen}>
            <ShippingAddress />
            <OrderSummery />
            <Button py={1} mx={5} colorScheme="secondary">
                Place Order
            </Button>
        </View>
    );
};

export default ProposalListScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
