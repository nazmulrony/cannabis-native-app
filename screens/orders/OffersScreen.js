import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerActions, useFocusEffect } from '@react-navigation/native';

const OffersScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>OffersScreen</Text>
        </View>
    )
}

export default OffersScreen

const styles = StyleSheet.create({})