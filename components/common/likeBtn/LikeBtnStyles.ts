import { lavender, lightLavender } from '@/constants/Colors';
import { STEP_6, STEP_8 } from '@/constants/Spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
	},
	buttonInactive: {
		backgroundColor: lightLavender,
		width: STEP_6,
		height: STEP_6,
	},
	buttonActive: {
		backgroundColor: lavender,
		width: STEP_6,
		height: STEP_6,
	},
	buttonLarge: {
		width: STEP_8,
		height: STEP_8,
	},
});
