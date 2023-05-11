import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Box, Text, Pressable, Button } from "native-base";

const ProfitChart = () => {
    const demoData = [
        { day: "Sun", earnings: 22 },
        { day: "Mon", earnings: 20 },
        { day: "Tue", earnings: 30 },
        { day: "Wed", earnings: 25 },
        { day: "Thr", earnings: 40 },
        { day: "Fri", earnings: 38 },
        { day: "Sat", earnings: 45 },
    ];
    return (
        <Box style={styles.profitContainer}>
            <Box
                style={[
                    styles.innerContainer,
                    {
                        borderBottomWidth: 1,
                        borderBottomColor: "#EEEEEE",
                        marginBottom: 14,
                    },
                ]}
            >
                <Text style={styles.titleText}>Total Profit</Text>
                <Box style={styles.chartContainer}>
                    <VictoryChart
                        width={Dimensions.get("window").width - 50}
                        height={220}
                        //theme={VictoryTheme.material}
                        padding={{ top: 20, bottom: 30, left: 40, right: 30 }}
                        domainPadding={30}
                    >
                        <VictoryAxis
                            dependentAxis={true}
                            //offsetX={70}
                            style={{
                                grid: { stroke: "#DADAD9" },
                                tickLabels: { stroke: "#DADAD9" },
                                ticks: { stroke: "#DADAD9" },
                                axis: { stroke: "none" },
                            }}
                        />
                        <VictoryBar
                            barWidth={20}
                            style={{
                                data: { fill: Colors.green500 },
                            }}
                            alignment="middle"
                            data={demoData}
                            x="day"
                            y="earnings"
                            // animate
                        />

                        <VictoryAxis
                            style={{
                                tickLabels: { stroke: "#DADAD9" },
                                ticks: { stroke: "#DADAD9" },
                                axis: { stroke: "#DADAD9" },
                            }}
                        />
                    </VictoryChart>
                </Box>
            </Box>

            <Box style={styles.innerContainer}>
                <Text
                    style={[
                        styles.titleText,
                        { fontSize: 16, marginBottom: 8 },
                    ]}
                >
                    $3232
                </Text>
                <Text
                    style={[
                        styles.secondaryText,
                        { lineHeight: 18, marginBottom: 14 },
                    ]}
                >
                    Last week profit
                </Text>
                <Box style={styles.statsContainer}>
                    <Box style={styles.iconContainer}>
                        <Octicons
                            style={{}}
                            name="arrow-switch"
                            size={24}
                            color={Colors.green500}
                        />
                    </Box>
                    <Box>
                        <Text
                            style={[
                                styles.secondaryText,
                                { color: Colors.dark600, fontWeight: "500" },
                            ]}
                        >
                            $45,675
                        </Text>
                        <Text style={styles.secondaryText}>
                            Last week profit
                        </Text>
                    </Box>
                </Box>
                <Box style={styles.statsContainer}>
                    <Box style={styles.iconContainer}>
                        <FontAwesome
                            name="dollar"
                            size={24}
                            color={Colors.green500}
                        />
                    </Box>
                    <Box>
                        <Text
                            style={[
                                styles.secondaryText,
                                { color: Colors.dark600, fontWeight: "500" },
                            ]}
                        >
                            $45,675
                        </Text>
                        <Text style={styles.secondaryText}>Total Income</Text>
                    </Box>
                </Box>
                <Box style={styles.statsContainer}>
                    <Box style={styles.iconContainer}>
                        <Ionicons
                            name="stats-chart"
                            size={24}
                            color={Colors.green500}
                        />
                    </Box>
                    <Box>
                        <Text
                            style={[
                                styles.secondaryText,
                                { color: Colors.dark600, fontWeight: "500" },
                            ]}
                        >
                            $45,675
                        </Text>
                        <Text style={styles.secondaryText}>
                            Total months profit
                        </Text>
                    </Box>
                </Box>
                {/* <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>View reports</Text>
                </Pressable> */}
                <Button
                    bg={"primary.400"}
                    rounded={"lg"}
                    _text={{
                        color: "white",
                        lineHeight: 21,
                        fontSize: 14,
                        fontWeight: "600",
                    }}
                >
                    View Reports
                </Button>
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    profitContainer: {
        borderRadius: 6,
        backgroundColor: "white",
        marginBottom: 20,
    },
    innerContainer: {
        padding: 14,
    },
    titleText: {
        color: Colors.dark600,
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "600",
    },
    chartContainer: {
        alignItems: "center",
    },
    secondaryText: {
        fontSize: 12,
        lineHeight: 15,
        color: "#8D8D97",
        fontWeight: "400",
    },
    statsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },
    iconContainer: {
        width: 32,
        height: 32,
        backgroundColor: "#ECFFED",
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
        borderRadius: 5,
    },
    btn: {
        marginVertical: 10,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: Colors.green500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "white",
        lineHeight: 21,
        fontSize: 14,
        fontWeight: "600",
    },
});

export default ProfitChart;
