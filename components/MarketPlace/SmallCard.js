import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Pressable,
} from "react-native";
import React from "react";

const SmallCard = (props) => {
    const { d } = props;
    return (
        <View
            style={[
                styles.cardContainer,
                {
                    backgroundColor: d.backgroundColor,
                    marginRight: props.index !== props.length - 1 ? 20 : 0,
                },
            ]}
        >
            <View>
                <Text
                    style={[
                        styles.text,
                        {
                            color: d.color,
                        },
                    ]}
                >
                    Up to {d.discount}% off
                </Text>
                <View style={styles.smallContainer}>
                    <Text
                        style={[
                            styles.text,
                            {
                                color: d.color,
                            },
                        ]}
                    >
                        {d.type}
                    </Text>
                    <Image source={d.image} />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Pressable style={[styles.btn, { borderColor: d.color }]}>
                    <Text
                        style={{
                            fontSize: 9,
                            lineHeight: 13.5,
                            fontWeight: "600",
                            color: d.color,
                        }}
                    >
                        Buy now
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get("window").width / 2 - 10,
        padding: 8,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 13,
        lineHeight: 19.5,
        fontWeight: "700",
    },
    smallContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btn: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 15,
    },
});

export default SmallCard;
