import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerActions, useFocusEffect } from '@react-navigation/native';

const DeliveriesScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>DeliveriesScreen</Text>
        </View>
    )
}

export default DeliveriesScreen

const styles = StyleSheet.create({})