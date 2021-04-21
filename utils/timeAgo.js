export default function timeAgo(ts) {
	// This function computes the delta between the
	// provided timestamp and the current time, then test
	// the delta for predefined ranges.

	const d = new Date(); // Gets the current time
	const nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
	const seconds = nowTs - ts;

	// more that two days
	if (seconds > 2 * 24 * 3600) {
		return 'a few days ago';
	}
	// a day
	if (seconds > 24 * 3600) {
		return 'yesterday';
	}
	if (seconds > 3600) {
		return `${Math.floor(seconds / 3600)} hours ago`;
	}
	if (seconds > 1800) {
		return `half an hour ago`;
	}
	if (seconds > 60) {
		return `${Math.floor(seconds / 60)} minutes ago`;
	}
	if (seconds < 60) {
		return `now`;
	}
}
