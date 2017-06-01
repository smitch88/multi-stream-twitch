import React from 'react';
import PropTypes from 'prop-types';
import Closer from '../Closer';
import theme from '../../theme';

const baseStyles = (overrides) => ({
  widget__toolbar: Object.assign({}, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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

const WidgetToolbar = ({ style = {}, icon, onClose }) => {
  const styles = baseStyles(style);
  return (
    <div
      className="stream-widget-toolbar"
      style={ styles.widget__toolbar }
    >
      { icon }
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
  icon: PropTypes.any,
  style: PropTypes.object,
  onClose: PropTypes.func
};

export default WidgetToolbar;
