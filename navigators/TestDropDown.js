import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import { GlobalStyles } from "../constants/style";
import { useNavigation } from "@react-navigation/native";
// import Colors from "../constants/Colors";

const TestDropDown = ({ label, screens, icon, onPress, activeLabel }) => {
    const [activeScreen, setActiveScreen] = useState(null);
    const [toggleMenu, setToggleMenu] = useState(false);
    const progress = useSharedValue(0);
    const navigation = useNavigation();
    //native reanimated used for sliding animation
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: progress.value,
        };
    }, []);

    const dynamicHeight = screens.length;
    // console.log(navigation);

    const slideIn = () => {
        progress.value = withTiming(40 * dynamicHeight, { duration: 300 });
    };
    const slideOut = () => {
        progress.value = withTiming(0, { duration: 300 });
    };
    return (
        <View style={styles.rootContainer}>
            <Pressable
                onPress={() => {
                    setToggleMenu(!toggleMenu);
                    if (toggleMenu) {
                        slideOut();
                    } else {
                        slideIn();
                    }
                }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.labelContainer, styles.pressed]
                        : styles.labelContainer
                }
            >
                <View style={styles.iconTextContainer}>
                    {icon}
                    <Text
                        style={[
                            styles.label,
                            activeLabel === label && styles.active,
                        ]}
                    >
                        {label}{" "}
                    </Text>
                </View>
                {toggleMenu ? (
                    <Ionicons
                        name="chevron-up"
                        size={22}
                        color={activeLabel === label ? "black" : "black"}
                    />
                ) : (
                    <Ionicons
                        name="chevron-down"
                        size={22}
                        color={activeLabel === label ? "black" : "black"}
                    />
                )}
            </Pressable>

            {/* {toggleMenu && ( */}
            <Animated.View
                style={[styles.screenLabelsContainer, animatedStyle]}
            >
                {screens.map((screen, index) => (
                    <Pressable
                        onPress={() => {
                            navigation.navigate(screen.target);
                            onPress(label);
                            setToggleMenu(false);
                            slideOut();
                            // setActiveScreen(screen.name);
                        }}
                        key={index}
                        style={[
                            styles.screenLabel,
                            activeLabel === label &&
                                activeScreen === screen.name &&
                                styles.activeScreenLabel,
                        ]}
                    >
                        <View
                            style={
                                activeLabel === label &&
                                activeScreen === screen.name &&
                                styles.activeBorder
                            }
                        ></View>
                        <Text
                            style={[
                                styles.text,
                                activeLabel === label &&
                                    activeScreen === screen.name &&
                                    styles.active,
                            ]}
                        >
                            {screen.name}
                        </Text>
                    </Pressable>
                ))}
            </Animated.View>
            {/* )} */}
        </View>
    );
};

export default TestDropDown;

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 20,
        marginVertical: 12,
        overflow: "hidden",
    },
    labelContainer: {
        marginHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4,
    },
    iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.6,
    },
    label: {
        marginLeft: 10,
        fontSize: 14,
    },
    screenLabelsContainer: {
        //backgroundColor: GlobalStyles.colors.light50,
    },

    screenLabel: {
        fontSize: 14,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
    },
    activeScreenLabel: {
        //backgroundColor: GlobalStyles.colors.primary50,
    },
    active: {
        //color: GlobalStyles.colors.primary500,
    },
    text: { marginLeft: 40 },

    activeBorder: {
        // height: "100%",
        // width: 6,
        // backgroundColor: GlobalStyles.colors.primary500,
        // borderRadius: 12,
        // borderTopRightRadius: 12,
        // borderBottomRightRadius: 12,
    },
});
