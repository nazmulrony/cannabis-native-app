import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import RadioButtons from "../../ui/RadioButtons";
import { TouchableOpacity } from "react-native-gesture-handler";

const deliveryOptions = [
    {
        label: "Delivery not available for selected weight",
        value: "",
    },
    {
        label: "Pickup at Kush House - 24 Hours Never Closed! (0.8mi)",
        value: "Pickup at Kush House - 24 Hours Never Closed! (0.8mi)",
    },
];

const DetailsContainer = ({ data, unit, setUnit, setNum }) => {
    const [value, setValue] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.fontBase}>{data?.category} | </Text>
                        <Text style={styles.primaryBaseFont}>
                            {data?.specifications?.brand}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.favorite}
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    {isFavorite ? (
                        <AntDesign
                            name="heart"
                            size={20}
                            color={GlobalStyles.colors.error500}
                        />
                    ) : (
                        <AntDesign
                            name="hearto"
                            size={20}
                            color={GlobalStyles.colors.gray300}
                        />
                    )}
                    <Text style={styles.save}>
                        {isFavorite ? "Saved" : "Save"}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.title]}>{data?.title}</Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 8,
                }}
            >
                <AntDesign
                    name="checkcircle"
                    size={16}
                    color={GlobalStyles.colors.primary500}
                    style={{ marginRight: 8 }}
                />
                <Text>{data?.company?.name}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable style={[styles.ratingContainer]}>
                    <Text style={styles.ratingText}>{}</Text>
                    <FontAwesome name="star" size={18} color="#FFD600" />
                </Pressable>
                <Text style={styles.fontsBaseWithMargin}>305 Ratings</Text>
                <Text style={styles.fontsBaseWithMargin}>68 Reviews</Text>
            </View>
            <View style={styles.deliveryOptionsContainer}>
                <RadioButtons
                    items={deliveryOptions}
                    gap={10}
                    onPress={setValue}
                    initial={value}
                    color={GlobalStyles.colors.primary500}
                />
            </View>
            <Text style={styles.fontBase}>
                Available from{" "}
                <Text style={{ color: GlobalStyles.colors.primary500 }}>
                    10+ retailers
                </Text>
            </Text>
            <View style={styles.priceContainer}>
                <Text style={styles.title}>
                    $
                    {unit === "lb"
                        ? data?.allocations?.marketplace?.price_per_lb.toFixed(
                              2
                          )
                        : data?.allocations?.marketplace?.price_per_g.toFixed(
                              2
                          )}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={[styles.fontBase, { marginRight: 12 }]}>
                        Available weights:
                    </Text>
                    <RadioButtons
                        items={[
                            { label: "lb", value: "lb" },
                            { label: "g", value: "g" },
                        ]}
                        onPress={setUnit}
                        // setNum={setNum}
                        initial={unit}
                        color={GlobalStyles.colors.primary500}
                        direction="row"
                        gap={20}
                    />
                </View>
            </View>
        </View>
    );
};

export default DetailsContainer;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 6,
        padding: 12,
        borderColor: GlobalStyles.colors.gray100,
    },
    type: {},
    fontBase: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
    },
    primaryBaseFont: {
        fontSize: 13,
        color: GlobalStyles.colors.primary500,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: GlobalStyles.colors.gray700,
    },
    favorite: {
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "center",
        width: 100,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.light50,
        alignItems: "center",
    },
    save: {
        color: GlobalStyles.colors.gray300,
        fontWeight: "500",
        marginLeft: 6,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: GlobalStyles.colors.gray700,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    ratingText: {
        color: "white",
        marginRight: 4,
    },
    fontsBaseWithMargin: {
        fontSize: 13,
        color: GlobalStyles.colors.gray300,
        marginLeft: 8,
    },
    deliveryOptionsContainer: {
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.light50,
        marginHorizontal: -12,
        paddingHorizontal: 12,
        paddingVertical: 36,
    },
    priceContainer: {
        marginTop: 16,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
