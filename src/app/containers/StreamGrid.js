import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { updateWidget } from '../../common/streams/actions';
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

const StreamGrid = ({ draggableSelector, layout, offset, rowHeight, onUpdateWidget }) => {
  const styles = streamGridStyles(offset);
  return (
    <div
      className="stream-grid"
      style={ styles.grid__container }
    >
      <Grid
        layout={ layout }
        rowHeight={ 45 }
      >
        {
          layout.map((props, index) => (
            <StreamWidget
              key={ index }
              { ...props }
              onUpdateWidget={ onUpdateWidget }
            />
          ))
        }
      </Grid>
    </div>
  );
};

StreamGrid.propTypes = {
  layout: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  onUpdateWidget: PropTypes.func.isRequired,
  offset: PropTypes.number,
  draggableSelector: PropTypes.string
};

const mapState = ({ streams }) => {
  // ignore OrderedMap `layout` here as Im not sure the
  // ordering will work if we convert it to a js map first
  const { layout: jsLayout, ...rest} = streams.toJS();
  return {
    layout: streams.get('layout').toArray(),
    ...rest
  };
};

const mapDispatch = (dispatch) => ({
  onUpdateWidget: _.flowRight([dispatch, updateWidget])
});

export default connect(mapState, mapDispatch)(StreamGrid);
