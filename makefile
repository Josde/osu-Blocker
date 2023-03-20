VERSION := $(shell cat manifest.json | jq .version)


.PHONY: firefox
firefox:
	# ifneq (,$(wildcard osu-blocker-firefox-$(VERSION).zip))
	# 	rm "osu-blocker-firefox-${VERSION}.zip"
	# endif

	mv manifest.json chrome-manifest.json
	mv firefox-manifest.json manifest.json
	zip "osu-blocker-firefox-${VERSION}.zip" manifest.json LICENSE readme.md style.css inject.js shared.js assets/* firefox/*
	mv manifest.json firefox-manifest.json
	mv chrome-manifest.json manifest.json

.PHONY: chrome
chrome:
	# ifneq (,$(wildcard osu-blocker-chrome-$(VERSION).zip))
	# 	rm "osu-blocker-chrome-${VERSION}.zip"
	# endif
	zip "osu-blocker-chrome-${VERSION}.zip" manifest.json LICENSE readme.md style.css inject.js shared.js assets/* chrome/*
