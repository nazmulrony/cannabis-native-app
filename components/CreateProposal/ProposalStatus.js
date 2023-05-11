import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../constants/style'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Pressable } from 'react-native'
import InputField from '../../ui/InputField'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import moment from 'moment'
const ProposalStatus = () => {
    const [active, setActive] = useState("Daily")
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())


    const showDatepicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange: (event, selectedDate) => {
                const currentDate = selectedDate;
                setDate(currentDate);
            },
            mode: "date",
            is24Hour: true,
        });
    };
    const showTimepicker = () => {
        DateTimePickerAndroid.open({
            value: time,
            onChange: (event, selectedTime) => {
                const currentTime = selectedTime;
                setTime(currentTime);
            },
            mode: "time",
            is24Hour: true,
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Proposal Status</Text>
            <Text style={{ color: GlobalStyles.colors.gray300 }}>Select your proposals as their current status</Text>
            <View style={styles.statusContainer}>
                <Pressable
                    onPress={() => setActive("Daily")}
                    style={
                        active === "Daily" ? styles.active : styles.inactive
                    }
                >
                    <Text
                        style={
                            active === "Daily"
                                ? styles.activeText
                                : styles.inactiveText
                        }
                    >
                        Daily
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => setActive("Outstation")}
                    style={
                        active === "Outstation" ? styles.active : styles.inactive
                    }
                >
                    <Text
                        style={
                            active === "Outstation"
                                ? styles.activeText
                                : styles.inactiveText
                        }
                    >
                        Outstation
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => setActive("Rental")}
                    style={
                        active === "Rental" ? styles.active : styles.inactive
                    }
                >
                    <Text
                        style={
                            active === "Rental"
                                ? styles.activeText
                                : styles.inactiveText
                        }
                    >
                        Rental
                    </Text>
                </Pressable>
            </View>

            <InputField
                placeholder="Pickup location"
                inputConfig={{
                    InputLeftElement: (
                        <Ionicons name="location-outline" size={22} color={GlobalStyles.colors.primary500} style={{ paddingVertical: 10, paddingLeft: 12, backgroundColor: 'white' }} />
                    ),
                }} />
            <InputField
                placeholder="Delivery location"
                inputConfig={{
                    InputLeftElement: (
                        <Ionicons name="location-outline" size={22} color={GlobalStyles.colors.primary500} style={{ paddingVertical: 10, paddingLeft: 12, backgroundColor: 'white' }} />
                    ),
                }} />
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <InputField
                    width={"47%"}
                    placeholder="MM/DD/YYYY"
                    inputConfig={{
                        defaultValue: moment(date).format('L'),
                        onFocus: () => showDatepicker(),
                        showSoftInputOnFocus: false,
                        InputRightElement: (
                            <AntDesign name="calendar" size={22} color={GlobalStyles.colors.gray200} style={{ paddingVertical: 10, paddingRight: 6, backgroundColor: 'white' }} />
                        ),
                    }} />
                <InputField
                    width={"47%"}
                    placeholder="Booking Time"
                    inputConfig={{
                        defaultValue: moment(time).format('LT'),
                        onFocus: () => showTimepicker(),
                        showSoftInputOnFocus: false,
                        InputRightElement: (
                            <AntDesign name="clockcircleo" size={22} color={GlobalStyles.colors.gray200} style={{ paddingVertical: 10, paddingRight: 6, backgroundColor: 'white' }} />
                        ),
                    }} />

            </View>
        </View>
    )
}

export default ProposalStatus

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        paddingHorizontal: 12,
        borderRadius: 6
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6
    },
    statusContainer: {
        backgroundColor: GlobalStyles.colors.light50, flexDirection: 'row',
        marginVertical: 16,
        borderRadius: 8,
        padding: 2
    },
    active: {
        backgroundColor: GlobalStyles.colors.primary500,
        paddingVertical: 9,
        flex: 1,
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    inactive: {
        flex: 1,
        // borderWidth: 1,
        paddingVertical: 9,
        justifyContent: "center",
        alignItems: "center",
    },
    activeText: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "500",
        color: "white",
    },
    inactiveText: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "400",
        color: "#6D6D6D",
    },
})