import React, { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { AppDispatch, RootState } from '../store';
import { useDispatch } from 'react-redux';
import { loadJokesFromStorageThunk } from '../store/thunks/loadJokesFromStorageThunk';
import store from '../store';
import { StorageService } from '@/services/StorageService';

interface AppLifecycleManagerProps {
	children: React.ReactNode;
}

export const AppLifecycleManager: React.FC<AppLifecycleManagerProps> = ({
	children,
}) => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const handleAppStateChange = async (nextAppState: AppStateStatus) => {
			if (nextAppState === 'active') {
				dispatch(loadJokesFromStorageThunk());
			} else if (nextAppState === 'background') {
				const jokes = store.getState().jokes.jokes;
				await StorageService.saveJokes(jokes);
			}
		};

		const subscription = AppState.addEventListener(
			'change',
			handleAppStateChange
		);

		dispatch(loadJokesFromStorageThunk());

		return () => {
			subscription.remove();
		};
	}, [dispatch]);

	return <>{children}</>;
};
