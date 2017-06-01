import * as actions from './actions';
import { Record, OrderedMap } from 'immutable';

const StreamsState = Record({
  // mock layout for now
  layout: OrderedMap({
     'widget-1': {
       i: 'widget-1',
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
     'widget-2': {
       i: 'widget-2',
       x: 3,
       y: 0,
       w: 3,
       h: 4,
       minW: 3,
       minH: 4,
       playerId: 'aws',
       channelId: 'aws',
       muted: true,
       autoplay: false,
       type: 'twitch'
     },
     'widget-3': {
       i: 'widget-3',
       x: 6,
       y: 0,
       w: 6,
       h: 7,
       minW: 3,
       minH: 4,
       playerId: 'afallenhope',
       channelId: 'afallenhope',
       muted: true,
       autoplay: false,
       type: 'twitch'
     },
     'widget-4': {
       i: 'widget-4',
       x: 0,
       y: 4,
       w: 6,
       h: 10,
       minW: 3,
       minH: 4,
       playerId: 'h5hp9l9_xRg',
       videoId: 'h5hp9l9_xRg',
       muted: false,
       autoplay: true,
       type: 'youtube'
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

const streamsReducer = (state = new StreamsState(), action) => {

  switch(action.type){

    case actions.ADD_WIDGET:
      return state.mergeIn(['layout', action.i], action.data);

    case actions.DELETE_WIDGET:
      return state.update('layout', (p) => p.delete(action.i));

    case actions.UPDATE_WIDGET:
      return state.updateIn(
        ['layout', action.i],
        (p) => Object.assign({}, p, action.data)
      );

    default:
      return state;
  }
};

export default streamsReducer;
