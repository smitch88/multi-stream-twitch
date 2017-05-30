import * as actions from './actions';
import { call, put, takeLatest } from 'redux-saga/effects'
import { twitchRequest } from '../../fetch';

function* _queryChannels(action) {
  try {
    const url = `https://api.twitch.tv/kraken/search/channels?query=${action.query}&limit=100`;
    const data = yield call(twitchRequest, url);
    console.debug('=== Received query channels:', data);
    yield put({ type: actions.QUERY_CHANNELS_SUCCEEDED, data });
  } catch (e) {
    console.error('Error querying for channels', e);
    yield put({ type: actions.QUERY_CHANNELS_FAILED, error: e.message });
  }
}

export function* queryChannelsSaga() {
  yield takeLatest(actions.QUERY_CHANNELS, _queryChannels);
}
