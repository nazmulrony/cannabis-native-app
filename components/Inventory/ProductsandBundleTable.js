import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import ProductsTable from "./ProductsTable";
import BundleTable from "./BundleTable";
import { useSelector } from "react-redux";
import { inventorySelector } from "../../redux/slices/inventory.slice";
import InventoryTopTabs from "../../navigators/InventoryTopTabs";
import { useGetProductsQuery } from "../../ApiServices/inventory.service";
import { authSelector } from "../../redux/slices/auth.slice";

const ProductsandBundleTable = () => {
    // const { inventoryProduct } = useSelector(inventorySelector);
    // console.log(inventoryProduct);
    // const [num, setNum] = useState(0);
    // const menu = [
    //     { name: "Products", notifications: num },
    //     { name: "Bundle", notifications: num },
    // ];
    // const [active, setActive] = useState(menu[0].name);
    const { user } = useSelector(authSelector);

    const { data, isLoading: dataLoading } = useGetProductsQuery(
        user?.company?.license_type,
        {
            skip: !user?.company?.license_type,
        }
    );
    if (dataLoading) {
        return <Text>Data loading...</Text>;
    }
    return (
        <View
            style={[styles.container, { borderWidth: 3, borderColor: "blue" }]}
        >
            <InventoryTopTabs />
            {/* <View style={{ flexDirection: "row", flex: 1 }}>
                {menu.map((m, index) => (
                    <Pressable
                        onPress={() => setActive(m.name)}
                        key={index}
                        style={
                            active === m.name ? styles.active : styles.inactive
                        }
                    >
                        <Text
                            style={
                                active === m.name
                                    ? styles.activeText
                                    : styles.inactiveText
                            }
                        >
                            {m.name}
                        </Text>
                        <View
                            style={
                                active === m.name
                                    ? styles.activeNotificationContainer
                                    : styles.notificationContainer
                            }
                        >
                            <Text style={styles.notifications}>
                                {m?.notifications}
                            </Text>
                        </View>
                    </Pressable>
                ))}
                <View
                    style={{
                        borderBottomWidth: 2,
                        flex: 1 - menu.length * 0.3,
                        borderBottomColor: "#D9D9D9",
                    }}
                />
            </View> */}
            {/* {active === menu[0].name && <ProductsTable setNum={setNum} />}
            {active === menu[1].name && <BundleTable setNum={setNum} />} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        backgroundColor: "white",
        marginBottom: 20,
        flex: 1,
        // height: "auto",
    },
    // inactive: {
    //     padding: 14,
    //     borderBottomWidth: 2,
    //     borderBottomColor: "#D9D9D9",
    //     flex: 0.3,
    //     flexDirection: "row",
    // },
    // active: {
    //     padding: 14,
    //     borderBottomWidth: 2,
    //     borderBottomColor: Colors.green500,
    //     flex: 0.3,
    //     flexDirection: "row",
    // },
    // inactiveText: {
    //     fontSize: 16,
    //     lineHeight: 19,
    //     fontWeight: "500",
    //     color: Colors.dark300,
    //     marginRight: 6,
    // },
    // activeText: {
    //     fontSize: 16,
    //     lineHeight: 19,
    //     fontWeight: "500",
    //     color: Colors.green500,
    //     marginRight: 6,
    // },
    // notificationContainer: {
    //     width: 24,
    //     height: 24,
    //     backgroundColor: Colors.dark300,
    //     borderRadius: 12,
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
    // activeNotificationContainer: {
    //     width: 24,
    //     height: 24,
    //     backgroundColor: Colors.green500,
    //     borderRadius: 12,
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
    // notifications: {
    //     fontSize: 12,
    //     fontWeight: "700",
    //     lineHeight: 14.5,
    //     color: "white",
    // },
});

export default ProductsandBundleTable;
