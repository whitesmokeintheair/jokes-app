import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokeIfNeededThunk } from '../../store/thunks/fetchJokesIfNeededThunk';
import { AppDispatch, RootState } from '../../store';
import { View, Text, Button } from 'react-native';

import { ListItem } from '../common/listItem/ListItem';

export default function JokeScreen() {
	const dispatch = useDispatch<AppDispatch>();
	const { jokes, loading } = useSelector((state: RootState) => state.jokes);
	const todayJoke = jokes[jokes.length - 1];

	useEffect(() => {
		dispatch(fetchJokeIfNeededThunk());
	}, [dispatch]);

	return (
		<>
			{!loading && jokes.length > 0 && todayJoke && (
				<View style={{ marginVertical: 'auto' }}>
					<ListItem
						joke={todayJoke}
						vertical
					></ListItem>
				</View>
			)}
		</>
	);
}
