import React from 'react';
import InfoIcon from 'react-icons/lib/md/info';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import TriggerDialog from '../TriggerDialog';
import theme from '../../theme';

const styles = {
  // Component defined style override map
  modal: {
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)'
    },
    content: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      height: '50%',
      width: '50%'
    }
  },
  // Component defined style override map
  help__dialog: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.typography.base.fontFamily,
      height: '100%',
      width: '100%',
      padding: 20,
      backgroundColor: '#fff',
      border: '1px solid #333',
      color: theme.colors.black,
      overflowY: 'scroll'
    },
    title: {
      margin: 0,
      paddingBottom: 3,
      borderBottom: '1px solid #cccccc',
      height: 'auto',
      width: '100%',
      ...theme.typography.branding
    },
    text: {
      marginTop: 20,
      marginBottom: 0,
      color: theme.colors.black
    }
  },
  icon: {
    fontSize: '1.25em',
    cursor: 'pointer',
    marginLeft: 15
  }
};

const HelpDialog = ({ isOpen, onClose, onOpen, screenReaderHelp }) => (
  <TriggerDialog
    style={ styles.modal }
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
        style={ styles.icon }
        onClick={ onOpen }
      />
    </Tooltip>
    <div style={ styles.help__dialog.container }>
      <h1 style={ styles.help__dialog.title }>Multi-Stream: How To</h1>
      <p style={ styles.help__dialog.text }>
        TODO: Fill out w/ help content
      </p>
    </div>
  </TriggerDialog>
);

HelpDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired
};

export default HelpDialog;
