import React from 'react';
import { View, StyleSheet } from 'react-native';
import { lightGray } from '../../constants/Colors';
import { STEP_3 } from '@/constants/Spacing';

export const Divider = () => {
	return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
	divider: {
		height: 1,
		width: '100%',
		marginVertical: STEP_3,
		backgroundColor: lightGray,
	},
});
