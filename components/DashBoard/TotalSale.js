import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
    VictoryAxis,
    VictoryChart,
    VictoryLabel,
    VictoryPie,
} from "victory-native";
import { Svg } from "react-native-svg";

const TotalSale = () => {
    const data = [
        { x: "a", y: 40 },
        { x: "b", y: 20 },
        { x: "c", y: 15 },
        { x: "d", y: 25 },
    ];
    return (
        <View style={styles.salesContainer}>
            <View>
                <Text style={styles.salestext}>Total Sales</Text>
                <Text style={styles.lightText}>Calculated in last 7 days</Text>
                <View style={styles.statsContainer}>
                    <Text style={styles.amount}>$35,400.36</Text>
                    <Ionicons
                        name="chevron-up-outline"
                        size={12}
                        color={Colors.green500}
                    />
                    <Text style={styles.rate}>9%</Text>
                </View>
            </View>
            <View>
                <Svg width={80} height={80}>
                    <VictoryPie
                        animate={{
                            duration: 2000,
                        }}
                        colorScale={[
                            "#9155FD",
                            "#35C2FD",
                            "#FF830C",
                            "#6FD226",
                        ]}
                        data={data}
                        height={80}
                        radius={36}
                        innerRadius={27}
                        width={80}
                        labels={() => ""}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{
                            fontSize: 16,
                            lineHeight: 20,
                            fontWeight: "600",
                        }}
                        x={40}
                        y={40}
                        text="91%"
                    />
                </Svg>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    salesContainer: {
        backgroundColor: "white",
        padding: 14,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center",
    },
    salestext: {
        fontSize: 18,
        lineHeight: 21,
        color: Colors.dark600,
        fontWeight: "600",
        marginBottom: 15,
    },
    lightText: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: Colors.dark400,
        marginBottom: 12,
    },
    statsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    amount: {
        fontSize: 16,
        lineHeight: 19,
        color: Colors.dark600,
        fontWeight: "600",
        marginRight: 8,
    },
    rate: {
        fontSize: 16,
        lineHeight: 18,
        color: Colors.green500,
        fontWeight: "600",
        marginLeft: 8,
    },
});

export default TotalSale;
