import { BASE_API_URL, blacklistFlags } from '../constants/Config';

function buildUrl(blacklistFlags: string[]): string {
	const params = new URLSearchParams();
	if (blacklistFlags.length > 0) {
		params.append('blacklistFlags', blacklistFlags.join(','));
	}
	console.log(`${BASE_API_URL}?${params.toString()}`);
	return `${BASE_API_URL}?${params.toString()}`;
}

export const urlWithBlacklistFlags = buildUrl(blacklistFlags);
