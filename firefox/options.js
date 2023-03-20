import { DefaultOptions } from '../shared.js';
// TODO: Change back browser.storage.local to browser.storage.sync before release
// restore state from storage
document.addEventListener("DOMContentLoaded", () => {
	browser.storage.sync.get(DefaultOptions).then(items => {
		document.getElementById("block-following").checked = items.blockFollowing;
		document.getElementById("skip-verified").checked = items.skipVerified;
		document.getElementById("block-nft-avatars").checked = items.blockNftAvatars;
	});
});

document.getElementById("block-following").addEventListener("input", () => {
	browser.storage.sync.set({
		blockFollowing: document.getElementById("block-following").checked,
	}).then(() => {
		// Update status to let user know options were saved.
		const status = document.getElementById("block-following-status");
		status.textContent = "saved";
		setTimeout(() => status.textContent = null, 1000);
	});
});


