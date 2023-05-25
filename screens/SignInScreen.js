import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { GlobalStyles } from '../constants/style';
import { useLoginMutation } from '../ApiServices/auth.services';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, authSelector } from '../redux/slices/auth.slice';
import {
    Box,
    Button,
    Text,
    Icon,
    Pressable,
    Image,
    AlertDialog,
    View,
} from 'native-base';
// import { MaterialIcons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../ui/InputField';

import { Dimensions } from 'react-native';
import useIsPortrait from '../hooks/useIsPortrait';
import useScreenSize from '../hooks/useScreenSize';
import { TextInput } from 'react-native';

const SignInScreen = ({ navigation }) => {
    // const value = useIsPortrait();
    const { screenWidth, screenHeight } = useScreenSize();
    console.log(screenHeight);
    const [show, setShow] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //redux hooks
    const dispatch = useDispatch();
    const [loginUser, { data, isLoading }] = useLoginMutation();
    const { user } = useSelector(authSelector);
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = useRef(null);

    const signInHandler = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        // console.log(userInfo);
        let user = await loginUser(userInfo);
        if (user.error) {
            setIsOpen(true);
            return;
        }
        //console.log(user);
        dispatch(addUser(user?.data ? user.data : user.error));
    };

    useEffect(() => {
        if (user?.accessToken) {
            navigation.replace('StackNavigator');
        }
    }, [user]);

    return (
        <ScrollView
            style={styles.screen}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            <Box
                style={{
                    flex: 1,
                    justifyContent: 'center',

                    height: screenHeight > 700 ? screenHeight - 80 : 'auto',
                    // borderWidth: 1,
                }}
            >
                <Box style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.image}
                        alt=""
                    />
                </Box>
                <AlertDialog
                    leastDestructiveRef={cancelRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header borderBottomWidth={'0'}>
                            Login Error
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            Incorrect email or password!
                        </AlertDialog.Body>
                        <AlertDialog.Footer borderTopWidth={'0'}>
                            <Button.Group space={2}>
                                <Button
                                    w={60}
                                    onPress={onClose}
                                    background="primary.400"
                                >
                                    Ok
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subTitle}>
                    Welcome Back to Cannabis Connecter
                </Text>
                {/* <KeyboardAvoidingView
                    behavior={Platform.OS === "android" ? "padding" : "height"}
                    // behavior="padding"
                    style={styles.inputContainer}
                > */}
                <Box alignItems="center">
                    <Box w="100%">
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Invalid Email',
                                },
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <InputField
                                    keyboardType="email"
                                    type="email"
                                    label="Email"
                                    placeholder={'Enter email'}
                                    error={errors?.email?.message}
                                    inputConfig={{
                                        onBlur,
                                        value,
                                        onChangeText: (value) =>
                                            onChange(value),
                                    }}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: 'Password is required',
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <InputField
                                    keyboardType="visible-password"
                                    type={show ? 'text' : 'password'}
                                    label="Password"
                                    placeholder={'Enter password'}
                                    error={errors?.password?.message}
                                    inputConfig={{
                                        // InputRightElement: (
                                        //     <Pressable
                                        //         onPress={() => setShow(!show)}
                                        //         // bgColor="white"
                                        //         // h="full"
                                        //         style={{
                                        //             backgroundColor: 'white',
                                        //             // height: "100%",
                                        //             // alignItems: "center",
                                        //             // justifyContent: "center",
                                        //             paddingVertical: 12,
                                        //             // borderWidth: 1,
                                        //         }}
                                        //     >
                                        //         <Icon
                                        //             backgroundColor={'white'}
                                        //             as={
                                        //                 <MaterialIcons
                                        //                     name={
                                        //                         show
                                        //                             ? 'visibility'
                                        //                             : 'visibility-off'
                                        //                     }
                                        //                 />
                                        //             }
                                        //             size={5}
                                        //             mr="2"
                                        //             color="muted.400"
                                        //         />
                                        //     </Pressable>
                                        // ),
                                        onBlur,
                                        value,
                                        onChangeText: (value) =>
                                            onChange(value),
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Box>
                {/* </KeyboardAvoidingView> */}
                {/* <PrimaryButton
                onPress={signInHandler}
                style={{ marginVertical: 16 }}
            >
                {isLoading ? "Signing in" : "Sign In"}
            </PrimaryButton> */}

                <Button
                    onPress={handleSubmit(signInHandler)}
                    isLoading={isLoading}
                    isLoadingText={'Signing In'}
                    _loading={{ opacity: 1 }}
                    disabled={isLoading}
                    testID="signButton"
                >
                    Sign In
                </Button>
                <TextInput testID="test" />
                <Box style={styles.signUpTextContainer}>
                    <Text style={{ color: GlobalStyles.colors.gray300 }}>
                        Don't have an account?
                    </Text>

                    <Button
                        onPress={() => navigation.navigate('SignUpScreen')}
                        disabled={isLoading}
                        variant={'ghost'}
                        backgroundColor={'white'}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        maxWidth: 700,
        width: '100%',
        alignSelf: 'center',
        // borderWidth: 1,
    },
    imageContainer: {
        marginTop: 115,
        alignItems: 'center',
    },
    image: {
        height: 107,
        width: 144,
    },
    title: {
        marginTop: 48,
        fontSize: 22,
        fontWeight: '600',
        paddingTop: 8,
        color: GlobalStyles.colors.gray700,
    },
    subTitle: {
        fontSize: 16,
        color: GlobalStyles.colors.gray300,
        marginTop: 4,
        marginBottom: 32,
    },
    inputContainer: {
        flex: 1,
    },
    signUpTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        marginBottom: 56,
    },
});
