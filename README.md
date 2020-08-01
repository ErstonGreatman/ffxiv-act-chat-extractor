# FFXIV ACT Chat Extractor (FACE)
### A React app for parsing/filtering FFXIV ACT logs
#### Currently running at: https://face.eggaming.net

FACE is an app to enable you able to effectively view chat logs, filter them by chat channels, and save them if desired. Primarily intended to support role-players, the idea was to be able to capture an in-game roleplaying session without having to copy, paste, scroll, copy, paste, scroll, ad nauseum. The aim is to have color-coding for each channel and exporting to various mediums.

This was inspired/taken from https://github.com/isalin/ACT-Log-Extractor, whose initial work, especially with the RegEx (*shudders*) inspired me to try and update it. It's written in React with TypeScript and Emotion. I might add something like Pose for better animations with elements.

## Usage

As long as Advanced Combat Tracker is open during the RP session, it should log your chat. Just drag the log into the app or click on the app to open the file browser. By default, they should be stored in `%appdata%\Advanced Combat Tracker\FFXIVLogs`. Once the log is loaded, click to expand the filters if you want to filter out unwanted channels and enjoy!

## Known Issues/Planned Updates
- Need to add Fellowships and Cross-World Linkshells
- Add colorpickers for chat channels to customize the colors
- Export to HTML, text, and maybe other formats? open to suggestions
- Maybe better UI/color scheme?
- Cross-World Names/Auto-Translate doesn't display correctly/at all, NPC names longer than three words cut off See FAQ section


## FAQ

I'm horrible at anticipating questions so this section will likely be horrible.

Q. Cross-World names add the realm to the last name, auto-translate doesn't seem to show at all and NPC names longer than three words cutt off at two. What gives?!
A. Looking at my own logs, it seems to be an issue of how ACT records the log so I don't think I can do much about that. If there is a setting someone knows about to change that, let me know so I can leave notes here and make any fixes!

Q. Is this under a license?
A. It uses the MIT license to feel free to take it and improve it if you'd like.


## Contact

Need to reach me for something? You can tweet at me: [@ErstonGreatman](https://twitter.com/ErstonGreatman)

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
