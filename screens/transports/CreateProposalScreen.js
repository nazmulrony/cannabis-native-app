import { View, Text } from "react-native";
import React from "react";

import { DrawerActions, useFocusEffect } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ProposalStatus from "../../components/CreateProposal/ProposalStatus";
import AvailableTransports from "../../components/CreateProposal/AvailableTransports";
import TransportMap from "../../components/CreateProposal/TransportMap";
import { ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/style";
const CreateProposalScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                <ProposalStatus />
                <AvailableTransports />
                <TransportMap />
            </ScrollView>
        </View>
    );
};

export default CreateProposalScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: GlobalStyles.colors.light50
    }
})
