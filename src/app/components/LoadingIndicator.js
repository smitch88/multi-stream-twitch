import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import theme from '../theme';

const baseStyles = (isCovering) => ({
  container: Object.assign({}, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    position: 'relative'
  }, isCovering && {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  })
});

const LoadingIndicator = ({ name = 'ball-clip-rotate', cover = false, color }) => {
  const styles = baseStyles(cover);
  return (
    <div
      style={ styles.container }
      className="loading-indicator-component"
    >
      <Spinner
        name={ name }
        fadeIn="full"
        color={ color || theme.colors.white }
      />
    </div>
  );
};

LoadingIndicator.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.bool,
  color: PropTypes.string
};

export default LoadingIndicator;
