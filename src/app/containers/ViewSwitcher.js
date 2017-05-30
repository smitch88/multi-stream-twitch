import React from 'react';
import GridViewIcon from 'react-icons/lib/md/grid-on';
import ShuffleViewIcon from 'react-icons/lib/ti/arrow-shuffle';
import PropTypes from 'prop-types';

const styles = {
  icon: {
    fontSize: '1.5em',
    cursor: 'pointer'
  }
};

const ViewSwitcher = ({ showingGridView, onClick }) => {
  const Icon = !showingGridView ? GridViewIcon : ShuffleViewIcon;
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
  onClick: PropTypes.func.isRequired
};

export default ViewSwitcher;
