import { Record } from 'immutable';

const StreamsState = Record({
  layout: [{
    i: 'widget-1',
    x: 0,
    y: 0,
    w: 3,
    h: 6,
    minW: 3,
    minH: 2,
    playerId: 'cam_zach',
    channelId: 'cam_zach',
    muted: true,
    type: 'twitch'
  },
  {
    i: 'widget-2',
    x: 3,
    y: 0,
    w: 3,
    h: 6,
    minW: 3,
    minH: 2,
    playerId: 'undergroundies',
    channelId: 'undergroundies',
    muted: true,
    type: 'twitch'
  },
  {
    i: 'widget-3',
    x: 6,
    y: 0,
    w: 6,
    h: 6,
    minW: 3,
    minH: 2,
    playerId: 'pixelprodotco',
    channelId: 'pixelprodotco',
    muted: true,
    type: 'twitch'
  },
  {
    i: 'widget-4',
    x: 6,
    y: 6,
    w: 6,
    h: 6,
    minW: 3,
    minH: 2,
    playerId: '-pq0a5Yfa1g',
    videoId: '-pq0a5Yfa1g',
    muted: true,
    type: 'youtube'
  }],
  rowHeight: 45,
  draggableSelector: '.stream-widget-component'
});

const streamsReducer = (state = new StreamsState(), { type: actionType, ...rest }) => {

  switch(actionType){
    default:
      return state;
  }
};

export default streamsReducer;
