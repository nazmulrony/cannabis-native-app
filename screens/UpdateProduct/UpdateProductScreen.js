import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { ScrollView } from "react-native";
import AddProductSteps from "../../components/AddProduct/AddProductSteps";
import TestProductForm from "../../components/AddProduct/TestProductForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetFormUpdate } from "../../redux/slices/inventory.slice";
import FormikProductForm from "../../components/AddProduct/FormikProductForm";

const UpdateProductScreen = ({ route }) => {
    const product = route.params;
    // console.log(product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFormUpdate());
    }, [dispatch]);
    return (
        <View style={styles.screen}>
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <AddProductSteps step={1} />
                <TestProductForm product={product} />
                {/* <FormikProductForm product={product} /> */}
            </ScrollView>
        </View>
    );
};

export default UpdateProductScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,

        // paddingTop: 20,
        backgroundColor: "white",
        // borderTopWidth: 1,
        borderWidth: 0.5,
        borderColor: GlobalStyles.colors.gray100,
    },
    title: { fontSize: 18, fontWeight: "500" },
});
