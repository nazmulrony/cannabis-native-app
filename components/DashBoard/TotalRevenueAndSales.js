import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { Defs, LinearGradient, Stop, Svg } from "react-native-svg";
import {
    VictoryArea,
    VictoryAxis,
    VictoryChart,
    VictoryGroup,
    VictoryLabel,
    VictoryPie,
    VictoryTheme,
} from "victory-native";

const TotalRevenueAndSales = () => {
    const demoData = [
        { x: "Sun", y: 0 },
        { x: "Mon", y: 10 },
        { x: "Tue", y: 5 },
        { x: "Wed", y: 20 },
    ];
    const progress = 70;
    return (
        <View style={styles.viewsContainer}>
            <View style={[styles.innerContainer, { marginRight: 20 }]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Total Revenue</Text>
                    <Entypo
                        name="dots-three-vertical"
                        size={12}
                        color={Colors.dark400}
                    />
                </View>
                <Text style={styles.valueText}>$35.7K</Text>
                <View style={styles.chartContainer}>
                    <VictoryChart
                        padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
                        width={83}
                        height={39}
                        //theme={VictoryTheme.material}
                    >
                        <Defs>
                            <LinearGradient
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                                id="gradientStroke"
                            >
                                <Stop offset="0%" stopColor="#9155FD" />
                                <Stop offset="100%" stopColor="white" />
                            </LinearGradient>
                        </Defs>
                        <VictoryArea
                            padding={{ left: 0, right: 0 }}
                            width={83}
                            height={39}
                            style={{
                                data: {
                                    fill: "url(#gradientStroke)",
                                    stroke: "#9155FD",
                                    strokeWidth: 1,
                                    fillOpacity: 0.5,
                                },
                            }}
                            data={demoData}
                            x="x"
                            y="y"
                            interpolation="natural"
                            // animate
                        />
                        <VictoryAxis
                            style={{
                                grid: { stroke: "none" },
                                axis: { stroke: "transparent" },
                                ticks: { stroke: "transparent" },
                                tickLabels: { fill: "transparent" },
                            }}
                        />
                    </VictoryChart>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Total Sales</Text>
                    <Entypo
                        name="dots-three-vertical"
                        size={12}
                        color={Colors.dark400}
                    />
                </View>
                <Text style={styles.valueText}>$135.7K</Text>
                <View style={styles.chartContainer}>
                    <VictoryChart
                        padding={{ top: 42, bottom: 0, left: 0, right: 0 }}
                        width={83}
                        height={39}
                        //theme={VictoryTheme.material}
                    >
                        <Defs>
                            <LinearGradient
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                                id="gradientStroke"
                            >
                                <Stop offset="0%" stopColor="#4E83E1" />
                                <Stop offset="100%" stopColor="white" />
                            </LinearGradient>
                        </Defs>
                        <VictoryPie
                            data={[progress, 100 - progress]}
                            padding={{ left: 0, right: 0 }}
                            radius={40}
                            innerRadius={33}
                            colorScale={["url(#gradientStroke)", "#D9D9D9"]}
                            startAngle={-90}
                            endAngle={90}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            style={{
                                fontSize: 16,
                                lineHeight: 20,
                                fontWeight: "600",
                            }}
                            x={45}
                            y={30}
                            text="70%"
                        />
                        <VictoryAxis
                            style={{
                                grid: { stroke: "none" },
                                axis: { stroke: "transparent" },
                                ticks: { stroke: "transparent" },
                                tickLabels: { fill: "transparent" },
                            }}
                        />
                    </VictoryChart>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewsContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    innerContainer: {
        padding: 14,
        backgroundColor: "white",
        borderRadius: 6,
        flex: 0.5,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    titleText: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: Colors.dark400,
    },
    valueText: {
        fontSize: 16,
        lineHeight: 19,
        color: Colors.dark600,
        fontWeight: "600",
    },
    chartContainer: {
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
});

export default TotalRevenueAndSales;
