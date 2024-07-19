# FFXIV ACT Chat Extractor (FACE)

### A React app for parsing/filtering FFXIV ACT logs

FACE is an app to enable you able to effectively view chat logs, filter them by chat channels, and save them if desired.
Primarily intended to support role-players, the idea was to be able to capture an in-game roleplaying session without
having to copy, paste, scroll, copy, paste, scroll, ad nauseam. The aim is to have color-coding for each channel and
exporting to various mediums.

This was inspired/taken from [https://github.com/isalin/ACT-Log-Extractor](https://github.com/isalin/ACT-Log-Extractor),
whose initial work, especially with the RegEx (*shudders*) inspired me to try to update it. It's written in React with
TypeScript and Emotion as well as Framer Motion.

It's currently live at: https://face.eggaming.net/

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
- Need to add Fellowships and Cross-World Linkshells
- Add colorpickers for chat channels to customize the colors
- Maybe better UI/color scheme?


---
 
# Original README.md
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
