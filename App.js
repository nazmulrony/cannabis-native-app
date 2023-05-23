import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import { extendTheme, NativeBaseProvider } from 'native-base';
import RootStack from './navigators/RootStack';

export default function App() {
    const persistor = persistStore(store);
    const theme = extendTheme({
        colors: {
            primary: {
                50: '#b0e9b2',
                100: '#95dd97',
                200: '#7ccd7f',
                300: '#66bc69',
                400: '#4caf50',
                500: '#4c974e',
                600: '#4caf50',
                700: '#476c48',
                800: '#4c974e',
                900: '#3c483d',
            },
            secondary: {
                600: '#333333',
                800: '#1b1b1b',
            },
            muted: {
                600: '#b0e9b2',
            },
        },
    });
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NativeBaseProvider theme={theme}>
                    <StatusBar style="dark" />
                    <NavigationContainer>
                        <RootStack />
                    </NavigationContainer>
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
