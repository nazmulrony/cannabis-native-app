import { View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import React, { useState } from "react";
import SearchBar from "../DashBoard/SearchBar";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";
import { inventorySelector } from "../../redux/slices/inventory.slice";
import { useNavigation } from "@react-navigation/native";
import { Button, IconButton, Popover } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import {
    useDeleteProductsMutation,
    useGetProductsQuery,
} from "../../ApiServices/inventory.service";
import { useEffect } from "react";
import { authSelector } from "../../redux/slices/auth.slice";
import { GlobalStyles } from "../../constants/style";
import RowSkeleton from "../../ui/RowSkeleton";
import { FlatList } from "react-native";
import ActionButtons from "./ActionButtons";

const BundleTable = () => {
    // This state is for pop over controling
    // const [isOpen, setIsOpen] = useState(false);
    // const demo = [
    //     {
    //         id: "001",
    //         totalStock: 200,
    //         event: "Transporter Payment",
    //         amount: 300.0,
    //         date: "29/01/2023",
    //     },
    //     {
    //         id: "001",
    //         totalStock: 200,
    //         event: "Transporter Payment",
    //         amount: 300.0,
    //         date: "29/01/2023",
    //     },
    //     {
    //         id: "001",
    //         totalStock: 200,
    //         event: "Transporter Payment",
    //         amount: 300.0,
    //         date: "29/01/2023",
    //     },
    //     {
    //         id: "001",
    //         totalStock: 200,
    //         event: "Transporter Payment",
    //         amount: 300.0,
    //         date: "29/01/2023",
    //     },
    //     {
    //         id: "001",
    //         totalStock: 200,
    //         event: "Transporter Payment",
    //         amount: 300.0,
    //         date: "29/01/2023",
    //     },
    //     {
    //         id: "001",
    //         totalStock: 200,
    //         event: "Transporter Payment",
    //         amount: 300.0,
    //         date: "29/01/2023",
    //     },
    // ];

    const navigation = useNavigation();

    const { user } = useSelector(authSelector);

    const [deleteProduct, { isLoading, isError, isSuccess }] = useDeleteProductsMutation();

    const { data, isLoading: dataLoading } = useGetProductsQuery(user?.company?.license_type, {
        skip: !user?.company?.license_type,
    });

    const [products, setProducts] = useState([]);

    const [toggle, setToggle] = useState(true);

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

    // console.log(products?.length);

    // if (dataLoading) {
    //     return <Text>Loading...</Text>;
    // }

    // const { inventoryProduct } = useSelector(inventorySelector);

    // const demo = inventoryProduct;

    // const newData = demo.slice(0, 4);

    // const [data, setData] = useState(newData);

    // const [toggle, setToggle] = useState(false);

    // const handleShowMore = () => {
    //     if (toggle) {
    //         setData(newData);
    //     } else {
    //         setData(demo);
    //     }
    //     setToggle(!toggle);
    // };

    const handleDetails = (product) => {
        navigation.navigate("InventoryProductDetailsScreen", product);
    };

    return (
        <ScrollView
            style={styles.container}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
        >
            <SearchBar style={{ marginBottom: 14 }} />
            <View
                style={[styles.tableContainer]}
                // horizontal={true}
                // nestedScrollEnabled
            >
                <View style={{ flex: 1 }}>
                    <View style={[styles.tableHeaderContainer, { width: "100%" }]}>
                        <Text style={[styles.tableHeader, { flex: 0.7, paddingLeft: 20 }]}>
                            Product Name
                        </Text>
                        <Text style={[styles.tableHeader, { flex: 0.3 }]}>Stock</Text>
                    </View>
                    {
                        dataLoading
                            ? [1, 2, 3, 4, 5, 6].map((index) => <RowSkeleton key={index} />)
                            : products?.map((product) => (
                                  <View
                                      key={product?._id}
                                      style={{
                                          borderBottomWidth: 1,
                                          borderBottomColor: "#DADAD9",
                                      }}
                                  >
                                      <Pressable
                                          onPress={() => handleDetails(product)}
                                          key={product?._id}
                                          style={({ pressed }) =>
                                              pressed ? [styles.row, styles.pressed] : styles.row
                                          }
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
                                                      // borderWidth: 1,
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
                                                          ? {
                                                                uri: product?.images[0],
                                                            }
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
                                                      {product.title.length > 10
                                                          ? `${product.title.slice(0, 10)}...`
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
                                          <View
                                              style={[
                                                  styles.dataField,
                                                  {
                                                      width: 123,
                                                      // borderWidth: 1,
                                                      // justifyContent:
                                                      //     "flex-start",
                                                  },
                                              ]}
                                          >
                                              <Text style={styles.text}>
                                                  Total - {product?.variants[0]?.quantity} lb
                                              </Text>
                                              <Text>
                                                  Sold -{" "}
                                                  {product?.specifications?.total_cannabinoids || 0}{" "}
                                                  lb
                                              </Text>
                                          </View>
                                          <Pressable>
                                              <ActionButtons
                                                  product={product}
                                                  productId={product?._id}
                                              />
                                          </Pressable>
                                      </Pressable>
                                      {/* <Pressable
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <View style={styles.statusContainer}>
                                    <Text
                                        style={[
                                            styles.status,
                                            {
                                                marginLeft: 20,
                                                backgroundColor:
                                                    product?.status ===
                                                    "published"
                                                        ? "#E6F4FF"
                                                        : "#fcf0bf",
                                                color:
                                                    product?.status ===
                                                    "published"
                                                        ? "#2574E0"
                                                        : "#e2aa0f",
                                                borderColor:
                                                    product?.status ===
                                                    "published"
                                                        ? "#2574E0"
                                                        : "#e2aa0f",
                                                borderWidth: 0.5,
                                            },
                                        ]}
                                    >
                                        {product?.status}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        margin: 0,
                                        // borderWidth: 1,
                                        alignContent: "center",
                                        justifyContent: "center",
                                        // width: 70,
                                        flexDirection: "row",
                                    }}
                                >
                                    <IconButton
                                        disabled={isLoading}
                                        colorScheme="light"
                                        variant="ghost"
                                        onPress={() =>
                                            navigation.navigate(
                                                "UpdateProductScreen",
                                                product
                                            )
                                        }
                                        _icon={{
                                            as: AntDesign,
                                            name: "edit",
                                        }}
                                    />
                                    <IconButton
                                        disabled={isLoading}
                                        colorScheme="error"
                                        variant="ghost"
                                        onPress={async () => {
                                            await deleteProduct(
                                                product?._id
                                            );
                                            if (isSuccess) {
                                                // deleteItem({ product, index });
                                                // setToggle(false);
                                                console.log(
                                                    "Deleted Successfully."
                                                );
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
                                        }}
                                    />
                                </View>
                            </Pressable> */}
                                  </View>
                              ))

                        // <FlatList
                        //     data={products}
                        //     renderItem={({ item: product }) => (
                        //         <View
                        //             key={product?._id}
                        //             style={{
                        //                 borderBottomWidth: 1,
                        //                 borderBottomColor: "#DADAD9",
                        //             }}
                        //         >
                        //             <Pressable
                        //                 onPress={() => handleDetails(product)}
                        //                 key={product?._id}
                        //                 style={({ pressed }) =>
                        //                     pressed
                        //                         ? [styles.row, styles.pressed]
                        //                         : styles.row
                        //                 }
                        //             >
                        //                 <View
                        //                     style={[
                        //                         styles.dataField,
                        //                         {
                        //                             // width: 250,
                        //                             flex: 1,
                        //                             flexDirection: "row",
                        //                             justifyContent:
                        //                                 "flex-start",
                        //                             paddingLeft: 16,
                        //                             // borderWidth: 1,
                        //                         },
                        //                     ]}
                        //                 >
                        //                     <Image
                        //                         style={{
                        //                             width: 64,
                        //                             height: 51,
                        //                             marginRight: 8,
                        //                             borderRadius: 5,
                        //                             borderWidth: 1,
                        //                             borderColor:
                        //                                 Colors.light500,
                        //                         }}
                        //                         source={
                        //                             product?.images[0]
                        //                                 ? {
                        //                                       uri: product
                        //                                           ?.images[0],
                        //                                   }
                        //                                 : require("../../assets/images/image_thumb.png")
                        //                         }
                        //                     />
                        //                     <View
                        //                         style={{
                        //                             marginTop: 19,
                        //                             marginBottom: 20,
                        //                         }}
                        //                     >
                        //                         <Text
                        //                             style={{
                        //                                 color: Colors.dark600,
                        //                                 fontSize: 13,
                        //                                 fontWeight: "500",
                        //                                 lineHeight: 15,
                        //                                 marginBottom: 6,
                        //                             }}
                        //                         >
                        //                             {product.title.length > 20
                        //                                 ? `${product.title.slice(
                        //                                       0,
                        //                                       17
                        //                                   )}...`
                        //                                 : product.title}
                        //                         </Text>
                        //                         <Text
                        //                             style={{
                        //                                 color: Colors.dark300,
                        //                                 fontSize: 12,
                        //                                 lineHeight: 18,
                        //                                 fontWeight: "400",
                        //                             }}
                        //                         >
                        //                             {product.category}
                        //                         </Text>
                        //                     </View>
                        //                 </View>
                        //                 <View
                        //                     style={[
                        //                         styles.dataField,
                        //                         {
                        //                             width: 123,
                        //                             // borderWidth: 1,
                        //                             // justifyContent:
                        //                             //     "flex-start",
                        //                         },
                        //                     ]}
                        //                 >
                        //                     <Text style={styles.text}>
                        //                         Total -{" "}
                        //                         {product?.variants[0]?.quantity}{" "}
                        //                         lb
                        //                     </Text>
                        //                     <Text>
                        //                         Sold -{" "}
                        //                         {product?.specifications
                        //                             ?.total_cannabinoids ||
                        //                             0}{" "}
                        //                         lb
                        //                     </Text>
                        //                 </View>
                        //                 <Pressable>
                        //                     <ActionButtons
                        //                         product={product}
                        //                         productId={product?._id}
                        //                     />
                        //                 </Pressable>
                        //             </Pressable>
                        //             {/* <Pressable
                        //                 style={{
                        //                     flexDirection: "row",
                        //                     alignItems: "center",
                        //                     justifyContent: "space-between",
                        //                 }}
                        //             >
                        //                 <View style={styles.statusContainer}>
                        //                     <Text
                        //                         style={[
                        //                             styles.status,
                        //                             {
                        //                                 marginLeft: 20,
                        //                                 backgroundColor:
                        //                                     product?.status ===
                        //                                     "published"
                        //                                         ? "#E6F4FF"
                        //                                         : "#fcf0bf",
                        //                                 color:
                        //                                     product?.status ===
                        //                                     "published"
                        //                                         ? "#2574E0"
                        //                                         : "#e2aa0f",
                        //                                 borderColor:
                        //                                     product?.status ===
                        //                                     "published"
                        //                                         ? "#2574E0"
                        //                                         : "#e2aa0f",
                        //                                 borderWidth: 0.5,
                        //                             },
                        //                         ]}
                        //                     >
                        //                         {product?.status}
                        //                     </Text>
                        //                 </View>
                        //                 <View
                        //                     style={{
                        //                         margin: 0,
                        //                         // borderWidth: 1,
                        //                         alignContent: "center",
                        //                         justifyContent: "center",
                        //                         // width: 70,
                        //                         flexDirection: "row",
                        //                     }}
                        //                 >
                        //                     <IconButton
                        //                         disabled={isLoading}
                        //                         colorScheme="light"
                        //                         variant="ghost"
                        //                         onPress={() =>
                        //                             navigation.navigate(
                        //                                 "UpdateProductScreen",
                        //                                 product
                        //                             )
                        //                         }
                        //                         _icon={{
                        //                             as: AntDesign,
                        //                             name: "edit",
                        //                         }}
                        //                     />
                        //                     <IconButton
                        //                         disabled={isLoading}
                        //                         colorScheme="error"
                        //                         variant="ghost"
                        //                         onPress={async () => {
                        //                             await deleteProduct(
                        //                                 product?._id
                        //                             );
                        //                             if (isSuccess) {
                        //                                 // deleteItem({ product, index });
                        //                                 // setToggle(false);
                        //                                 console.log(
                        //                                     "Deleted Successfully."
                        //                                 );
                        //                                 return;
                        //                             }
                        //                             if (isError) {
                        //                                 Alert.alert(
                        //                                     "Error",
                        //                                     "Something went wrong while deleting the product."
                        //                                 );
                        //                                 return;
                        //                             }
                        //                         }}
                        //                         _icon={{
                        //                             as: AntDesign,
                        //                             name: "delete",
                        //                         }}
                        //                     />
                        //                 </View>
                        //             </Pressable> */}
                        //         </View>
                        //     )}
                        //     getItemLayout={(data, index) => ({
                        //         length: 103,
                        //         offset: 103 * index,
                        //         index,
                        //     })}
                        //     keyExtractor={(item) => item?._id}
                        //     nestedScrollEnabled
                        // />
                    }

                    <Pressable
                        onPress={() => setToggle(!toggle)}
                        style={({ pressed }) =>
                            pressed ? [styles.btn, styles.pressed] : styles.btn
                        }
                    >
                        <Text style={styles.btnText}>{toggle ? "Load less" : "Load more"}</Text>
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
        // height: 500,
        // borderWidth: 1,
        backgroundColor: "white",
        // height: 1000,
    },
    tableContainer: {
        paddingBottom: 14,
        flex: 1,
    },
    tableHeaderContainer: {
        backgroundColor: "#EEF8F1",
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        width: "100%",
    },
    tableHeader: {
        color: Colors.dark400,
        fontSize: 12,
        borderRightColor: Colors.dark400,
        // textAlign: "center",
    },
    row: {
        // borderBottomWidth: 1,
        // borderBottomColor: "#DADAD9",
        flexDirection: "row",
        alignItems: "center",
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
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.gray300,
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    status: {
        textAlign: "center",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "#E6F4FF",
        color: "#2574E0",
        justifyContent: "center",
        fontSize: 10,
        lineHeight: 14.5,
        fontWeight: "400",
    },
    lightText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "400",
        color: Colors.dark500,
    },
});

export default BundleTable;
