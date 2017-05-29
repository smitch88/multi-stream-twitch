import React from 'react';
import PropTypes from 'prop-types';
import { Grid, StreamWidget } from '../../components';

const streamGridStyles = (props) => ({
  grid__container: {
    display: 'flex',
    height: `calc(100% - ${props.offset}px)`,
    width: '100%',
    color: 'inherit',
    overflow: 'auto'
  }
});

// TODO: Move to global app state
const mockLayout = [{
  i: 'widget-1',
  x: 0,
  y: 0,
  w: 6,
  h: 6,
  channelId: 'pixelprodotco'
},
{
  i: 'widget-2',
  x: 6,
  y: 0,
  w: 6,
  h: 6,
  channelId: 'cam_zach'
},
{
  i: 'widget-3',
  x: 0,
  y: 6,
  w: 6,
  h: 6,
  channelId: 'junicus'
}];

const StreamGrid = (props) => {
  const styles = streamGridStyles(props);
  // TODO: Retrieve layout from redux|connect props when that is hooked up
  const layout = mockLayout;
  const streams = layout.map((props, index) => (
    <StreamWidget key={ index } { ...props } />
  ));
  return (
    <div
      className="stream-grid"
      style={ styles.grid__container }
    >
      <Grid
        layout={ layout }
        rowHeight={ 45 }
        draggableSelector=".stream-widget-toolbar"
      >
        { streams }
      </Grid>
    </div>
  );
};

StreamGrid.propTypes = {
  offset: PropTypes.number
};

export default StreamGrid;
