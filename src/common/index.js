import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import homeReducer from './home/reducer';
import { homeShareSaga } from './home/sagas';
import streamsReducer from './streams/reducer';
import { channelsReducer } from './channels/reducer';
import { queryChannelsSaga } from './channels/sagas';

const reducer = combineReducers({
  home: homeReducer,
  streams: streamsReducer,
  channels: channelsReducer
});

const rootSaga = function*() {
  yield all([
    queryChannelsSaga(),
    homeShareSaga()
  ])
}

export { reducer, rootSaga };
