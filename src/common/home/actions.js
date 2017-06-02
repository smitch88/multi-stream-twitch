export const HOME_SHOW_HELP = 'HOME_SHOW_HELP';
export const HOME_HIDE_HELP = 'HOME_HIDE_HELP';

export const HOME_SHOW_SHARE_LINK = 'HOME_SHOW_SHARE_LINK';
export const HOME_SHOW_SHARE_LINK_SUCCEEDED = 'HOME_SHOW_SHARE_LINK_SUCCEEDED';
export const HOME_SHOW_SHARE_LINK_FAILED = 'HOME_SHOW_SHARE_LINK_FAILED';

export const HOME_HIDE_SHARE_LINK = 'HOME_HIDE_SHARE_LINK';

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
