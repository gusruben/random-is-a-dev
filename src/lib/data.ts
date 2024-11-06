let lastFetch = -1;
const MIN_FETCH_INTERVAL = 1000 * 60 * 60 * 24; // 1 day

interface domain {
    domain: string,
    subdomain: string,
    owner: { username: string },
    record: { URL: string },
}
export let domainList: domain[] = [];

export async function refetchList() {
    const current = Date.now();
    if (current - lastFetch < MIN_FETCH_INTERVAL) { return; }

    lastFetch = current;
    
    const res = await fetch("https://raw-api.is-a.dev/");
    domainList = await res.json();
}