import { StyleSheet } from 'react-native';
import JokeScreen from '@/components/today/JokeScreen';
import { white } from '@/constants/Colors';
import { STEP_3, STEP_8 } from '@/constants/Spacing';
import { fontSizes } from '@/constants/Font';
import { PageContainer } from '@/components/common/PageContainer';

export default function TodayPage() {
	return (
		<PageContainer headerText='Today'>
			<JokeScreen />
		</PageContainer>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	title: {
		marginLeft: STEP_3,
		fontSize: fontSizes.xlarge,
		fontWeight: 'bold',
	},
	header: {
		paddingTop: STEP_8,
		paddingBottom: STEP_3,
		backgroundColor: white,
	},
});
