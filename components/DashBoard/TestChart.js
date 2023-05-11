import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import {
    VictoryChart,
    VictoryArea,
    VictoryTheme,
    VictoryAxis,
    VictoryLabel,
} from "victory-native";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const TestChart = () => {
    const [stats, setStats] = useState({ increased: true, rate: 6 });
    const demoData = [
        { day: "Sun", earnings: 22 },
        { day: "Mon", earnings: 20 },
        { day: "Tue", earnings: 30 },
        { day: "Wed", earnings: 25 },
        { day: "Thr", earnings: 40 },
        { day: "Fri", earnings: 38 },
        { day: "Sat", earnings: 45 },
    ];

    const demoData2 = [
        { day: "Sun", earnings: 45 },
        { day: "Mon", earnings: 38 },
        { day: "Tue", earnings: 40 },
        { day: "Wed", earnings: 25 },
        { day: "Thr", earnings: 30 },
        { day: "Fri", earnings: 20 },
        { day: "Sat", earnings: 22 },
    ];

    const [data, setData] = useState(demoData);

    const onPressHandle = () => {
        setStats({ ...stats, increased: !stats.increased });
        if (stats.increased) {
            setData(demoData2);
        } else {
            setData(demoData);
        }
    };
    return (
        <View style={styles.chartSectionContainer}>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.balanceText}>Balance</Text>
                    <Text style={styles.balanceAmountText}>$35,400.36</Text>
                    <View style={styles.statsContainer}>
                        {stats.increased ? (
                            <AntDesign
                                name="caretup"
                                size={10}
                                color={Colors.green500}
                            />
                        ) : (
                            <AntDesign
                                name="caretdown"
                                size={10}
                                color="tomato"
                            />
                        )}
                        {stats.increased ? (
                            <Text style={styles.statsRate}>{stats.rate}%</Text>
                        ) : (
                            <Text
                                style={[styles.statsRate, { color: "tomato" }]}
                            >
                                {stats.rate}%
                            </Text>
                        )}
                        <Text style={styles.statsText}>than last week</Text>
                    </View>
                </View>
                <Pressable onPress={onPressHandle}>
                    <Text style={styles.withdraw}>Withdraw</Text>
                </Pressable>
            </View>
            <Animated.View style={{ alignItems: "center" }}>
                <VictoryChart
                    padding={{ top: 10, bottom: 40, left: 50, right: 50 }}
                    height={150}
                    theme={VictoryTheme.material}
                    domainPadding={10}
                    // animate
                >
                    <Defs>
                        <LinearGradient
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                            id="gradientStroke"
                        >
                            <Stop offset="0%" stopColor="#4CAF50" />
                            <Stop offset="100%" stopColor="white" />
                        </LinearGradient>
                    </Defs>
                    <VictoryArea
                        style={{
                            data: {
                                fill: "url(#gradientStroke)",
                                stroke: "#4CAF50",
                                strokeWidth: 2,
                                fillOpacity: 0.5,
                            },
                        }}
                        // animate
                        data={data}
                        x="day"
                        y="earnings"
                        //interpolation="natural"
                    />
                    <VictoryAxis
                        style={{
                            grid: { stroke: "none" },
                        }}
                    />
                </VictoryChart>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    chartSectionContainer: {
        borderRadius: 6,
        backgroundColor: "white",
        paddingHorizontal: 18,
        paddingVertical: 14,
        marginBottom: 20,
    },
    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    chartContainer: {
        alignItems: "center",
    },
    balanceText: {
        color: Colors.dark400,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
    },
    balanceAmountText: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.dark600,
    },
    statsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 11,
    },
    statsRate: {
        color: Colors.green500,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        marginLeft: 5,
        marginRight: 3,
    },
    statsText: {
        color: Colors.dark400,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
    },
    withdraw: {
        color: Colors.dark600,
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: Colors.green500,
        borderWidth: 1,
        backgroundColor: "#F6FFED",
        fontSize: 11,
        fontWeight: "500",
        lineHeight: 16.5,
    },
});

export default TestChart;
