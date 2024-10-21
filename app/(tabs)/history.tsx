import HistoryScreen from '@/components/history/HistoryScreen';
import { PageContainer } from '@/components/common/PageContainer';

export default function HistoryPage() {
	return (
		<PageContainer headerText='History'>
			<HistoryScreen />
		</PageContainer>
	);
}
