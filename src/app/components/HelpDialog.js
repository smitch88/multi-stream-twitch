import React from 'react';
import InfoIcon from 'react-icons/lib/md/info';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import TriggerDialog from './TriggerDialog';
import theme from '../theme';

const HelpDialog = ({ style, isOpen, onClose, onOpen, screenReaderHelp }) => (
  <TriggerDialog
    style={ style.modal }
    isOpen={ isOpen }
    onRequestClose={ onClose }
    onClose={ onClose }
    contentLabel={ screenReaderHelp }
  >
    <Tooltip
      placement="topLeft"
      trigger={['hover']}
      overlay={<div style={ theme.components.tooltip }>Help</div>}
      >
      <InfoIcon
        style={ style.icon }
        onClick={ onOpen }
      />
    </Tooltip>
    <div style={ style.help__dialog.container }>
      <h1 style={ style.help__dialog.title }>Multi-Stream: How To</h1>
      <p style={ style.help__dialog.text }>
        TODO: Fill out w/ help content
      </p>
    </div>
  </TriggerDialog>
);

HelpDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default HelpDialog;
