import { View, Text, Dimensions } from "react-native";
import React from "react";
import {
    VictoryArea,
    VictoryAxis,
    VictoryChart,
    VictoryTheme,
    VictoryTooltip,
} from "victory-native";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import VictoryVoronoiContainer from "victory-native/src/components/victory-voronoi-container";

const BalanceChart = () => {
    const data = [
        { day: "Sun", earnings: 22, label: "22" },
        { day: "Mon", earnings: 20, label: "20" },
        { day: "Tue", earnings: 30, label: "30" },
        { day: "Wed", earnings: 25, label: "25" },
        { day: "Thr", earnings: 40, label: "40" },
        { day: "Fri", earnings: 38, label: "38" },
        { day: "Sat", earnings: 45, label: "45" },
    ];

    return (
        <View>
            <VictoryChart
                height={200}
                width={Dimensions.get("window").width - 40}
                //width={300}
                theme={VictoryTheme.material}
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
                    // animate
                    height={150}
                    style={{
                        data: {
                            fill: "url(#gradientStroke)",
                            stroke: "#4CAF50",
                            strokeWidth: 2,
                            fillOpacity: 0.5,
                        },
                    }}
                    //labelComponent={<VictoryTooltip/>}
                    data={data}
                    x="day"
                    y="earnings"
                    //interpolation="natural"
                />
                <VictoryAxis
                    style={{
                        Axis: { stroke: "none" },
                        marginTop: "10px",
                        grid: { stroke: "none" },
                    }}
                />
            </VictoryChart>
        </View>
    );
};

export default BalanceChart;
