import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import Colors from "../../constants/Colors";

const SingleMessage = ({ message }) => {
    const current_time = moment();
    const created_time = moment(message.createdAt);
    let time;
    if (created_time.isSame(current_time, "day")) {
        // if created time is today, show only time format
        time = created_time.format("h:mm A");
    } else if (
        created_time.isSame(current_time.clone().subtract(1, "day"), "day")
    ) {
        // if created time is yesterday, show "yesterday at time" format
        time = created_time.format("[Yesterday at] h:mm A");
    } else {
        // if created time is before yesterday, show date with time format
        time = created_time.format("MMM D, YY h:mm A");
    }
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: message.user_id.profile_pic }}
                style={styles.image}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.nameAndDateContainer}>
                    <Text style={styles.name}>
                        {message.user_id.first_name} {message.user_id.last_name}
                    </Text>
                    <Text style={styles.date}>{time}</Text>
                </View>
                <Text style={styles.message}>{message.text}</Text>
            </View>
        </View>
    );
};

export default SingleMessage;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginHorizontal: 20,
        flex: 1,
    },
    nameAndDateContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.light500,
        marginRight: 9,
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        color: Colors.dark600,
    },
    date: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 16.5,
        color: Colors.dark500,
    },
    message: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 19.5,
        color: Colors.dark600,
    },
});
