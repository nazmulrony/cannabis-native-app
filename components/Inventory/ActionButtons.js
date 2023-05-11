import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, IconButton, Popover, Spinner } from "native-base";
import { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDeleteProductsMutation } from "../../ApiServices/inventory.service";
import Colors from "../../constants/Colors";
import { GlobalStyles } from "../../constants/style";

const ActionButtons = ({ productId, product }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigation = useNavigation();
    const [deleteProduct, { isLoading, isError, isSuccess }] =
        useDeleteProductsMutation();
    return (
        <Popover
            placement={"left top"}
            trigger={(triggerProps) => {
                return (
                    // <Button
                    //     variant={"ghost"}
                    //     alignSelf="center"
                    //     {...triggerProps}
                    //     onPress={() => setIsOpen(true)}
                    // >
                    //     ...
                    // </Button>
                    <IconButton
                        rounded={"full"}
                        disabled={isLoading}
                        colorScheme="light"
                        {...triggerProps}
                        variant="ghost"
                        onPress={() => setIsOpen(true)}
                        _icon={{
                            as: Entypo,
                            name: "dots-three-vertical",
                            size: 3,
                        }}
                    />
                );
            }}
            isOpen={isOpen}
            onClose={() => setIsOpen(!isOpen)}
        >
            <Popover.Content>
                {/* <Popover.Arrow alignSelf={"center"} /> */}
                {/* <Popover.CloseButton onPress={() => setIsOpen(false)} /> */}
                <Popover.Body>
                    {isLoading || isSuccess ? (
                        <Spinner size={"lg"} color="warning.500" />
                    ) : (
                        !isError && (
                            <View
                                style={{
                                    // margin: 0,
                                    // borderWidth: 1,
                                    alignContent: "center",
                                    justifyContent: "center",
                                    // width: 70,
                                    // flexDirection: "row",
                                    height: 60,
                                }}
                            >
                                <Button
                                    disabled={isLoading}
                                    colorScheme="light"
                                    variant="ghost"
                                    onPress={() =>
                                        navigation.navigate(
                                            "UpdateProductScreen",
                                            product
                                        )
                                    }
                                    rightIcon={
                                        <AntDesign
                                            name="edit"
                                            color={Colors.dark600}
                                            size={16}
                                        />
                                    }
                                >
                                    Edit
                                </Button>
                                <View
                                    style={{
                                        borderWidth: 0.5,
                                        borderRadius: 100,
                                        borderColor: Colors.dark500,
                                        marginHorizontal: -20,
                                    }}
                                />
                                {/* <IconButton
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
                                /> */}
                                <Button
                                    disabled={isLoading}
                                    colorScheme="error"
                                    variant="ghost"
                                    onPress={async () => {
                                        await deleteProduct(productId);
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
                                    rightIcon={
                                        <AntDesign
                                            name="delete"
                                            color={GlobalStyles.colors.error500}
                                            size={16}
                                        />
                                    }
                                >
                                    Delete
                                </Button>
                                {/* <IconButton
                                    disabled={isLoading}
                                    colorScheme="error"
                                    variant="ghost"
                                    onPress={async () => {
                                        await deleteProduct(productId);
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
                                /> */}
                            </View>
                        )
                    )}
                </Popover.Body>
                {/* <Popover.Footer justifyContent="flex-end">
                    <Button.Group space={2}>
                        <Button
                            colorScheme="coolGray"
                            variant="ghost"
                            onPress={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                    </Button.Group>
                </Popover.Footer> */}
            </Popover.Content>
        </Popover>
    );
};

export default ActionButtons;

const styles = StyleSheet.create({});
