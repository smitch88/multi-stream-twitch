import * as actions from './actions';
import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as _ from 'lodash';
import { googleShortenerRequest } from '../../fetch';
import { toJSON } from '../../transit';

const emptySuccess = put({
  type: actions.HOME_SHOW_SHARE_LINK_SUCCEEDED,
  data: {
  shortUrl: '',
  longUrl: ''
}});

const normalize = (data) => {
  return _.map(data, (value, key) => {
    // Remove anything that could be a url as google doesnt like that
    delete value.video_banner;
    delete value.logo;
    return _.pickBy(value, (item) => !_.isNull(item));
  });
};

function* _getGoogleShortenedURL({ data }) {
  try {
    if(!data || data && data.length === 0){
      yield emptySuccess;
    } else {
      const url = `https://www.googleapis.com/urlshortener/v1/url`;
      const longUrl = `${location.protocol}//${location.host}/${toJSON(normalize(data))}`;
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
