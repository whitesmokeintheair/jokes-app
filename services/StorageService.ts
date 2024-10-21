import AsyncStorage from '@react-native-async-storage/async-storage';
import { Joke } from '@/types/joke';

export class StorageService {
	private static JOKES_KEY = 'jokes';
	private static LAST_FETCH_DATE_KEY = 'lastFetchDate';

	static async saveJokes(jokes: Joke[]): Promise<void> {
		try {
			await AsyncStorage.setItem(
				StorageService.JOKES_KEY,
				JSON.stringify(jokes)
			);
		} catch (error) {
			console.error('Failed to save jokes to storage:', error);
		}
	}

	static async loadJokes(): Promise<Joke[] | undefined> {
		try {
			const jokes = await AsyncStorage.getItem(StorageService.JOKES_KEY);
			return jokes ? JSON.parse(jokes) : undefined;
		} catch (error) {
			console.error('Failed to load jokes from storage:', error);
			return undefined;
		}
	}

	static async saveLastFetchDate(date: string): Promise<void> {
		try {
			await AsyncStorage.setItem(StorageService.LAST_FETCH_DATE_KEY, date);
		} catch (error) {
			console.error('Failed to save last fetch date:', error);
		}
	}

	static async loadLastFetchDate(): Promise<string | null> {
		try {
			return await AsyncStorage.getItem(StorageService.LAST_FETCH_DATE_KEY);
		} catch (error) {
			console.error('Failed to load last fetch date:', error);
			return null;
		}
	}
}
