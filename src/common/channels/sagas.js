import * as actions from './actions';
import { delay } from 'redux-saga'
import { call, put, takeLatest, throttle } from 'redux-saga/effects'
import { twitchRequest } from '../../fetch';
import * as _ from 'lodash';

function* _queryChannels({ query }) {
  yield call(delay, 300);
  try {
    if(!query){
      yield put({
        type: actions.QUERY_CHANNELS_SUCCEEDED,
        data: {
        _total: 0,
        channels: []
      }});
    } else {
      const url = `https://api.twitch.tv/kraken/search/channels?query=${query}&limit=100`;
      const data = yield call(twitchRequest, url);
      console.debug('=== Received query channels:', data);
      yield put({ type: actions.QUERY_CHANNELS_SUCCEEDED, data });
    }
  } catch (e) {
    console.error('Error querying for channels', e);
    yield put({ type: actions.QUERY_CHANNELS_FAILED, error: e.message });
  }
}

export function* queryChannelsSaga() {
  yield takeLatest(actions.QUERY_CHANNELS, _queryChannels);
}
