import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import { GlobalStyles } from "../constants/style";

const AnimatedDropDownMenu = ({ label, children, activeParent, icon }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const progress = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: progress.value,
        };
    }, []);

    const dynamicHeight = children.length;
    // console.log(children);

    const slideIn = () => {
        progress.value = withTiming(55 * dynamicHeight, { duration: 300 });
    };
    const slideOut = () => {
        progress.value = withTiming(0, { duration: 300 });
    };
    return (
        <View
            style={{
                marginHorizontal: 8,
                overflow: "hidden",
            }}
        >
            <Pressable
                onPress={() => {
                    setToggleMenu(!toggleMenu);
                    if (toggleMenu) {
                        slideOut();
                    } else {
                        slideIn();
                    }
                }}
                style={styles.labelContainer}
            >
                <View style={styles.iconTextContainer}>
                    {icon}
                    <Text
                        style={[
                            styles.label,
                            activeParent === label && { color: "green" },
                        ]}
                    >
                        {label}{" "}
                    </Text>
                </View>
                {toggleMenu ? (
                    <Ionicons
                        name="chevron-down"
                        size={22}
                        color={
                            activeParent === label
                                ? GlobalStyles.colors.primary500
                                : "black"
                        }
                    />
                ) : (
                    <Ionicons
                        name="chevron-up"
                        size={22}
                        color={
                            activeParent === label
                                ? GlobalStyles.colors.primary500
                                : "black"
                        }
                    />
                )}
            </Pressable>

            {/* {toggleMenu && ( */}
            <Animated.View style={[{ marginLeft: "0%" }, animatedStyle]}>
                {children}
            </Animated.View>
            {/* )} */}
        </View>
    );
};

export default AnimatedDropDownMenu;

const styles = StyleSheet.create({
    labelContainer: {
        // padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4,
    },
    iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        marginLeft: 4,
    },
    active: {
        color: GlobalStyles.colors.primary500,
    },
});
