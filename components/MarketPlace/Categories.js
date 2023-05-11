import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Pressable,
    Alert,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
    const navigation = useNavigation();
    const data = [
        {
            name: "Vape Pen",
            image: require("../../assets/categories/cat1.png"),
            category: "vape-pens",
        },
        {
            name: "Flower",
            image: require("../../assets/categories/cat2.png"),
            category: "flower",
        },
        {
            name: "Concentrates",
            image: require("../../assets/categories/cat3.png"),
            category: "concentrates",
        },
        {
            name: "Pre roll",
            image: require("../../assets/categories/cat4.png"),
            category: "pre-roll",
        },
        {
            name: "CBD",
            image: require("../../assets/categories/cat5.png"),
            category: "cbd",
        },
        {
            name: "Topicals",
            image: require("../../assets/categories/cat6.png"),
            category: "topicals",
        },
    ];

    const handlePress = (d) => {
        navigation.navigate("CategoriesScreen", d);
    };

    return (
        <View style={{ marginBottom: 6, paddingHorizontal: 16 }}>
            <Text style={styles.title}>Explore Popular Categories</Text>
            <View style={styles.categoriesContainer}>
                {data.map((d, index) => (
                    <Pressable
                        onPress={() => handlePress(d)}
                        key={index}
                        style={
                            index === data.length - 1
                                ? { ...styles.categoryCard, marginRight: 0 }
                                : styles.categoryCard
                        }
                    >
                        <Image style={styles.categoryImage} source={d.image} />
                        <Text>{d.name}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.dark600,
        marginHorizontal: -15,
    },
    categoriesContainer: {
        flexWrap: "wrap",
        //borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 29,
    },
    categoryCard: {
        //marginTop: 14,
        //marginRight: 20,
        marginBottom: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    categoryImage: {
        width: 138,
        height: 138,
        borderRadius: 5,
        marginBottom: 12,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        color: Colors.dark600,
    },
});

export default Categories;
