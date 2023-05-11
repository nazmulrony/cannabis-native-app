import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState, useRef } from "react";
import { Alert, Pressable } from "react-native";
import { Image } from "react-native";
import { Text, View, StyleSheet, Button, StatusBar, ScrollView } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Colors from "../../constants/Colors";
import { GlobalStyles } from "../../constants/style";
import { useEffect } from "react";
import { IconButton } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
    useDeleteProductsMutation,
    useGetProductsQuery,
} from "../../ApiServices/inventory.service";
import RowSkeleton from "../../ui/RowSkeleton";
import { useSelector } from "react-redux";
import { inventorySelector } from "../../redux/slices/inventory.slice";
import { authSelector } from "../../redux/slices/auth.slice";

const ProductSwipeList = ({ setToggle, toggle }) => {
    // const { inventoryProduct } = useSelector(inventorySelector);
    // const [listData, setListData] = useState([]);
    // useEffect(() => {
    //     if (toggle === false) {
    //         setListData([...inventoryProduct?.slice(0, 4)]);
    //     } else {
    //         setListData([...inventoryProduct]);
    //     }
    // }, [inventoryProduct, toggle]);

    const { user } = useSelector(authSelector);

    const { data, isLoading: dataLoading } = useGetProductsQuery(user?.company?.license_type, {
        skip: !user?.company?.license_type,
    });

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     if (data?.status) {
    //         setProducts(
    //             data.products
    //                 .filter((item) => item.hasOwnProperty("createdAt"))
    //                 .sort(
    //                     (a, b) =>
    //                         new Date(b?.createdAt) - new Date(a?.createdAt)
    //                 )
    //                 .slice(0, 20)
    //         );
    //     }
    // }, [data]);

    useEffect(() => {
        if (toggle) {
            setProducts(
                data?.products
                    .filter((item) => item.hasOwnProperty("createdAt"))
                    .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))
            );
        } else {
            setProducts(
                data?.products
                    .filter((item) => item.hasOwnProperty("createdAt"))
                    .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))
                    .slice(0, 4)
            );
        }
        // setNum(data?.products.length);
    }, [toggle, data]);

    // console.log(products);

    const [deleteProduct, { isLoading, isError, isSuccess }] = useDeleteProductsMutation();

    // console.log(listData.length);
    const rowRefs = useRef([]);
    const navigation = useNavigation();

    const handleDetails = (product) => {
        // console.log(product);
        navigation.navigate("InventoryProductDetailsScreen", product);
    };

    /**
     * Closes all other rows when a row is swiped open
     */
    const closeOtherRows = (index) => {
        rowRefs.current.forEach((ref, i) => {
            if (ref && index !== i) {
                ref.close();
            }
        });
    };
    // if (dataLoading) {
    //     return <Text>Loading...</Text>;
    // }

    /**
     * Renders each list item with Swipeable component
     */
    const renderItem = ({ product, index }) => {
        return (
            <Swipeable
                renderRightActions={() => (
                    <View
                        style={{
                            margin: 0,
                            // borderWidth: 1,
                            alignContent: "center",
                            justifyContent: "center",
                            // width: 70,
                            flexDirection: "row",
                            // backgroundColor: Colors.green50,
                        }}
                    >
                        <IconButton
                            disabled={isLoading}
                            colorScheme="light"
                            variant="ghost"
                            onPress={() => navigation.navigate("UpdateProductScreen", product)}
                            _icon={{
                                as: AntDesign,
                                name: "edit",
                                color: "white",
                            }}
                            style={{
                                backgroundColor: GlobalStyles.colors.primary500,
                            }}
                            rounded={"none"}
                            px={4}
                            _pressed={{ opacity: 0.6 }}
                        />
                        <IconButton
                            disabled={isLoading}
                            colorScheme="error"
                            _pressed={{ opacity: 0.6 }}
                            variant="ghost"
                            onPress={async () => {
                                await deleteProduct(product?._id);
                                if (isSuccess) {
                                    deleteItem({ product, index });
                                    setToggle(false);
                                    return;
                                }
                                if (isError) {
                                    Alert.alert(
                                        "Error",
                                        "Something went wrong while deleting the product."
                                    );
                                    return;
                                }
                            }}
                            _icon={{
                                as: AntDesign,
                                name: "delete",
                                color: "white",
                            }}
                            style={{
                                backgroundColor: GlobalStyles.colors.error500,
                            }}
                            rounded={"none"}
                            px={4}
                        />
                    </View>
                )}
                onSwipeableOpen={() => closeOtherRows(index)}
                ref={(ref) => (rowRefs.current[index] = ref)}
                rightOpenValue={-100}
            >
                <Pressable
                    onPress={() => handleDetails(product)}
                    key={product?._id}
                    style={({ pressed }) => (pressed ? [styles.row, styles.pressed] : styles.row)}
                >
                    <View
                        style={[
                            styles.dataField,
                            {
                                // width: 250,
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                paddingLeft: 16,
                            },
                        ]}
                    >
                        <Image
                            style={{
                                width: 64,
                                height: 51,
                                marginRight: 8,
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: Colors.light500,
                            }}
                            source={
                                product?.images[0]
                                    ? { uri: product?.images[0] }
                                    : require("../../assets/images/image_thumb.png")
                            }
                        />
                        <View
                            style={{
                                marginTop: 19,
                                marginBottom: 20,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.dark600,
                                    fontSize: 13,
                                    fontWeight: "500",
                                    lineHeight: 15,
                                    marginBottom: 6,
                                }}
                            >
                                {product.title.length > 20
                                    ? `${product.title.slice(0, 17)}...`
                                    : product.title}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.dark300,
                                    fontSize: 12,
                                    lineHeight: 18,
                                    fontWeight: "400",
                                }}
                            >
                                {product.category}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.dataField, { width: 123 }]}>
                        <Text style={styles.text}>Total - {product?.variants[0]?.quantity} lb</Text>
                        <Text>Sold - {product?.specifications?.total_cannabinoids || 0} lb</Text>
                    </View>
                </Pressable>
            </Swipeable>
        );
    };

    /**
     * Deletes an item from the list
     */
    const deleteItem = ({ product, index }) => {
        const updatedList = [...listData];
        updatedList.splice(index, 1);
        setListData(updatedList);
    };

    // console.log(listData);

    return (
        <>
            {dataLoading
                ? [1, 2, 3, 4, 5, 6].map((index) => <RowSkeleton key={index} />)
                : products?.map((product, index) => (
                      <View
                          style={
                              {
                                  // borderWidth: 1,
                                  // margin: 4,
                                  // borderColor: "grey",
                              }
                          }
                          key={product._id}
                      >
                          {renderItem({ product, index })}
                      </View>
                  ))}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },

    row: {
        borderBottomWidth: 1,
        borderBottomColor: "#DADAD9",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.gray100,
    },
    text: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.dark600,
        fontWeight: "400",
    },
    dataField: {
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginHorizontal: 14,
        marginTop: 10,
        marginBottom: 24,
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

export default ProductSwipeList;
