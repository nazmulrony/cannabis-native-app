import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../constants/style";
import DetailsContainer from "../components/productDetails/DetailsContainer";
import ProductDescription from "../components/productDetails/ProductDescription";
import Specifications from "../components/productDetails/Specifications";
import ProductRatings from "../components/productDetails/ProductRatings";
import BottomButtons from "../ui/BottomButtons";
import RelatedProducts from "../components/productDetails/RelatedProducts";
import { ImageBackground } from "react-native";
import { useAddToCartMutation, useGetCartQuery } from "../ApiServices/cart.service";
import { Alert } from "react-native";
import { Button, useToast } from "native-base";
import Colors from "../constants/Colors";
import TestCarousel from "../components/Auction/AuctionDetails/TestCarousel";
// import CarouselDemo from "../components/productDetails/CarouselDemo";

const MarketplaceProductDetailsScreen = ({ navigation, route }) => {
    const toast = useToast();
    const product = route.params.product;
    const [clicked, setClicked] = useState(false);
    const [addToCart, { isLoading }] = useAddToCartMutation();
    const { data: cartItems, isLoading: fetching } = useGetCartQuery();
    const exists = cartItems?.product_list?.some((item) => item?.product?.slug === product?.slug);
    const [unit, setUnit] = useState("lb");
    const [num, setNum] = useState(product?.allocations?.marketplace?.min_qty_lb);
    const [min, setMin] = useState(product?.allocations?.marketplace?.min_qty_lb);
    const scrollViewRef = useRef(null);
    // console.log(exists);
    useLayoutEffect(() => {
        navigation.setOptions({
            title:
                product?.title.length < 20 ? product?.title : `${product?.title.slice(0, 18)}...`,
        });
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }, [product?.title.length]);
    useEffect(() => {
        if (unit === "lb") {
            setNum(product?.allocations?.marketplace?.min_qty_lb);
            setMin(product?.allocations?.marketplace?.min_qty_lb);
        } else {
            setNum(product?.allocations?.marketplace?.min_qty_g);
            setMin(product?.allocations?.marketplace?.min_qty_g);
        }
    }, [unit]);
    const handleAddToCart = async () => {
        setClicked(true);
        const cart = {
            product: product?._id,
            unit: unit,
            quantity: num,
        };
        const res = await addToCart(cart);
        console.log(res);
        toast.show({
            // title: "Filters pressed",
            placement: "top",
            render: () => {
                return (
                    <View
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 12,
                            backgroundColor: Colors.green50,
                            borderWidth: 1,
                            borderColor: Colors.green500,
                            elevation: 10,
                            borderRadius: 6,
                            width: 300,
                            height: 200,
                            alignItems: "center",
                            justifyContent: "center",
                            // margin: 2,
                        }}
                    >
                        <Text
                            style={{
                                // backgroundColor: "black",
                                color: Colors.green500,
                                textAlign: "center",
                            }}
                        >
                            Product added to cart. To place your order, head to Cart
                        </Text>
                        <Button
                            mt={2}
                            py={1}
                            onPress={() => {
                                navigation.navigate("CartScreen");
                            }}
                        >
                            Go to Cart
                        </Button>
                    </View>
                );
            },
            duration: 3000,
        });
    };
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
                    <View style={styles.imageContainer}>
                        {/* <Image
                            source={
                                product?.image
                                    ? product.image
                                    : {
                                          uri: product?.images[0],
                                      }
                            }
                            style={styles.image}
                        /> */}
                        <TestCarousel paddingHorizontal={22} images={product?.images} />
                    </View>
                    {/* <CarouselDemo /> */}
                    <DetailsContainer
                        data={product}
                        unit={unit}
                        setUnit={setUnit}
                        setNum={setNum}
                    />
                    <ProductDescription />
                    <Specifications product={product} />
                    <ProductRatings ratings={"4.6 (81)"} />
                    <RelatedProducts />
                </ScrollView>
            </View>
            <View style={styles.bottomBar}>
                <BottomButtons
                    disabled={exists || isLoading || fetching || clicked}
                    onSubmit={handleAddToCart}
                    min={min}
                    num={num}
                    setNum={setNum}
                />
            </View>
        </View>
    );
};

export default MarketplaceProductDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    imageContainer: {
        width: "100%",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        overflow: "hidden",
        // alignItems: "center",
        // justifyContent: "center",
        // padding: 10,
        height: 250,
    },
    image: {
        width: "100%",
        height: 250,
        // borderWidth: 1,
        // borderRadius: 6,
    },
    container: {
        flex: 1,
        // paddingBottom: 16,
    },
    bottomBar: {
        height: 75,
        marginHorizontal: -20,
        paddingHorizontal: 30,
        //backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 20,
        backgroundColor: "white",
    },
});
