let lastFetch = -1;
const MIN_FETCH_INTERVAL = 1000 * 60 * 60 * 24; // 1 day

interface domain {
	domain: string;
	subdomain: string;
	owner: { username: string; email: string };
	record: {
		URL: string | undefined;
		A: string | undefined;
		TXT: string | undefined;
	};
}
export let domainList: domain[] = [];

export async function refetchList() {
	if (!domainList.length) {
		domainList = (await import("../../domains.json")).default.filter(domain => !domain.record.TXT);
	}

	const current = Date.now();
	if (current - lastFetch < MIN_FETCH_INTERVAL) {
		return;
	}

	lastFetch = current;

	let res;
	try {
		res = await fetch('https://raw-api.is-a.dev/');
	} catch (e) {
		console.error("Error fetching domain list:", e);
		return;
	}
	if ((await res.text()).startsWith("<")) {
		console.error("Rate-limited by raw-api.is-a.dev!");
		return;
	}

	// filter out domains that just have TXT Records
	domainList = ((await res.json()) as domain[]).filter(domain => !domain.record.TXT);
}
