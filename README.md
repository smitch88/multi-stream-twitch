# multi-stream-twitch
A react/redux project to view multiple twitch streams at the same time!

### Overview

Goal: Create a single page app w/ react + redux + immutableJS that allows a user to configure
any amount of windows in the browser.

##### Examples to check out for inspiration
* http://kadgar.net/live/
* http://multitwitch.tv/
* https://multistre.am/

##### Improvements/Feature list
1. Select X amount of streams by channel name to put into a configurable grid display
  - Responsive display w/ delete stream window
  - Get a list of channels for autocomplete
  - Configurable window dimensions
     - `react-grid-layout`, or try `masonry` as an example of how to integrated 3rd party non-react libs into react

2. Persist channels across full page refreshes (local storage state)
3. Keybindings to mute/unmute -> go full screen quicker
4. Unified chat to broadcast the same message across a subset of the streams in view

##### Codez

1. Add Redux
  - Add in store configuration
  - Add in immutableJS store scaffolding

2. Add Fetch (http client) to integrate w/ Twitch API
  - Add fetch utility helper funcs for `isomorphic fetch`
  - Look at generators or async/await usage
  - Integrate w/ Twitch Developer API (can this be done anon?)

3. Add Theme (pick css/inline style framework)
  - Create base theme file for import
