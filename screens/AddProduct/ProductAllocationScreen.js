import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AllocationSummary from "../../components/ProductAllocation/AllocationSummary";
import MarketplaceAllocation from "../../components/ProductAllocation/MarketplaceAllocation";
import AuctionAllocation from "../../components/ProductAllocation/AuctionAllocation";
import { AlertDialog, Button, Center, HStack, useToast } from "native-base";
import { GlobalStyles } from "../../constants/style";
import AddProductSteps from "../../components/AddProduct/AddProductSteps";
import {
    formSelector,
    resetFormUpdate,
} from "../../redux/slices/inventory.slice";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProductsMutation } from "../../ApiServices/inventory.service";
import { useRef } from "react";
import { StackActions } from "@react-navigation/native";

const ProductAllocationScreen = ({ navigation, route }) => {
    const product = route.params;
    const { allowPublish, data, draftProductId } = useSelector(formSelector);
    const [draftProduct, draftProductReq] = useUpdateProductsMutation();
    const [updateProduct, updateProductReq] = useUpdateProductsMutation();
    const [publishProduct, publishProductReq] = useUpdateProductsMutation();
    const dispatch = useDispatch();
    //Alert
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef(null);
    const toast = useToast();
    // console.log(allowPublish);

    const productDraftHandler = async () => {
        const formData = { ...data, status: "draft" };
        const response = await draftProduct({ id: draftProductId, formData });
        if (response?.data?.product) {
            console.log("product drafted");
            toast.show({
                title: "Product drafted",
                placement: "top",
            });
            navigation.navigate("InventoryScreen");
        } else {
            console.log(draftProductReq);
        }
    };
    const productUpdateHandler = async () => {
        const formData = { ...data };
        const response = await draftProduct({ id: product?._id, formData });
        if (response?.data?.product) {
            console.log("product updated");
            toast.show({
                title: "Product Updated",
                placement: "top",
            });
            navigation.navigate("InventoryScreen");
            dispatch(resetFormUpdate());
        } else {
            console.log(draftProductReq);
        }
    };
    const productPublishHandler = async () => {
        const formData = { ...data, status: "published" };
        const response = await publishProduct({
            id: product ? product?._id : draftProductId,
            formData,
        });

        if (response?.data?.product) {
            console.log("product published");
            if (product) {
                toast.show({
                    title: "Product Published",
                    placement: "top",
                });
                navigation.navigate("InventoryScreen");
                dispatch(resetFormUpdate());
            } else {
                setIsOpen(true);
            }
        } else {
            // console.log(publishProductReq?.error?.message);
            console.log(response?.error?.error);
        }
    };
    return (
        <View style={styles.screen}>
            <ScrollView
                style={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <AddProductSteps step={2} />
                <AllocationSummary />
                <MarketplaceAllocation product={product} />
                <AuctionAllocation product={product} />
                <HStack mx={5} mb={5} space={4} justifyContent="space-between">
                    {product ? (
                        <Button
                            onPress={productUpdateHandler}
                            isLoading={draftProductReq?.isLoading}
                            variant={"outline"}
                            borderColor={GlobalStyles.colors.primary500}
                            w={"45%"}
                        >
                            Update
                        </Button>
                    ) : (
                        <Button
                            onPress={productDraftHandler}
                            isLoading={draftProductReq?.isLoading}
                            variant={"outline"}
                            borderColor={GlobalStyles.colors.primary500}
                            w={"45%"}
                        >
                            Draft
                        </Button>
                    )}
                    <Button
                        w={"45%"}
                        onPress={productPublishHandler}
                        isLoading={publishProductReq?.isLoading}
                        disabled={!allowPublish}
                        colorScheme={allowPublish ? "primary" : "light"}
                    >
                        Publish
                    </Button>
                </HStack>
            </ScrollView>
            <Center>
                <AlertDialog
                    leastDestructiveRef={cancelRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>
                            Product Published
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            Do you want to add more product?
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="unstyled"
                                    colorScheme="coolGray"
                                    onPress={() => {
                                        setIsOpen(false);
                                        dispatch(resetFormUpdate());
                                        navigation.navigate("InventoryScreen");
                                    }}
                                    ref={cancelRef}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    colorScheme="primary"
                                    onPress={() => {
                                        setIsOpen(false);
                                        dispatch(resetFormUpdate());
                                        navigation.dispatch(
                                            StackActions.replace(
                                                "AddProductScreen"
                                            )
                                        );
                                    }}
                                >
                                    Yes
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>
        </View>
    );
};

export default ProductAllocationScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
});
