import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import theme from '../theme';

// Style map defined by requirements per `react-modal`

const modalDefaultStyles = {
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  content: {
    position: 'absolute',
    top: 40,
    left: 40,
    right: 40,
    bottom: 40,
    border: '1px solid',
    borderColor: theme.colors.black,
    backgroundColor: theme.colors.lightGray,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: 0,
    outline: 'none',
    padding: theme.spacing
  }
};

// Component based default style overrides
const modalStyles = (style) => ({
  overlay: Object.assign({}, modalDefaultStyles.overlay, style.overlay),
  content: Object.assign({}, modalDefaultStyles.content, style.content)
});

/*
* TriggerDialog is a component a simple wrapper around `react-modal` that adds
* the ability to pass in a 'trigger' button for the modal. Props outside of
* `children` and `style` will be passed onto the `Modal` instance i.e, you
* can pass additional props defined by the react-modal `Modal` docs.
*
* https://github.com/reactjs/react-modal
*/

const styles = {
  trigger__dialog: {
    position: 'relative'
  },
  closer__container: {
    position: 'absolute',
    right: 10,
    top: 10
  }
};

const TriggerDialog = ({ children: [trigger, content], style = {}, onClose, ...rest }) => (
  <div
    className="trigger-dialog-component"
    style={ styles.trigger__dialog }
  >
    { trigger }
    <Modal
      style={ modalStyles(style) }
      {...rest}
    >
      { content }
    </Modal>
  </div>
);

TriggerDialog.propTypes = {
  style: PropTypes.object // TODO: Define w/ better definition
};

export default TriggerDialog;
