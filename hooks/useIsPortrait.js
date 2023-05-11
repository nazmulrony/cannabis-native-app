import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useIsPortrait = () => {
    const [isPortrait, setIsPortrait] = useState(
        Dimensions.get("window").height > Dimensions.get("window").width
    );

    useEffect(() => {
        const updateOrientation = () => {
            setIsPortrait(Dimensions.get("window").height > Dimensions.get("window").width);
        };

        Dimensions.addEventListener("change", updateOrientation);

        return () => {
            // Dimensions?.removeEventListener("change", updateOrientation);
            if (typeof Dimensions.removeEventListener === "function") {
                Dimensions.removeEventListener("change", updateOrientation);
            }
        };
    }, []);

    return isPortrait;
};

export default useIsPortrait;
