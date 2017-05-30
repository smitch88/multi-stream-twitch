import { Record } from 'immutable';

const StreamsState = Record({
  // mock layout for now
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
    playerId: 'mavvox',
    channelId: 'mavvox',
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
    x: 0,
    y: 6,
    w: 12,
    h: 12,
    minW: 3,
    minH: 2,
    playerId: 'IR2p6OQqJj0',
    videoId: 'IR2p6OQqJj0',
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
