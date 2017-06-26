import * as actions from './actions';
import { Record } from '../../transit';

export const ChannelsState = Record({
  isQuerying: false,
  query: '',
  channels: [],
  count: 0,
  streams: [],
  streamCount: 0,
  error: undefined
}, 'channels');

export const channelsReducer = (state = new ChannelsState(), action) => {

  switch(action.type){

    case actions.QUERY_CHANNELS:
      return state.set('isQuerying', true)
                  .set('query', action.query)
                  .set('channels', [])
                  .set('count', 0)
                  .set('streams', [])
                  .set('streamCount', 0)
                  .set('error', undefined);

    case actions.QUERY_CHANNELS_SUCCEEDED:
      return state.set('isQuerying', false)
                  .set('channels', action.data.channels)
                  .set('count', action.data._total)
                  .set('streams', action.data.streams)
                  .set('streamCount', action.data._totalStreams);

    case actions.QUERY_CHANNELS_FAILED:
      return state.set('isQuerying', false)
                  .set('error', action.error);

    case actions.QUERY_CHANNELS_CANCEL:
      return state.set('isQuerying', false)
                  .set('query', '')
                  .set('channels', [])
                  .set('streams', [])
                  .set('count', 0)
                  .set('streamCount', 0)
                  .set('error', action.error);

    default:
      return state;
  }
};
