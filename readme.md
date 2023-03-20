![osu! Blocker Marquee](assets/marquee.png)
# osu! Blocker
Blocks all osu! players on twitter.com

## Usage
Nothing! Just install and say goodbye to all idiots!

By default, osu! Blocker does not block users you follow. You can enable this from the extension settings.

## Install
For now, look below.

## Development
### Chrome
1. Clone the repository
2. Visit the [chrome extentions page](chrome://extensions/)
	(or enter `chrome://extensions/` in the Chrome url bar)
3. Enable `Developer mode` in the top right
4. Click `Load unpacked` in the top left and select the cloned directory

### Firefox
1. Clone the repository
	(feel free to delete or rename the other `manifest.json`)
3. Visit the [firefox addon debugging page](about:debugging#/runtime/this-firefox)
	(or enter `about:debugging#/runtime/this-firefox` in the Firefox url bar)
4. Click `Load Temporary Add-on` in the top right and select `manifest.json` in the cloned directory

NOTE: You may need to replace instances of `browser.storage.sync` with `browser.storage.local` for local firefox development.



### Credits

Full credit goes to kheina-com for his original extension Blue-Blocker, of which this is a fork.

