import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { GlobalStyles } from "../constants/style";
import { FontAwesome } from "@expo/vector-icons";

const ImagePickerButton = ({ label, selectedImage }) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            selectedImage(result.assets[0].uri);
        }
    };
    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>{label}</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.container,
                    pressed && styles.pressed,
                ]}
                onPress={pickImage}
            >
                {image ? (
                    <Image
                        source={{ uri: image }}
                        style={{ height: 50, width: 60 }}
                    />
                ) : (
                    <FontAwesome
                        name="image"
                        size={24}
                        color={GlobalStyles.colors.gray300}
                    />
                )}
                <Text style={styles.text}>Choose photo</Text>
            </Pressable>
        </View>
    );
};

export default ImagePickerButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.light50,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        borderRadius: 8,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
    },
    label: {
        color: GlobalStyles.colors.gray300,
        fontWeight: "500",
        marginVertical: 4,
    },
    pressed: {
        opacity: 0.6,
    },

    text: {
        marginHorizontal: 8,
        fontSize: 12,
        color: GlobalStyles.colors.gray300,
    },
});
