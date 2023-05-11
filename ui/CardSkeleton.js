import React from "react";
import { Center, Skeleton, VStack } from "native-base";
import { Dimensions } from "react-native";

const CardSkeleton = ({ height }) => {
    return (
        <Center w={Dimensions.get("window").width / 2 - 30} mb={"5"} marginRight={5}>
            <VStack
                w="100%"
                maxW="400"
                borderWidth="1"
                space={8}
                overflow="hidden"
                rounded="md"
                _dark={{
                    borderColor: "coolGray.500",
                }}
                _light={{
                    borderColor: "coolGray.200",
                }}
            >
                <Skeleton h={40} />
                <Skeleton.Text px="4" mb="4" h={height} />
            </VStack>
        </Center>
    );
};

export default CardSkeleton;
