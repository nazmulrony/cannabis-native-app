import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";

const Timer = ({ initialTime, style }) => {
    const [time, setTime] = useState(initialTime); // 10 minutes in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime((time) => time - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        // console.log(time);

        return () => clearInterval(interval);
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <Text
            style={[
                {
                    fontSize: 14,
                    lineHeight: 22,
                    fontWeight: "400",
                    color: Colors.dark600,
                    textAlign: "center",
                },
                style,
            ]}
        >
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
        </Text>
    );
};

export default Timer;
