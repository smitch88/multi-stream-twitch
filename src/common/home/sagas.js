import * as actions from './actions';
import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { googleShortenerRequest } from '../../fetch';

const emptySuccess = put({
  type: actions.HOME_SHOW_SHARE_LINK_SUCCEEDED,
  data: {
  shortUrl: '',
  longUrl: ''
}});

function* _getGoogleShortenedURL({ data }) {
  try {
    if(!data || data && data.length === 0){
      yield emptySuccess;
    } else {
      const url = `https://www.googleapis.com/urlshortener/v1/url`;
      const longUrl = `${location.protocol}//${location.host}/${JSON.stringify(data)}`;
      const response = yield call(googleShortenerRequest, url, { longUrl });
      yield put({ type: actions.HOME_SHOW_SHARE_LINK_SUCCEEDED, response });
    }
  } catch (e) {
    yield put({ type: actions.HOME_SHOW_SHARE_LINK_FAILED, error: e.message });
  }
}

export function* homeShareSaga() {
  yield takeLatest(actions.HOME_SHOW_SHARE_LINK, _getGoogleShortenedURL);
}
