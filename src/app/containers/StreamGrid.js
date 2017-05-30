import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, StreamWidget } from '../components';

const streamGridStyles = (offset) => ({
  grid__container: {
    display: 'flex',
    height: `calc(100% - ${offset}px)`,
    width: '100%',
    color: 'inherit',
    overflow: 'auto'
  }
});

const StreamGrid = ({ draggableSelector, layout, offset, rowHeight }) => {
  const styles = streamGridStyles(offset);
  return (
    <div
      className="stream-grid"
      style={ styles.grid__container }
    >
      <Grid
        layout={ layout }
        rowHeight={ 45 }
        draggableSelector={ draggableSelector }
      >
        {
          layout.map((props, index) => (
            <StreamWidget key={ index } { ...props } />
          ))
        }
      </Grid>
    </div>
  );
};

StreamGrid.propTypes = {
  layout: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  offset: PropTypes.number,
  draggableSelector: PropTypes.string
};

export default connect(state => state.streams.toJS())(StreamGrid);
