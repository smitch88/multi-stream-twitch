import * as actions from './actions';
import { Record, OrderedMap } from 'immutable';

const StreamsState = Record({
  // mock layout for now
  layout: OrderedMap({
     'suraklin': {
       i: 'suraklin',
       x: 0,
       y: 0,
       w: 3,
       h: 4,
       minW: 3,
       minH: 4,
       playerId: 'suraklin',
       channelId: 'suraklin',
       muted: true,
       autoplay: false,
       type: 'twitch'
     },
     'widget-5': {
       i: 'widget-5',
       x: 6,
       y: 6,
       w: 6,
       h: 6,
       minW: 3,
       minH: 4
     }
   }),
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
