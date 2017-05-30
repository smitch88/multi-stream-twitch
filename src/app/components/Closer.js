import React from 'react';
import CloseIcon from 'react-icons/lib/md/close';
import PropTypes from 'prop-types';
import theme from '../theme';

const defaultCloserStyles = {
  container: {
    cursor: 'pointer'
  },
  icon: {
    fontSize: '1.1em',
    color: theme.colors.red
  }
};

// Component based default style overrides
const baseStyles = (overrides) => ({
  container: Object.assign({}, defaultCloserStyles.container, overrides.container),
  icon: Object.assign({}, defaultCloserStyles.icon, overrides.icon)
});

const Closer = ({ style = {}, onClose }) => {
  const styles = baseStyles(style);
  return (
    <div
      className="closer-component"
      style={ styles.container }
      onClick={ onClose }
    >
      <CloseIcon style={ styles.icon } />
    </div>
  );
};

Closer.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Closer;
