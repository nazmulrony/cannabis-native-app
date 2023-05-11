import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import Colors from "../../../constants/Colors";
import { GlobalStyles } from "../../../constants/style";

const { width } = Dimensions.get("window");

const TestCarousel = ({ images, paddingHorizontal }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.x / width);
        // console.log(currentIndex);
        setCurrentIndex(index);
    };
    return (
        <View
            style={{
                position: "relative",
            }}
        >
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={handleScroll}
                scrollEventThrottle={5}
                showsHorizontalScrollIndicator={false}
                style={[
                    styles.headerImageContainer,
                    {
                        position: "relative",
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.light500,
                    },
                ]}
            >
                {images?.length ? (
                    images?.map((url, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    // borderWidth: 2,
                                    width:
                                        Dimensions.get("screen").width -
                                        (paddingHorizontal * 2 || 0) +
                                        1.9,
                                    position: "relative",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // borderWidth: 2,
                                    borderColor: "blue",
                                }}
                            >
                                <Image
                                    source={{ uri: url }}
                                    style={[styles.headerImage]}
                                />
                            </View>
                        );
                    })
                ) : (
                    <View
                        style={{
                            borderWidth: 2,
                            width:
                                Dimensions.get("screen").width -
                                (paddingHorizontal * 2 || 0),
                        }}
                    >
                        <Image
                            source={require("../../../assets/images/image_thumb.png")}
                            style={[styles.headerImage]}
                        />
                    </View>
                )}
            </ScrollView>
            {images?.length > 0 && (
                <Text
                    style={{
                        width: 40,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "#949494",
                        color: "white",
                        textAlign: "center",
                        alignSelf: "center",
                        position: "absolute",
                        bottom: 20,
                    }}
                >
                    {currentIndex + 1}/{images?.length}
                </Text>
            )}
        </View>
    );
};

export default TestCarousel;

const styles = StyleSheet.create({
    headerImageContainer: {
        overflow: "hidden",
        // borderWidth: 1,
        borderRadius: 8,
        borderColor: GlobalStyles.colors.gray100,
        // backgroundColor: "red",
    },
    headerImage: {
        height: 250,
        // borderWidth: 5,
        width: "100%",
        // resizeMode: "contain",
        borderColor: "red",
        // borderWidth: 2,
    },
});
