import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {
  deleteWidget,
  updateLayout,
  updateWidget
} from '../../common/streams/actions';
import { Grid, StreamWidget } from '../components';
import theme from '../theme';

const streamGridStyles = (offset) => ({
  grid__container: {
    display: 'flex',
    height: `calc(100% - ${offset}px)`,
    width: '100%',
    color: 'inherit',
    overflow: 'auto'
  },
  no__widgets: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.25em',
    fontWeight: 300,
    color: '#aaaaaa'
  },
  no__widgets__container: {
    height: '50%',
    width: '50%'
  }
});

const StreamGrid = ({
  draggableSelector,
  layout,
  offset,
  rowHeight,
  onUpdateLayout,
  onUpdateWidget,
  onDeleteWidget
}) => {
  const styles = streamGridStyles(offset);
  return (
    <div
      className="stream-grid"
      style={ styles.grid__container }
    >
    {
      layout && layout.length > 0 ?
        <Grid
          layout={ layout }
          rowHeight={ 45 }
          onLayoutChange={ onUpdateLayout }
        >
          {
            layout.map((props, index) => (
              <StreamWidget
                key={ props.i }
                { ...props }
                onUpdateWidget={ onUpdateWidget }
                onDeleteWidget={ onDeleteWidget }
              />
            ))
          }
        </Grid>
        :
        <div style={ styles.no__widgets }>
          <div style={ styles.no__widgets__container }>
            You have added no streams. Use the autocomplete field above to find
            a channel by name, or hit the '+' to add a new blank stream panel.
          </div>
        </div>
    }
    </div>
  );
};

StreamGrid.propTypes = {
  layout: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  onUpdateWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  onUpdateLayout: PropTypes.func.isReqired,
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
  onUpdateLayout: _.flowRight([dispatch, updateLayout]),
  onUpdateWidget: _.flowRight([dispatch, updateWidget]),
  onDeleteWidget: _.flowRight([dispatch, deleteWidget])
});

export default connect(mapState, mapDispatch)(StreamGrid);
