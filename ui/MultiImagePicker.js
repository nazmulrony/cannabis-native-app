import {
    ActivityIndicator,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { GlobalStyles } from "../constants/style";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const MultiImagePicker = ({ label, setSelectedImages, existingImages }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState(existingImages || []);
    const [uploadedImages, setUploadedImages] = useState(existingImages || []);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 4],
            quality: 1,
            allowsEditing: true,
            base64: true,
        });

        if (!result.canceled) {
            setIsLoading(true);
            setImages([...images, result.assets[0].uri]);
            const formData = new FormData();
            formData.append("image", {
                uri: result.assets[0].uri,
                type: "image/jpeg",
                name: "image.jpg",
            });
            fetch(
                "https://api.imgbb.com/1/upload?key=87e8e1bf702d6fb550ee78ef762e55da",
                {
                    method: "POST",
                    body: formData,
                }
            )
                .then((res) => res.json())
                .then((imageData) => {
                    console.log("Uploaded");
                    // console.log(imageData?.data?.url);
                    const imageUrl = imageData?.data?.url;
                    setUploadedImages([...uploadedImages, imageUrl]);
                    setSelectedImages([...uploadedImages, imageUrl]);
                    setIsLoading(false);
                });
        }
    };
    // console.log(images[0]);
    const removeImageHandler = (index) => {
        console.log(index);
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        const newUploadedImages = [...uploadedImages];
        newUploadedImages.splice(index, 1);
        setUploadedImages(newUploadedImages);
        setSelectedImages(newUploadedImages);
    };
    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.container}>
                {images?.length
                    ? images.map((image, index) => (
                          <View key={index} style={{ position: "relative" }}>
                              <Image
                                  source={{ uri: image }}
                                  style={styles.image}
                              />
                              {isLoading && index === images?.length - 1 && (
                                  <View style={styles.spinner}>
                                      <ActivityIndicator
                                          color={GlobalStyles.colors.primary500}
                                          size="large"
                                      />
                                  </View>
                              )}
                              {isLoading &&
                              index === images?.length - 1 ? null : (
                                  <Pressable
                                      onPress={() => removeImageHandler(index)}
                                      style={({ pressed }) => [
                                          styles.removeImage,
                                          pressed && styles.pressed,
                                      ]}
                                  >
                                      <AntDesign
                                          name="close"
                                          size={16}
                                          color="white"
                                      />
                                  </Pressable>
                              )}
                          </View>
                      ))
                    : null}
                <Pressable
                    disabled={isLoading}
                    onPress={pickImage}
                    style={({ pressed }) => [
                        styles.picker,
                        pressed && styles.pressed,
                    ]}
                >
                    {/* <FontAwesome
                        name="image"
                        size={32}
                        color={GlobalStyles.colors.gray300}
                        style={{ marginRight: 6 }}
                    /> */}
                    <AntDesign
                        name="plus"
                        size={24}
                        color={GlobalStyles.colors.primary500}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default MultiImagePicker;

const styles = StyleSheet.create({
    container: {
        // padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",

        flexWrap: "wrap",
    },
    picker: {
        borderStyle: "dashed",
        borderColor: GlobalStyles.colors.gray100,
        backgroundColor: GlobalStyles.colors.light50,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 124,
        width: (Dimensions.get("screen").width - 60) / 2,
    },
    label: {
        color: GlobalStyles.colors.gray300,
        fontWeight: "500",
        marginVertical: 4,
    },
    pressed: {
        opacity: 0.6,
    },
    image: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        height: 124,
        width: (Dimensions.get("screen").width - 60) / 2,
        marginBottom: 20,
        borderRadius: 6,
    },
    removeImage: {
        position: "absolute",
        right: 6,
        top: 6,
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    spinner: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 20,
        justifyContent: "center",
    },
});
