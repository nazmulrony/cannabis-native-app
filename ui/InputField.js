import { View, Text } from "react-native";
import React from "react";
import { FormControl, Input, WarningOutlineIcon } from "native-base";

const InputField = ({
    label,
    placeholder,
    type,
    error,
    inputConfig,
    required,
    width,
    style
}) => {

    return (
        <FormControl isInvalid={!!error} marginBottom={4} isRequired={required} style={{ width: width }}>
            {label && <FormControl.Label
            >{label}</FormControl.Label>}
            <Input

                {...inputConfig}
                type={type}
                placeholder={placeholder}
                style={[{ backgroundColor: "white" }, style]}
                _input={{ fontSize: 14 }}
                rounded={6}
            />
            {error?.length && (
                <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                >
                    {error}
                </FormControl.ErrorMessage>
            )}
        </FormControl>
    );
};

export default InputField;
