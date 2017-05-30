import React from 'react';
import PropTypes from 'prop-types';
import Closer from '../Closer';
import theme from '../../theme';

const baseStyles = (overrides) => ({
  widget__toolbar: Object.assign({}, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 20,
    padding: '0 5px',
    backgroundColor: theme.colors.black
  }, overrides.toolbar),
  closer: {
    icon: {
      color: theme.colors.white
    }
  },
});

const WidgetToolbar = ({ style = {}, onClose }) => {
  const styles = baseStyles(style);
  return (
    <div
      className="stream-widget-toolbar"
      style={ styles.widget__toolbar }
    >
      {
        onClose &&
          <Closer
            style={ styles.closer }
            onClose={ onClose }
          />
      }
    </div>
  );
}

WidgetToolbar.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
};

export default WidgetToolbar;
