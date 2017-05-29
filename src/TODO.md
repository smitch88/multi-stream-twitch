### Multi-stream twitch js app

Goal: Create a single page app w/ react + redux + immutableJS that allows a user to configure
any amount of windows in the browser.

##### Examples to check out for inspiration
http://kadgar.net/live/
multitwitch.tv
kbmod multistream

##### Improvements/Feature list
1. Select X amount of streams by channel name to put into a configurable grid display
  a. Responsive display w/ delete stream window
  b. Get a list of channels for autocomplete
  c. Configurable window dimensions
     i. `react-grid-layout`, or try `masonry` as an example of how to integrated 3rd party non-react libs into react

2. Persist channels across full page refreshes (local storage state)
3. Keybindings to mute/unmute -> go full screen quicker
4. Unified chat to broadcast the same message across a subset of the streams in view

##### Setup
A. Eject `create-react-app` scaffolding in favor of customizing ourselves
B. Add proper folder structure

##### Codez

Add linter for auto code fixes...

Basic layout and flow
  a. Add `react-router` v4
    i. Add basic layout routing
  b. TBD

1. Add Redux
  a. Add in store configuration
  b. Add in immutableJS store scaffolding

2. Add Fetch (http client)
  a. Add fetch utility helper funcs for `isomorphic fetch`

3. Add Theme (pick css/inline style framework)
  a. find something...
  b. Create base theme file for import
