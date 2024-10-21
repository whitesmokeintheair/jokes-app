import { toggleLikeJoke } from '@/store/slices/jokesSlice';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import LikeFilledIcon from '@/assets/icons/Fav-Filled.svg';
import LikeIcon from '@/assets/icons/Fav.svg';
import { AppDispatch } from '@/store';
import { styles } from './LikeBtnStyles';

type LikeButtonProps = {
	joke: { id: number; isLiked: boolean };
	size?: 'normal' | 'large';
};

export const LikeButton: React.FC<LikeButtonProps> = ({
	joke,
	size = 'normal',
}) => {
	const { id, isLiked } = joke;
	const dispatch = useDispatch<AppDispatch>();

	const handleLikeDislike = () => {
		dispatch(toggleLikeJoke(id));
	};

	return (
		<TouchableOpacity
			onPress={handleLikeDislike}
			style={[
				styles.button,
				isLiked ? styles.buttonActive : styles.buttonInactive,
				size === 'large' && styles.buttonLarge,
			]}
		>
			{isLiked ? <LikeFilledIcon /> : <LikeIcon />}
		</TouchableOpacity>
	);
};
