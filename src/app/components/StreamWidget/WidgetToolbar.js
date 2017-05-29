import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/md/close';
import Color from 'color';
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
  widget__closer: {
    cursor: 'pointer'
  },
  closer: {
    fontSize: '1.1em'
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
          <div
            className="widget-closer"
            style={ styles.widget__closer }
            onClick={ onClose}
          >
            <CloseIcon style={ styles.closer } />
          </div>
      }
    </div>
  );
}

WidgetToolbar.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
};

export default WidgetToolbar;
