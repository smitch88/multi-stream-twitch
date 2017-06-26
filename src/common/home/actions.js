export const HOME_SHOW_HELP = 'HOME_SHOW_HELP';
export const HOME_HIDE_HELP = 'HOME_HIDE_HELP';

export const HOME_SHOW_SHARE_LINK = 'HOME_SHOW_SHARE_LINK';
export const HOME_SHOW_SHARE_LINK_SUCCEEDED = 'HOME_SHOW_SHARE_LINK_SUCCEEDED';
export const HOME_SHOW_SHARE_LINK_FAILED = 'HOME_SHOW_SHARE_LINK_FAILED';

export const HOME_HIDE_SHARE_LINK = 'HOME_HIDE_SHARE_LINK';

export const HOME_TOGGLE_VIEW_TYPE = 'HOME_TOGGLE_VIEW_TYPE';

export const HOME_SHUFFLE_VIEW_SET_STREAM = 'HOME_SHUFFLE_VIEW_SET_STREAM';
export const HOME_SHUFFLE_VIEW_LEFT = 'HOME_SHUFFLE_VIEW_LEFT';
export const HOME_SHUFFLE_VIEW_RIGHT = 'HOME_SHUFFLE_VIEW_RIGHT';

// Action Creators

export const showHelp = () => ({
  type: HOME_SHOW_HELP
});

export const hideHelp = () => ({
  type: HOME_HIDE_HELP
});

export const showShareableLink = (data) => ({
  type: HOME_SHOW_SHARE_LINK,
  data
});

export const hideShareableLink = () => ({
  type: HOME_HIDE_SHARE_LINK
});

export const toggleViewType = () => ({
  type: HOME_TOGGLE_VIEW_TYPE
});

export const setCurrentStream = (id) => ({
  type: HOME_SHUFFLE_VIEW_SET_STREAM,
  id
});

export const navigateCarouselLeft = () => ({
  type: HOME_SHUFFLE_VIEW_LEFT
});

export const navigateCarouselRight = () => ({
  type: HOME_SHUFFLE_VIEW_RIGHT
});
