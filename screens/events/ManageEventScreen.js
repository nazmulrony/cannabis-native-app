import { View, Text } from "react-native";
import React from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";

const ManageEventScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>ManageEvent</Text>
        </View>
    );
};

export default ManageEventScreen;
