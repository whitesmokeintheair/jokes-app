import { View, Text } from 'react-native';
import { LikeButton } from '../likeBtn/LikeButton';
import { Joke } from '@/types/joke';
import { styles } from './ListItemStyle';

type ListItemProps = {
	joke: Joke;
	vertical?: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({
	joke,
	vertical = false,
}) => {
	const { text } = joke;
	return (
		<View style={[styles.container, vertical && styles.containerVertical]}>
			<Text style={[styles.text, vertical && styles.textLarge]}>{text}</Text>
			<LikeButton
				joke={joke}
				size={vertical ? 'large' : 'normal'}
			/>
		</View>
	);
};
