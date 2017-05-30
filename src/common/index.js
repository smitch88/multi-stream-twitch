import { combineReducers } from 'redux';
import homeReducer from './home/reducer';
import streamsReducer from './streams/reducer';

const reducer = combineReducers({
  home: homeReducer,
  streams: streamsReducer
});

export { reducer };
