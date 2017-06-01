import * as actions from './actions';
import { Record, OrderedMap } from 'immutable';

const StreamsState = Record({
  layout: OrderedMap(),
  rowHeight: 45,
  draggableSelector: '.stream-widget-component'
});

// Merge helper for js objects
const merger = (o, n) => Object.assign({}, o, n);

const streamsReducer = (state = new StreamsState(), action) => {

  switch(action.type){

    case actions.UPDATE_LAYOUT:
      return state.update('layout', (v) => v.mergeWith(merger, action.updatedLayout));

    case actions.ADD_WIDGET:
      return state.setIn(['layout', action.i], action.data);

    case actions.DELETE_WIDGET:
      return state.update('layout', (v) => v.delete(action.i));

    case actions.UPDATE_WIDGET:
      return state.updateIn(
        ['layout', action.i],
        (v) => Object.assign({}, v, action.data)
      );

    default:
      return state;
  }
};

export default streamsReducer;
