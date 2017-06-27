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

const StreamGrid = ({
  draggableSelector,
  layout,
  rowHeight,
  onUpdateLayout,
  onUpdateWidget,
  onDeleteWidget,
  scrollTo
}) => {
  return (
    <Grid
      layout={ layout }
      rowHeight={ 50 }
      onLayoutChange={ onUpdateLayout }
      scrollToElement={ `stream_widget_${scrollTo}` }
    >
      {
        layout.map((props, index) => (
          <StreamWidget
            key={ `${ props.i }_${ index }` }
            { ...props }
            onUpdateWidget={ onUpdateWidget }
            onDeleteWidget={ onDeleteWidget }
          />
        ))
      }
    </Grid>
  );
};

StreamGrid.propTypes = {
  layout: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  onUpdateWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  onUpdateLayout: PropTypes.func.isRequired,
  draggableSelector: PropTypes.string,
  scrollTo: PropTypes.string
};

const mapState = ({ streams }) => {
  const { layout, ...rest} = streams.toJS();
  return {
    layout: _.values(layout),
    ...rest
  };
};

const mapDispatch = (dispatch) => ({
  onUpdateLayout: _.flowRight([dispatch, updateLayout]),
  onUpdateWidget: _.flowRight([dispatch, updateWidget]),
  onDeleteWidget: _.flowRight([dispatch, deleteWidget])
});

export default connect(mapState, mapDispatch)(StreamGrid);
