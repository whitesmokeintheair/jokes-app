import { white } from '@/constants/Colors';
import { fontSizes } from '@/constants/Font';
import { STEP_3, STEP_8 } from '@/constants/Spacing';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from './Divider';

type PageContainerProps = {
	headerText: string;
	children: React.ReactNode;
};

export const PageContainer = ({ headerText, children }: PageContainerProps) => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.header}>
				<Text style={styles.title}>{headerText}</Text>
				<Divider></Divider>
			</View>
			<View style={styles.childrenContainer}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flex: 1,
	},
	childrenContainer: {
		backgroundColor: white,
		flex: 1,
	},
	title: {
		marginLeft: STEP_3,
		fontSize: fontSizes.xlarge,
		fontWeight: 'bold',
	},
	header: {
		paddingTop: STEP_8,
		backgroundColor: white,
	},
});
