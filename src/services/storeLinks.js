export async function getLinkSave(key) {
	const myLinks = await localStorage.getItem(key);

	let linksSaves = JSON.parse(myLinks) || [];

	return linksSaves;
}

export async function saveLink(key, newLink) {
	let linksStored = await getLinkSave(key);

	const hasLink = linksStored.some((Link) => Link.id === newLink.id);

	if (hasLink) {
		console.log("Hmm... Parece que esse link já está em sua lista.");
		return;
	}

	linksStored.push(newLink);
	await localStorage.setItem(key, JSON.stringify(linksStored));
}

export async function deleteLink(links, id) {
	let myLinks = links.filter((item) => {
		return item.id !== id;
	});

	localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));

	return myLinks;
}
