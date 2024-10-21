import { createAsyncThunk } from '@reduxjs/toolkit';
import { Joke } from '@/types/joke';
import { StorageService } from '@/services/StorageService';

export const loadJokesFromStorageThunk = createAsyncThunk<
	Joke[] | undefined,
	void,
	{ rejectValue: string }
>('jokes/loadJokesFromStorage', async (_, { rejectWithValue }) => {
	try {
		return await StorageService.loadJokes();
	} catch (error) {
		return rejectWithValue('Failed to load jokes from storage');
	}
});
