import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TodayIcon from '@/assets/icons/Today.svg';
import HistoryIcon from '@/assets/icons/History.svg';
import { STEP_14, STEP_6, STEP_8 } from '@/constants/Spacing';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.light.tint,
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, true),
				tabBarStyle: {
					paddingVertical: 10,
					paddingHorizontal: STEP_14,
					height: STEP_8,
				},
				tabBarItemStyle: {
					height: STEP_6,
					width: STEP_8,
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Today',
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TodayIcon
							color={color}
							width={24}
							height={24}
						></TodayIcon>
					),
				}}
			/>
			<Tabs.Screen
				name='history'
				options={{
					title: 'History',
					headerShown: false,
					tabBarIcon: ({ color }) => <HistoryIcon color={color}></HistoryIcon>,
				}}
			/>
		</Tabs>
	);
}
