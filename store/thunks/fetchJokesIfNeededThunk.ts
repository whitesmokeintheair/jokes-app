import { createAsyncThunk } from '@reduxjs/toolkit';
import { Joke } from '@/types/joke';
import { StorageService } from '@/services/StorageService';
import { urlWithBlacklistFlags } from '@/utils/apiUrlWithBlacklist';

export const fetchJokeIfNeededThunk = createAsyncThunk<
	Joke | undefined,
	void,
	{ rejectValue: string }
>('jokes/fetchJokeIfNeeded', async (_, { rejectWithValue }) => {
	try {
		const lastFetchDate = await StorageService.loadLastFetchDate();
		const today = new Date().toDateString();

		if (lastFetchDate === today) {
			return undefined;
		}

		const response = await fetch(urlWithBlacklistFlags);
		const data = await response.json();

		if (data.error) {
			throw new Error('Failed to fetch joke');
		}

		const newJoke: Joke = {
			text:
				data.type === 'twopart'
					? `${data.setup} - ${data.delivery}`
					: data.joke,
			isLiked: false,
			id: data.id,
		};

		await StorageService.saveLastFetchDate(today);

		return newJoke;
	} catch (error) {
		return rejectWithValue('Failed to fetch joke');
	}
});
