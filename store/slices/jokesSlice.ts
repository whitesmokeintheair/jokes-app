import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { loadJokesFromStorageThunk } from '../thunks/loadJokesFromStorageThunk';
import { fetchJokeIfNeededThunk } from '../thunks/fetchJokesIfNeededThunk';
import { Joke } from '@/types/joke';
import { initialJokesState } from '../state/jokesState';

const jokesSlice = createSlice({
	name: 'jokes',
	initialState: initialJokesState,
	reducers: {
		toggleLikeJoke: (state, action: PayloadAction<number>) => {
			const joke = state.jokes.find((joke) => joke.id === action.payload);
			if (joke) {
				joke.isLiked = !joke.isLiked;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadJokesFromStorageThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				loadJokesFromStorageThunk.fulfilled,
				(state, action: PayloadAction<Joke[] | undefined>) => {
					state.loading = false;
					if (action.payload) {
						state.jokes = action.payload;
					}
				}
			)
			.addCase(loadJokesFromStorageThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || 'Failed to load jokes from storage';
			})
			.addCase(fetchJokeIfNeededThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchJokeIfNeededThunk.fulfilled,
				(state, action: PayloadAction<Joke | undefined>) => {
					state.loading = false;
					if (action.payload) {
						state.jokes.push(action.payload);
					}
				}
			)
			.addCase(fetchJokeIfNeededThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || 'Failed to load joke';
			});
	},
});

export const { toggleLikeJoke } = jokesSlice.actions;

export default jokesSlice.reducer;
