# FFXIV ACT Chat Extractor (FACE)

### A React app for parsing/filtering FFXIV ACT logs

---

FACE is an app to enable you able to effectively view chat logs, filter them by chat channels, and save them if desired.
Primarily intended to support role-players, the idea was to be able to capture an in-game roleplaying session without
having to copy, paste, scroll, copy, paste, scroll, ad nauseam. The aim is to have color-coding for each channel and
exporting to various mediums.

This was inspired/taken from [https://github.com/isalin/ACT-Log-Extractor](https://github.com/isalin/ACT-Log-Extractor),
whose initial work, especially with the RegEx (*shudders*) inspired me to try to update it. It's written in React with
TypeScript and Emotion as well as Framer Motion.

It's currently live at: https://ffxiv-act-chat-extractor.netlify.app/

---

## Usage

As long as Advanced Combat Tracker is open during the RP session, it should log your chat. Just drag the log into the
app or click on the app to open the file browser. By default, they should be stored
in `%appdata%\Advanced Combat Tracker\FFXIVLogs`. Once the log is loaded, click to expand the filters if you want to
filter out unwanted channels and enjoy!

### Don't have a log but just wanted to test out the app?
Download this sample one here in the repo and drop it into the app:

[Network_27009_20240709.log](Network_27009_20240709.log)

## Known Issues/Planned Updates

- Export methods: HTML, Markdown, etc.
- Add colorpickers for chat channels to customize the colors
- Better UI/color scheme
- I might redo this in Svelte because I'm quite loving it


---
