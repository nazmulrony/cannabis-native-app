import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    FlatList,
    Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Card from "../../components/MarketPlace/Card";
import SearchBar from "../../components/DashBoard/SearchBar";
import { filterOptionNames } from "../../dummyData";
import CategoryModal from "../../components/Categories/CategoryModal";
import SortModal from "../../components/Categories/SortModal";
import OrderOnlineModal from "../../components/Categories/OrderOnlineModal";
import CommonModal from "../../components/Categories/CommonModal";
import SortAndFilterModal from "../../components/Categories/SortAndFilterModal";
import { useSelector } from "react-redux";
import { marketplaceSelector } from "../../redux/slices/marketplace.slice";
import { useGetSearchProductsQuery } from "../../ApiServices/marketplace.service";
import CardSkeleton from "../../ui/CardSkeleton";

const CategoriesScreen = ({ route, navigation }) => {
    const category = route.params.category;
    // console.log(category);
    const { data, isLoading } = useGetSearchProductsQuery(category, {
        refetchOnMountOrArgChange: true,
    });
    const { products } = data || {};
    // console.log(products);
    const [selectedFilters, setSelectedFilters] = useState([
        { name: "Categories", isSelected: true },
    ]);

    //console.log(category, marketplaceProducts);
    //console.log(items);
    const [filterLength, setFilterLength] = useState(0);
    const [active, setActive] = useState("");
    const [sortAndFilterModalIsOpen, setSortAndFilterModalIsOpen] =
        useState(false);
    const [categoriesModalIsOpen, setCategoriesModalIsOpen] = useState(false);
    const [selected, setSelected] = useState(route.params.name);
    const [sortModalIsOpen, setSortModalIsOpen] = useState(false);
    const [sort, setSort] = useState(null);
    const [orderOnlineModalIsOpen, setOrderOnlineModalIsOpen] = useState(false);
    const [checkboxData, setCheckboxData] = useState([
        {
            name: "Order Online",
            isSelected: false,
        },
        {
            name: "Order Delivery",
            isSelected: false,
        },
    ]);
    const [commonModalIsOpen, setCommonModalIsOpen] = useState(false);
    const [commonModalTitle, setCommonModalTitle] = useState("");
    //const [orderOnline, setOrderOnline] = useState(null);

    //const [active, setActive] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.name,
            // title: active,
        });
    }, []);

    useEffect(() => {
        let len = 0;
        const key = "name";
        const unique = [
            ...new Map(
                selectedFilters.map((item) => [item[key], item])
            ).values(),
        ];
        unique.map((sf) => {
            if (sf.isSelected === true) {
                len = len + 1;
            }
        });
        setFilterLength(len);
    }, [selectedFilters]);

    return (
        <View style={styles.container}>
            <SortAndFilterModal
                sortAndFilterModalIsOpen={sortAndFilterModalIsOpen}
                setSortAndFilterModalIsOpen={setSortAndFilterModalIsOpen}
                commonModalIsOpen={commonModalIsOpen}
                setCommonModalIsOpen={setCommonModalIsOpen}
                selected={selected}
                setSelected={setSelected}
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
                sort={sort}
                setSort={setSort}
                checkboxData={checkboxData}
                setCheckboxData={setCheckboxData}
            />
            <CategoryModal
                categoriesModalIsOpen={categoriesModalIsOpen}
                setCategoriesModalIsOpen={setCategoriesModalIsOpen}
                selected={selected}
                setSelected={setSelected}
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
            />
            <SortModal
                sortModalIsOpen={sortModalIsOpen}
                setSortModalIsOpen={setSortModalIsOpen}
                sort={sort}
                setSort={setSort}
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
            />
            <OrderOnlineModal
                orderOnlineModalIsOpen={orderOnlineModalIsOpen}
                setOrderOnlineModalIsOpen={setOrderOnlineModalIsOpen}
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
                checkboxData={checkboxData}
                setCheckboxData={setCheckboxData}
            />
            <CommonModal
                commonModalTitle={commonModalTitle}
                commonModalIsOpen={commonModalIsOpen}
                setCommonModalIsOpen={setCommonModalIsOpen}
            />
            {/* <View style={styles.subCategoriesContainer}>
                <Pressable
                    style={{ flex: 0.5 }}
                    onPress={() => setActive("All")}
                >
                    <Text
                        style={
                            active === "All"
                                ? styles.subCategoryActive
                                : styles.subCategory
                        }
                    >
                        All
                    </Text>
                </Pressable>
                <Pressable
                    style={{ flex: 0.5 }}
                    onPress={() => setActive("Products")}
                >
                    <Text
                        style={
                            active === "Products"
                                ? styles.subCategoryActive
                                : styles.subCategory
                        }
                    >
                        Products
                    </Text>
                </Pressable>
            </View> */}

            <SearchBar style={{ marginHorizontal: 20, marginBottom: 0 }} />

            <View style={{ marginVertical: 20 }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: 20 }}
                    horizontal={true}
                >
                    {filterOptionNames.map((cat, index) => (
                        <Pressable
                            key={index}
                            style={
                                index === filterOptionNames.length - 1
                                    ? [
                                        filterLength
                                            ? {
                                                ...styles.categoriesBtn,
                                                backgroundColor:
                                                    Colors.green500,
                                                marginRight: 0,
                                            }
                                            : {
                                                ...styles.categoriesBtn,
                                                marginRight: 0,
                                            },
                                    ]
                                    : [
                                        selectedFilters.find((sf) => {
                                            return (
                                                sf.name === cat &&
                                                sf.isSelected
                                            );
                                        })
                                            ? {
                                                ...styles.categoriesBtn,
                                                backgroundColor:
                                                    Colors.green500,
                                            }
                                            : styles.categoriesBtn,
                                    ]
                            }
                            onPress={() => {
                                setActive(cat);
                                if (cat === "Categories") {
                                    setCategoriesModalIsOpen(true);
                                    return;
                                }
                                if (cat === "Sort") {
                                    setSortModalIsOpen(true);
                                    return;
                                }
                                if (cat === "Order online") {
                                    setOrderOnlineModalIsOpen(true);
                                    return;
                                }
                                if (index === filterOptionNames.length - 1) {
                                    setSortAndFilterModalIsOpen(true);
                                    return;
                                }
                                setCommonModalTitle(cat);
                                setCommonModalIsOpen(true);
                            }}
                        >
                            {index === filterOptionNames.length - 1 ? (
                                <Text
                                    style={
                                        filterLength
                                            ? {
                                                ...styles.categoriesText,
                                                color: "white",
                                            }
                                            : styles.categoriesText
                                    }
                                >
                                    {filterLength ? filterLength : ""}
                                </Text>
                            ) : (
                                <Text
                                    style={
                                        selectedFilters.find((sf) => {
                                            return (
                                                sf.name === cat && sf.isSelected
                                            );
                                        })
                                            ? {
                                                ...styles.categoriesText,
                                                color: "white",
                                            }
                                            : styles.categoriesText
                                    }
                                >
                                    {cat}
                                </Text>
                            )}
                            {index === filterOptionNames.length - 1 ? (
                                <Ionicons
                                    name="options"
                                    size={20}
                                    color={
                                        filterLength ? "white" : Colors.dark600
                                    }
                                />
                            ) : (
                                <Entypo
                                    name="chevron-down"
                                    size={20}
                                    color={
                                        selectedFilters.find((sf) => {
                                            return (
                                                sf.name === cat && sf.isSelected
                                            );
                                        })
                                            ? "white"
                                            : Colors.dark600
                                    }
                                />
                            )}
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            <View style={{ flex: 1, marginHorizontal: 20 }}>
                {isLoading ? (
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6]}
                        renderItem={({ index }) => <CardSkeleton key={index} />}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                ) : products?.length ? (
                    <FlatList
                        data={products}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() =>
                                    navigation.navigate("MarketplaceProductDetailsScreen", {
                                        product: item,
                                    })
                                }
                                style={({ pressed }) => {
                                    const baseStyle = {
                                        marginRight: index % 2 === 0 ? 20 : 0,
                                        marginBottom: 20,
                                    };
                                    const pressedStyle = { opacity: 0.7 };
                                    return [baseStyle, pressed && pressedStyle];
                                }}
                            >
                                <Card product={item} />
                            </Pressable>
                        )}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: 100,
                        }}
                    >
                        <Image
                            source={require("../../assets/images/no-product-thumb.png")}
                            style={{ width: "80%", resizeMode: "contain" }}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    subCategoriesContainer: {
        flexDirection: "row",
        width: "100%",
    },
    subCategory: {
        textAlign: "center",
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "400",
        color: "#333333",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#EEEEEE",
        paddingVertical: 8,
    },
    subCategoryActive: {
        textAlign: "center",
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "600",
        color: "#333333",
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderTopColor: "#EEEEEE",
        borderBottomColor: "#4CAF50",
        paddingVertical: 8,
    },
    categoriesBtn: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#F2F3F4",
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
    },
    categoriesText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "500",
        marginRight: 2,
    },
});

export default CategoriesScreen;
