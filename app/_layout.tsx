import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import store from '../store';

import { AppLifecycleManager } from '@/services/AppLifecycleManager';
import { SafeAreaView } from 'react-native';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Inter: require('../assets/fonts/Inter-VariableFont.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<AppLifecycleManager>
				<SafeAreaView style={{ flex: 1 }}>
					<RootLayoutNav />
				</SafeAreaView>
			</AppLifecycleManager>
		</Provider>
	);
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen
				name='(tabs)'
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
