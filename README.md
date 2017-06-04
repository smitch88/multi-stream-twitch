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

* Setup aws instance for public playground
  * [Demo Instance](http://multi-stream.s3-website-us-east-1.amazonaws.com)

* ~~Add babel-eslint~~

* Add Theme (pick css/inline style framework)
  * ~~Add base theme~~
  * Look into other css frameworks for inline styles

* ~~Basic layout and workflow w/ react-router v4~~

* ~~Add Redux~~
  * ~~Add in store configuration~~
  * ~~Add in immutableJS store scaffolding~~
    * ~~Add in transit-js encoding for immutableJS records~~
  * ~~Persist to local storage~~
    * ~~`localForage` integration~~
  * ~~Load from local storage~~
    * ~~`redux-persist` integration~~

* ~~Add Fetch client~~
  * ~~Add client wrapper over top of fetch~~
  * ~~Add redux-saga w/ saga middleware~~
  * ~~Add TWITCH API integration for channel querying~~
  * ~~Add YOUTUBE API integration for channel querying~~
  * ~~Add GOOGLE URL Shortener for sharing a layout configuration~~

* Help dialog
  * ~~Add help dialog modal~~
  * Fill out help content and directions for usage

* Share dialog and google link shortner integration
  * ~~Add share dialog w/ input field that displays shortened google url link of the layout data from the store~~
  * ~~Add google url shortener API w/ saga~~

* ~~Load shared configuration from link~~
  * ~~Add landing page for the sharable stuff~~
  * ~~Add load container that takes a configuration from the url and injects into the current layout state for the user.~~

* Stream Layout Features
  * ~~Integrate `react-grid-layout` for configurable grid layout~~
  * ~~Integrate Twitch Player and Youtube Player to view videos or live streams~~
  * Add blank stream widget
    * ~~Add button from Navbar~~
    * ~~Drag and drop link or video stream into container~~
    * Input field to copy and paste link reference
  * ~~Clear all widgets in layout~~
  * ~~Delete an individual widget from layout~~
  * Change Video Quality across all streams
  * Mute / Unmute across all streams
  * Shuffle View for layouts
    * Add toggle button into shuffle view
    *
