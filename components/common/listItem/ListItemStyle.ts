import { black, white } from '@/constants/Colors';
import { fontSizes } from '@/constants/Font';
import { STEP_2, STEP_3 } from '@/constants/Spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: white,
		paddingHorizontal: STEP_3,
		gap: 20,
	},
	containerVertical: {
		backgroundColor: white,
		flexDirection: 'column',
		gap: STEP_2,
	},
	text: {
		color: black,
		fontSize: fontSizes.normal,
		width: '80%',
	},
	textLarge: {
		fontSize: fontSizes.large,
		marginBottom: STEP_2,
		fontWeight: 600,
		width: '100%',
	},
});
