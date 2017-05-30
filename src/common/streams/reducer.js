import { Record } from 'immutable';

const StreamsState = Record({
  layout: [{
    i: 'widget-1',
    x: 0,
    y: 0,
    w: 6,
    h: 6,
    channelId: 'cam_zach',
    muted: true
  },
  {
    i: 'widget-2',
    x: 6,
    y: 0,
    w: 6,
    h: 6,
    channelId: 'pixelprodotco',
    muted: true
  },
  {
    i: 'widget-3',
    x: 0,
    y: 6,
    w: 6,
    h: 6,
    channelId: 'junicus',
    muted: true
  }],
  rowHeight: 45,
  draggableSelector: '.stream-widget-toolbar'
});

const streamsReducer = (state = new StreamsState(), { type: actionType, ...rest }) => {

  switch(actionType){
    default:
      return state;
  }
};

export default streamsReducer;
