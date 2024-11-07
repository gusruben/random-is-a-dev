let lastFetch = -1;
const MIN_FETCH_INTERVAL = 1000 * 60 * 60 * 24; // 1 day

interface domain {
    domain: string,
    subdomain: string,
    owner: { username: string, email: string },
    record: {
        URL: string | undefined,
        A: string | undefined,
        TXT: string | undefined, 
    },
}
export let domainList: domain[] = [];

export async function refetchList() {
    const current = Date.now();
    if (current - lastFetch < MIN_FETCH_INTERVAL) { return; }

    lastFetch = current;
    
    const res = await fetch("https://raw-api.is-a.dev/");
    // filter out domains that just have TXT Records
    domainList = (await res.json() as domain[]).filter(domain => !domain.record.TXT);
}