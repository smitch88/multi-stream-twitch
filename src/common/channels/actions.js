export const QUERY_CHANNELS = 'QUERY_CHANNELS';
export const QUERY_CHANNELS_SUCCEEDED = 'QUERY_CHANNELS_SUCCEEDED';
export const QUERY_CHANNELS_FAILED = 'QUERY_CHANNELS_FAILED';
export const QUERY_CHANNELS_CANCEL = 'QUERY_CHANNELS_CANCEL';

export const clearChannelQuery = () => ({
  type: QUERY_CHANNELS_CANCEL
});

export const queryChannels = (query) => ({
  type: QUERY_CHANNELS,
  query
});
