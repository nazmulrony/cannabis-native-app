import Carousel from "react-native-snap-carousel";
import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import flower from "../../assets/flower.png";

const CarouselDemo = () => {
    // const _carousel = useRef();
    // const [data, setData] = useState([flower, flower, flower]);
    const data = [flower, flower, flower];
    return (
        <View>
            <Carousel
                // ref={(c) => {
                //     _carousel = c;
                // }}
                data={data}
                renderItem={(item, index) => (
                    <View style={{ width: "100%" }} key={index}>
                        <Image style={{ width: "100%" }} source={item} />
                    </View>
                )}
                sliderWidth={300}
                itemWidth={300}
            />
        </View>
    );
};

export default CarouselDemo;
