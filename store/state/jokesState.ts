import { Joke } from '@/types/joke';

export type JokesState = {
	jokes: Joke[];
	loading: boolean;
	error: string | null;
};

export const initialJokesState: JokesState = {
	jokes: [],
	loading: false,
	error: null,
};
