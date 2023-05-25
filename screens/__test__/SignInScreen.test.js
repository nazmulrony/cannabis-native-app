import { render } from '@testing-library/react-native';
import SignInScreen from '../SignInScreen';
import { Provider } from 'react-redux';
import { NativeBaseProvider, theme } from 'native-base';
import { store } from '../../redux/store';

describe('SignInPage', () => {
    it('Test Input Testing', () => {
        const inset = {
            frame: { x: 0, y: 0, width: 0, height: 0 },
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
        };

        const testScreen = render(
            <Provider store={store}>
                <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
                    <SignInScreen />
                </NativeBaseProvider>
            </Provider>
        );

        const signInButton = testScreen.getByTestId('signButton');

        expect(signInButton).toBeDefined();
    });
});
