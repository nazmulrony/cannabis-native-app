import React from "react";
import { Center, HStack, Skeleton } from "native-base";

const RowSkeleton = () => {
    return (
        <Center w="100%" p={"2"}>
            <HStack space="2" alignItems="center">
                <Skeleton size="10" rounded="full" />
                <Skeleton.Text flex="2" rounded="full" />
                <Skeleton.Text flex="1" rounded="full" />
            </HStack>
        </Center>
    );
};

export default RowSkeleton;
