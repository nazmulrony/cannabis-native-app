import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import AddProduct from "../components/Inventory/AddProduct";
import InfoCards from "../components/Inventory/InfoCards";
import ProductsandBundleTable from "../components/Inventory/ProductsandBundleTable";
import { useGetProductsQuery } from "../ApiServices/inventory.service";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../redux/slices/auth.slice";
import { inventorySelector, setInventoryProduct } from "../redux/slices/inventory.slice";
import { FlatList } from "react-native";
import InventoryTopTabs from "../navigators/InventoryTopTabs";
import RowSkeleton from "../ui/RowSkeleton";

const InventoryScreen = () => {
    const { user } = useSelector(authSelector);
    // const dispatch = useDispatch();
    const { data, isLoading } = useGetProductsQuery(user?.company?.license_type, {
        skip: !user?.company?.license_type,
    });
    // console.log(data?.products?.length);
    // console.log(user?.company?.license_type);
    // useEffect(() => {
    //     // console.log(data);
    //     if (data?.status) {
    //         dispatch(setInventoryProduct(data?.products));
    //     }
    // }, [data]);
    // if (isLoading) {
    //     return <Text>Loading...</Text>;
    // }
    return (
        <View style={styles.container}>
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <Text style={styles.titleText}>Inventory</Text>
                <AddProduct />
                <InfoCards />
                <ProductsandBundleTable />
            </ScrollView> */}
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                style={{ borderWidth: 2, borderColor: "green" }}
                data={[{ key: 1 }]}
                renderItem={() => (
                    <View style={{}}>
                        <Text style={styles.titleText}>Inventory</Text>
                        <AddProduct />
                        <InfoCards />
                        <ProductsandBundleTable />
                        <Text>End</Text>
                    </View>
                )}
                keyExtractor={(item) => item.key}
                // key={"_"}
            /> */}
            {/* <StatusBar barStyle={"dark-content"} /> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    // borderWidth: 2,
                    // borderColor: "green",
                    // backgroundColor: "white",
                }}
            >
                <Text style={styles.titleText}>Inventory</Text>
                <AddProduct />
                <InfoCards />
                {isLoading ? (
                    [1, 2, 3, 4, 5, 6].map((index) => <RowSkeleton key={index} />)
                ) : (
                    <View
                        style={{
                            flex: 1,
                            // minHeight: 120 * data?.products?.length,
                            minHeight: Dimensions.get("window").height - 120,
                            // borderWidth: 1,
                            // backgroundColor: "green",
                        }}
                    >
                        <InventoryTopTabs />
                    </View>
                )}
                {/* <Text style={{marginTop: 100, borderWidth: 1}}>End</Text> */}
            </ScrollView>
            {/* <Text style={styles.titleText}>Inventory</Text>
            <InventoryTopTabs /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // borderWidth: 1,
        // paddingTop: 10,
        //marginTop: StatusBar.currentHeight,
    },
    titleText: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: Colors.dark600,
        marginBottom: 17,
        marginTop: 16,
    },
});

export default InventoryScreen;
