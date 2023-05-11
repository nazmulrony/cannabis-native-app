import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../DashBoard/SearchBar";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";
import { inventorySelector } from "../../redux/slices/inventory.slice";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";
import RowSkeleton from "../../ui/RowSkeleton";
import TestComponent from "./ProductSwipeList";
import ProductSwipeList from "./ProductSwipeList";

const ProductsTable = () => {
    // const { inventoryProduct } = useSelector(inventorySelector);
    //const inventoryProduct = [];
    // const navigation = useNavigation();

    // const [data, setData] = useState(inventoryProduct?.slice(0, 4));

    // const [toggle, setToggle] = useState(false);

    // console.log(toggle);

    // const { inventoryProduct } = useSelector(inventorySelector);
    // const demo =
    //     inventoryProduct
    //         ?.filter((item) => item.hasOwnProperty("createdAt"))
    //         .sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt))
    //         .slice(0, 20) || [];

    // const demo = inventoryProduct;

    // const newData = demo.slice(0, 4);

    // const [data, setData] = useState(newData);

    const [toggle, setToggle] = useState(true);

    // const handleShowMore = () => {
    //     if (toggle) {
    //         setData(newData);
    //     } else {
    //         setData(demo);
    //     }
    //     setToggle(!toggle);
    // };

    // useEffect(() => {
    //     setData(inventoryProduct?.slice(0, 4));
    // }, [inventoryProduct]);

    // const handleShowMore = () => {
    //     if (toggle) {
    //         setData(inventoryProduct?.slice(0, 4));
    //     } else {
    //         setData(inventoryProduct);
    //     }
    //     setToggle(!toggle);
    // };
    // console.log(data.length);
    // const handleDetails = (product) => {
    // console.log(product);
    // navigation.navigate("InventoryProductDetailsScreen", product);
    // };
    return (
        <ScrollView
            style={styles.container}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
        >
            <SearchBar style={{ marginBottom: 14 }} />
            <View style={styles.tableContainer}>
                <View>
                    <View
                        style={[styles.tableHeaderContainer, { width: "100%" }]}
                    >
                        <Text
                            style={[
                                styles.tableHeader,
                                { flex: 0.7, paddingLeft: 20 },
                            ]}
                        >
                            Product Name
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                { flex: 0.3, textAlign: "center" },
                            ]}
                        >
                            Stock
                        </Text>
                    </View>
                    {/* {isLoading ? (
                        [1, 2, 3, 4, 5, 6].map((index) => (
                            <RowSkeleton key={index} />
                        ))
                    ) : ( */}
                    {/* // <Text>Product</Text> */}
                    <ProductSwipeList
                        setToggle={setToggle}
                        toggle={toggle}
                        // data={data}
                    />
                    {/* )} */}
                    <Pressable
                        // disabled={isLoading}
                        // onPress={() => setToggle(!toggle)}
                        onPress={() => setToggle(!toggle)}
                        style={({ pressed }) =>
                            pressed ? [styles.btn, styles.pressed] : styles.btn
                        }
                    >
                        <Text style={styles.btnText}>
                            {toggle === false ? "Load more" : "Load less"}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 14,
        flex: 1,
        // borderWidth: 1,
        backgroundColor: "white",
        // height: 1000,
    },
    tableContainer: {
        paddingBottom: 14,
    },
    tableHeaderContainer: {
        backgroundColor: "#EEF8F1",
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
    },
    tableHeader: {
        color: Colors.dark400,
        fontSize: 12,
        borderRightColor: Colors.dark400,
        // textAlign: "l",
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: "#DADAD9",
        flexDirection: "row",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.gray300,
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

export default ProductsTable;
