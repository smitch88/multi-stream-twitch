import React from 'react';
import ShareIcon from 'react-icons/lib/md/share';
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
      height: 125,
      width: 600,
      padding: 0
    }
  },
  icon: {
    fontSize: '1.25em',
    cursor: 'pointer',
    marginLeft: 15
  },
  sharable__container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.white
  },
  sharable__title: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    fontSize: '2em',
    marginTop: 10,
    fontFamily: theme.typography.branding.fontFamily
  },
  input__container: {
    display: 'inline-flex',
    border: '1px solid #ddd',
    height: 38,
    marginTop: 20,
    width: '100%',
    fontFamily: theme.typography.branding.fontFamily
  },
  input: {
    border: 'none',
    height: '100%',
    backgroundColor: '#f8f8f8',
    width: '100%',
    fontSize: '1.25em',
    padding: '0 0 0 10px',
    outline: 'none'
  },
  sharable__inner: {
    height: '100%',
    width: '100%',
    padding: '0 20px'
  },
  shareable__data: {

  }
};

const ShareableLinkDialog = ({ data, shareableLink, isOpen, onClose, onOpen, screenReaderHelp }) => (
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
      overlay={<div style={ theme.components.tooltip }>Share</div>}
      >
      <ShareIcon
        style={ styles.icon }
        onClick={ onOpen }
      />
    </Tooltip>
    <div style={ styles.sharable__container }>
      <div style={ styles.sharable__inner }>
        <h1 style={ styles.sharable__title }>Copy to Share Stream Layout</h1>
        <div style={ styles.input__container }>
          <input
            style={ styles.input }
            value={ shareableLink }
            placeholder="You will see a link with a layout defined"
          />
        </div>
      </div>
    </div>
  </TriggerDialog>
);

ShareableLinkDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  shareableLink: PropTypes.string,
  data: PropTypes.string
};

export default ShareableLinkDialog;
