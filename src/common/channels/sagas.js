import * as actions from './actions';
import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { twitchRequest } from '../../fetch';

const emptySuccess = put({
  type: actions.QUERY_CHANNELS_SUCCEEDED,
  data: {
  _total: 0,
  channels: []
}});

/*
* Given a `query` string query the TWITCH api for any channels that match up to
* 100 results (this is the max it will allow to return).
* This has a built in `delay` since it can be used for `autocompletion` and
* we do not want it to fire on every keystroke necessarily. We want the queries
* to be cancelled.
*/

function* _queryChannels({ query }) {
  yield call(delay, 300);
  try {
    if(!query){
      yield emptySuccess;
    } else {
      const url = `https://api.twitch.tv/kraken/search/channels?query=${query}&limit=100`;
      const data = yield call(twitchRequest, url);
      yield put({ type: actions.QUERY_CHANNELS_SUCCEEDED, data });
    }
  } catch (e) {
    yield put({ type: actions.QUERY_CHANNELS_FAILED, error: e.message });
  }
}

export function* queryChannelsSaga() {
  yield takeLatest(actions.QUERY_CHANNELS, _queryChannels);
}
