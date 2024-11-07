import { domainList, refetchList } from '$lib/data';

export async function GET() {
	// if the domain list hasn't been fetched yet, wait for that--
	// otherwise, let it fetch in the background and use the old one
	if (domainList.length) {
		refetchList();
	} else {
		await refetchList();
	}
	return new Response(domainList[Math.floor(Math.random() * domainList.length)].domain);
}
