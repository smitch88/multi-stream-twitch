import * as actions from './actions';
import { Map } from 'immutable';
import { Record } from '../../transit';
import * as _ from 'lodash';

const StreamsState = Record({
  layout: Map(),
  rowHeight: 45,
  draggableSelector: '.stream-widget-component',
  scrollTo: ''
}, 'streams');

const streamsReducer = (state = new StreamsState(), action) => {

  switch(action.type){

    case actions.ADD_WIDGET:
      return state.set('scrollTo', action.i)
                  .mergeIn(['layout', action.i], action.data);

    case actions.CLEAR_LAYOUT:
      return state.set('layout', Map());

    case actions.DELETE_WIDGET:
      return state.update('layout', (m) => m.delete(action.i));

    case actions.LOAD_SHARED_LAYOUT:
      return state.set('layout', action.data);

    case actions.UPDATE_LAYOUT:
      return (
        state.update('layout',
          (m) => action.data.reduce((acc, v) => acc.mergeIn([v.get('i')], v), m))
        );

    case actions.UPDATE_WIDGET:
      return state.updateIn(['layout', action.i], (m) => m.merge(action.data));

    default:
      return state;
  }
};

export default streamsReducer;
