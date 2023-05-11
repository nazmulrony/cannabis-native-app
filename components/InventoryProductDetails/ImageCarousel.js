import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { GlobalStyles } from "../../constants/style";
import { ScrollView } from "react-native";
import { Image } from "react-native";

const { width } = Dimensions.get("window");

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.x / width);
        // console.log(currentIndex);
        setCurrentIndex(index);
    };
    return (
        <View style={{ position: "relative" }}>
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
                {images?.map((url, index) => {
                    return url ? (
                        <View
                            key={index}
                            style={{
                                // borderWidth: 2,
                                width: Dimensions.get("screen").width,
                                position: "relative",
                            }}
                        >
                            <Image source={{ uri: url }} style={[styles.headerImage]} />
                            {/* <Text
                                        style={{
                                            width: 40,
                                            height: 20,
                                            borderRadius: 100,
                                            backgroundColor: "#949494",
                                            color: "white",
                                            textAlign: "center",
                                            alignSelf: "center",
                                            position: "relative",
                                            bottom: 20,
                                        }}
                                    >
                                        {index + 1}/{product?.images?.length}
                                    </Text> */}
                        </View>
                    ) : (
                        <View
                            key={index}
                            style={{
                                borderWidth: 2,
                                width: Dimensions.get("screen").width,
                            }}
                        >
                            <Image
                                source={require("../../assets/images/image_thumb.png")}
                                style={[styles.headerImage]}
                            />
                        </View>
                    );
                })}

                {/* {imageUrl ? (
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.headerImage}
                            />
                        ) : (
                            <Image
                                source={require("../assets/images/image_thumb.png")}
                                style={styles.headerImage}
                            />
                        )} */}
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
                        bottom: 24,
                    }}
                >
                    {currentIndex + 1}/{images?.length}
                </Text>
            )}
        </View>
    );
};

export default ImageCarousel;

const styles = StyleSheet.create({
    headerImageContainer: {
        overflow: "hidden",
        // borderWidth: 1,
        borderRadius: 8,
        borderColor: GlobalStyles.colors.gray100,
        // backgroundColor: "red",
    },
    headerImage: {
        height: 220,
        borderWidth: 5,
        // resizeMode: "contain",
    },
});
