import { redirect } from '@sveltejs/kit';
import { domainList, refetchList } from '$lib/data';

export async function load() {
	// if the domain list hasn't been fetched yet, wait for that--
	// otherwise, let it fetch in the background and use the old one
	if (domainList.length) {
		refetchList();
	} else {
		await refetchList();
	}
	redirect(302, 'http://' + domainList[Math.floor(Math.random() * domainList.length)].domain);
}
