import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Dimensions,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { GlobalStyles } from "../constants/style";
import ProductInfo from "../components/InventoryProductDetails/ProductInfo";
import Specifications from "../components/InventoryProductDetails/Specifications";
import Colors from "../constants/Colors";
import InventoryDetailsTopTabs from "../navigators/InventoryDetailsTopTabs";
import ImageCarousel from "../components/InventoryProductDetails/ImageCarousel";

const { width } = Dimensions.get("window");

const InventoryProductDetailsScreen = ({ navigation, route }) => {
    const product = route.params;
    const [imageUrl, setImageUrl] = useState(product?.images[0]);
    useLayoutEffect(() => {
        navigation.setOptions({ title: product.title });
    }, []);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleScroll = (event) => {
    //     const { contentOffset } = event.nativeEvent;
    //     const index = Math.round(contentOffset.x / width);
    //     // console.log(currentIndex);
    //     setCurrentIndex(index);
    // };

    // console.log(currentIndex);

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                        }}
                    >
                        {/* <ScrollView
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
                            {product?.images?.map((url, index) => {
                                return url ? (
                                    <View
                                        key={index}
                                        style={{
                                            width:
                                                Dimensions.get("screen").width -
                                                40,
                                            position: "relative",
                                        }}
                                    >
                                        <Image
                                            source={{ uri: url }}
                                            style={[styles.headerImage]}
                                        />
                                    </View>
                                ) : (
                                    <View
                                        key={index}
                                        style={{
                                            borderWidth: 2,
                                            width:
                                                Dimensions.get("screen").width -
                                                40,
                                        }}
                                    >
                                        <Image
                                            source={require("../assets/images/image_thumb.png")}
                                            style={[styles.headerImage]}
                                        />
                                    </View>
                                );
                            })}
                        </ScrollView>
                        {product?.images?.length > 0 && (
                            <Text
                                style={{
                                    width: 40,
                                    height: 20,
                                    borderRadius: 100,
                                    backgroundColor: "#949494",
                                    color: "white",
                                    textAlign: "center",
                                    alignSelf: "center",
                                    position: "relative",
                                    bottom: 40,
                                }}
                            >
                                {currentIndex + 1}/{product?.images?.length}
                            </Text>
                        )} */}
                        <ImageCarousel images={product?.images} />
                        {/* <View style={styles.imagesContainer}>
                            {product?.images?.map((url, index) => {
                                return (
                                    <Pressable
                                        key={index}
                                        onPress={() => setImageUrl(url)}
                                    >
                                        <Image
                                            source={{ uri: url }}
                                            style={styles.thumbImage}
                                        />
                                    </Pressable>
                                );
                            })}
                        </View> */}
                        <ProductInfo product={product} />
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            backgroundColor: "white",
                            paddingHorizontal: 20,
                            borderRadius: 8,
                            flex: 1,
                            minHeight: 300,
                        }}
                    >
                        <InventoryDetailsTopTabs />
                    </View>
                    {/* <Specifications product={product} /> */}
                </ScrollView>
            </View>
        </View>
    );
};

export default InventoryProductDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // paddingHorizontal: 20,
        // backgroundColor: "white",
    },
    container: {
        flex: 1,
        // paddingHorizontal: 20,
        width: "100%",
        // backgroundColor: "white",
    },
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

    imagesContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 8,
    },
    thumbImage: {
        height: 70,
        width: 70,
        marginHorizontal: 8,
    },
});
