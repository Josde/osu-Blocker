import { DefaultOptions } from '../shared.js';

// restore state from storage
document.addEventListener("DOMContentLoaded", () => {
	chrome.storage.sync.get(DefaultOptions, items => {
		document.getElementById("block-following").checked = items.blockFollowing;
	});
});

document.getElementById("block-following").addEventListener("input", () => {
	chrome.storage.sync.set({
		blockFollowing: document.getElementById("block-following").checked,
	}, () => {
		// Update status to let user know options were saved.
		const status = document.getElementById("block-following-status");
		status.textContent = "saved";
		setTimeout(() => status.textContent = null, 1000);
	});
});
