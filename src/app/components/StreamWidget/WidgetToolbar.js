import React from 'react';
import PropTypes from 'prop-types';
import ChangeChannelIcon from 'react-icons/lib/md/switch-video';
import Tooltip from 'rc-tooltip';
import Closer from '../buttons/Closer';
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
  widget__actions: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  icon: {
    cursor: 'pointer',
    color: theme.colors.white,
    marginRight: 10,
    fontSize: '1.1em'
  },
  closer: {
    icon: {
      color: theme.colors.white
    }
  },
});

const WidgetToolbar = ({ style = {}, icon, onClose, onChange }) => {
  const styles = baseStyles(style);
  return (
    <div
      className="stream-widget-toolbar"
      style={ styles.widget__toolbar }
    >
      <div className="widget-toolbar-icon">
        { icon }
      </div>
      <div
        className="widget-toolbar-actions"
        style={ styles.widget__actions }
      >
      {
        onChange &&
          <Tooltip
            placement="top"
            trigger={['hover']}
            overlay={<div style={ theme.components.tooltip }>Change Channel</div>}
          >
            <ChangeChannelIcon
              style={ styles.icon }
              onClick={ onChange }
            />
          </Tooltip>
      }
      {
        onClose &&
          <Closer
            style={ styles.closer }
            onClose={ onClose }
          />
      }
      </div>
    </div>
  );
}

WidgetToolbar.propTypes = {
  icon: PropTypes.any,
  style: PropTypes.object,
  onClose: PropTypes.func,
  onChange: PropTypes.func
};

export default WidgetToolbar;
