import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get("window").height);

    useEffect(() => {
        const updateScreenSize = () => {
            setScreenWidth(Dimensions.get("window").width);
            setScreenHeight(Dimensions.get("window").height);
        };

        Dimensions.addEventListener("change", updateScreenSize);

        return () => {
            if (typeof Dimensions.removeEventListener === "function") {
                // Dimensions.removeEventListener("change", updateOrientation);
                Dimensions.removeEventListener("change", updateScreenSize);
            }
        };
    }, []);

    return { screenWidth, screenHeight };
};

export default useScreenSize;
