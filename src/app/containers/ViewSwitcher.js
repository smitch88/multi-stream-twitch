import React from 'react';
import GridViewIcon from 'react-icons/lib/md/grid-on';
import ShuffleViewIcon from 'react-icons/lib/ti/arrow-shuffle';
import PropTypes from 'prop-types';

const baseStyles = (overrides) => ({
  icon: Object.assign({}, {
    fontSize: '1.5em',
    cursor: 'pointer'
  }, overrides.icon)
});

const ViewSwitcher = ({ style = {}, showingGridView, onClick }) => {
  const Icon = !showingGridView ? GridViewIcon : ShuffleViewIcon;
  const styles = baseStyles(style);
  return (
    <div className="view-switcher-component">
      <Icon
        style={ styles.icon }
        onClick={ onClick }
      />
    </div>
  )
};

ViewSwitcher.propTypes = {
  showingGridView: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default ViewSwitcher;
