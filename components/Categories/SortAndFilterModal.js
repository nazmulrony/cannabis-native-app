import {
    View,
    Text,
    Modal,
    Pressable,
    ScrollView,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import Colors from "../../constants/Colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import CommonModal from "./CommonModal";
import CategoryModal from "./CategoryModal";
import SortModal from "./SortModal";
import OrderOnlineModal from "./OrderOnlineModal";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SortAndFilterModal = ({
    sortAndFilterModalIsOpen,
    setSortAndFilterModalIsOpen,
    selected,
    setSelected,
    setSelectedFilters,
    selectedFilters,
    sort,
    setSort,
    checkboxData,
    setCheckboxData,
}) => {
    const [title, setTitle] = useState(null);
    const [commonModalIsOpen, setCommonModalIsOpen] = useState(false);
    const [categoriesModalIsOpen, setCategoriesModalIsOpen] = useState(false);
    const [sortModalIsOpen, setSortModalIsOpen] = useState(false);
    const [orderOnlineModalIsOpen, setOrderOnlineModalIsOpen] = useState(false);
    const subCategoriesData = [
        "Sort",
        "Categories",
        "Order online",
        "Distance",
        "Amenities",
        "Flavors",
        "Moods & activities",
        "Genetics",
        "Effects",
        "Terpenes",
        "Cannabinoids",
        "Strains",
        "THC dominant",
        "Edible dosage",
        "CBD extraction",
        "Brands",
        "Business type",
        "Weight",
        "Price",
    ];
    return (
        <Modal
            transparent={true}
            visible={sortAndFilterModalIsOpen}
            animationType="slide"
            onRequestClose={() => {
                setSortAndFilterModalIsOpen(false);
            }}
        >
            <Pressable
                onPress={() => {
                    setSortAndFilterModalIsOpen(false);
                }}
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                <Pressable
                    onPress={() => {
                        //console.log("pressed inside");
                    }}
                    style={{
                        height: HEIGHT - 40,
                        width: WIDTH,
                        backgroundColor: "white",
                        borderRadius: 10,
                        //paddingHorizontal: 10,
                        paddingVertical: 16,
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            paddingHorizontal: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.light500,
                            paddingBottom: 16,
                        }}
                    >
                        <Pressable
                            onPress={() => {
                                console.log("Reset");
                            }}
                            style={{ flex: 0.3 }}
                        >
                            <Text
                                style={{
                                    color: Colors.green500,
                                    fontSize: 16,
                                    lineHeight: 22,
                                    fontWeight: "400",
                                    //marginRight: 80,
                                }}
                            >
                                Reset
                            </Text>
                        </Pressable>
                        <Text
                            style={{
                                color: Colors.dark600,
                                fontSize: 16,
                                lineHeight: 22,
                                fontWeight: "600",
                                //marginRight: 102,
                                flex: 0.3,
                                textAlign: "center",
                            }}
                        >
                            Filter & Sort
                        </Text>
                        <Pressable
                            onPress={() => {
                                setSortAndFilterModalIsOpen(false);
                            }}
                            style={{
                                flex: 0.3,
                                alignItems: "flex-end",
                            }}
                        >
                            <AntDesign name="close" size={16} color="black" />
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.light500,
                            paddingVertical: 16,
                        }}
                    >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {subCategoriesData.map((item, index) => (
                                <Pressable
                                    key={index}
                                    onPress={() => {
                                        setTitle(item);
                                        if (item === "Categories") {
                                            setCategoriesModalIsOpen(true);
                                            return;
                                        }
                                        if (item === "Sort") {
                                            setSortModalIsOpen(true);
                                            return;
                                        }
                                        if (item === "Order online") {
                                            setOrderOnlineModalIsOpen(true);
                                            return;
                                        }
                                        setCommonModalIsOpen(true);
                                    }}
                                    style={{
                                        width: "100%",
                                        marginBottom: 20,
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "100%",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                lineHeight: 24,
                                                color: "#1A1A1A",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {item}
                                        </Text>
                                        <Entypo
                                            name="chevron-thin-down"
                                            size={16}
                                            color={Colors.dark600}
                                        />
                                    </View>
                                    {selected &&
                                        item === "Categories" &&
                                        selected !== "All" && (
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    lineHeight: 18,
                                                    color: "#8D8D97",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                {selected}
                                            </Text>
                                        )}
                                    {sort && item === "Sort" && (
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                lineHeight: 18,
                                                color: "#8D8D97",
                                                fontWeight: "400",
                                            }}
                                        >
                                            {sort}
                                        </Text>
                                    )}
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{ marginVertical: 16 }}>
                        <PrimaryButton
                            onPress={() => setSortAndFilterModalIsOpen(false)}
                            style={{ width: WIDTH - 40 }}
                        >
                            View Results
                        </PrimaryButton>
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
                            setOrderOnlineModalIsOpen={
                                setOrderOnlineModalIsOpen
                            }
                            setSelectedFilters={setSelectedFilters}
                            selectedFilters={selectedFilters}
                            checkboxData={checkboxData}
                            setCheckboxData={setCheckboxData}
                        />
                        <CommonModal
                            commonModalTitle={title}
                            commonModalIsOpen={commonModalIsOpen}
                            setCommonModalIsOpen={setCommonModalIsOpen}
                        />
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
};

export default SortAndFilterModal;
