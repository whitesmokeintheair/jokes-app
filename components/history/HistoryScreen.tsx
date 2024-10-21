import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Divider } from '../common/Divider';
import { ListItem } from '../common/listItem/ListItem';

export default function HistoryScreen() {
	const { jokes } = useSelector((state: RootState) => state.jokes);
	const isNotLastJoke = (currentJokeId: number) =>
		jokes.length > 0 && currentJokeId !== jokes[jokes.length - 1].id;

	return (
		<View>
			<FlatList
				data={jokes}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<>
						<ListItem joke={item}></ListItem>
						{isNotLastJoke(item.id) && <Divider />}
					</>
				)}
			/>
		</View>
	);
}
