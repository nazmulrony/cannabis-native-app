import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Colors from "../../constants/Colors";
import { GlobalStyles } from "../../constants/style";

const TransportMap = () => {
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert(
                    "Location Permission Denied",
                    "This features needs to access your location to function properly."
                );
                return;
            }

            let { coords } = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onPress={(e) => {
                    const { latitude, longitude } = e.nativeEvent.coordinate;
                    setLocation({ latitude, longitude });
                    setRegion({
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }}
                provider="google"
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomControlEnabled={true}
                moveOnMarkerPress={false}
            >
                {location && (
                    <Marker
                        coordinate={location}
                        title="Selected location"
                        description="This is the location you selected"
                    />
                )}
            </MapView>
            {/* <MapView
                style={styles.map}
                // initialRegion={{
                //     latitude: 37.78825,
                //     longitude: -122.4324,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // }}
                provider="google"
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomControlEnabled={true}
                moveOnMarkerPress={false}
            /> */}
        </View>
    );
};

export default TransportMap;

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        width: "100%",
        height: Dimensions.get("window").height - 80,
        overflow: "hidden",
        marginBottom: 20,
    },
    map: {
        width: "100%",
        height: Dimensions.get("window").height - 80,
    },
});
