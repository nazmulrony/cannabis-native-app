import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Box, Button, Icon, Input, Pressable, useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";

const SearchBar = ({ style }) => {
    const toast = useToast();
    const navigation = useNavigation();
    return (
        <Box style={[styles.searchBarContainer, style]}>
            <Input
                backgroundColor="white"
                style={styles.input}
                borderColor={"white"}
                placeholder="Find products..."
                InputLeftElement={
                    <Pressable
                        onPress={() =>
                            toast.show({
                                // title: "Filters pressed",
                                placement: "top",
                                render: () => {
                                    return (
                                        <View
                                            style={{
                                                paddingHorizontal: 20,
                                                paddingVertical: 12,
                                                backgroundColor: Colors.green50,
                                                borderWidth: 1,
                                                borderColor: Colors.green500,
                                                elevation: 10,
                                                borderRadius: 6,
                                                alignItems: "center",
                                                // margin: 2,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    // backgroundColor: "black",
                                                    color: Colors.green500,
                                                }}
                                            >
                                                Hello world
                                            </Text>
                                            <Button
                                                mt={2}
                                                py={1}
                                                onPress={() => {
                                                    // navigation.navigate(
                                                    //     "CartScreen"
                                                    // );
                                                }}
                                            >
                                                Go to Cart
                                            </Button>
                                        </View>
                                    );
                                },
                                duration: 5000,
                            })
                        }
                    >
                        <Icon
                            as={
                                <Ionicons
                                    name="ios-search-outline"
                                    size={24}
                                    color={Colors.dark400}
                                />
                            }
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    </Pressable>
                }
                InputRightElement={
                    <Pressable
                        onPress={() =>
                            toast.show({
                                title: "Filters pressed",
                                placement: "top",
                            })
                        }
                    >
                        <Icon
                            as={
                                <Ionicons
                                    name="options-outline"
                                    size={24}
                                    color={Colors.dark400}
                                />
                            }
                            size={5}
                            mr="2"
                            color="muted.400"
                        />
                    </Pressable>
                }
            />
        </Box>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: Colors.light500,
        marginBottom: 20,
    },
    input: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "400",
        color: Colors.dark600,
        width: "80%",
        marginLeft: 12,
    },
});

export default SearchBar;
