import React from 'react';
import { connect } from 'react-redux';
import AddIcon from 'react-icons/lib/md/add';
import ChangeQualityIcon from 'react-icons/lib/md/high-quality';
import ClearAllIcon from 'react-icons/lib/md/clear-all';
import MuteAllIcon from 'react-icons/lib/md/volume-mute';
import ShuffleViewIcon from 'react-icons/lib/ti/arrow-shuffle';
import Tooltip from 'rc-tooltip';
import uuid from 'uuidv4';
import { addWidget } from '../../../common/streams/actions';
import { showHelp, hideHelp } from '../../../common/home/actions';
import { Footer, Navbar, HelpDialog } from '../../components';
import ChannelAutoComplete from '../ChannelAutoComplete';
import StreamGrid from '../StreamGrid';
import theme from '../../theme';
import styles from './styles';

const NavbarIconTooltip = (props) => {
  return (
    <Tooltip
      placement="bottomLeft"
      trigger={['hover']}
      overlay={<div style={ theme.components.tooltip }>{ props.tooltip }</div>}
      >
      { props.children }
    </Tooltip>
  );
};

const NavbarActions = ({ style, onAddBlankWidget }) => {
  return (
    <div style={ style.navbar__actions }>
      <NavbarIconTooltip tooltip="Add Blank Panel">
        <AddIcon
          style={ style.icon }
          onClick={ onAddBlankWidget }
        />
      </NavbarIconTooltip>
      <NavbarIconTooltip tooltip="Change Video Quality">
        <ChangeQualityIcon style={ style.icon } />
      </NavbarIconTooltip>
      <NavbarIconTooltip tooltip="Mute All">
        <MuteAllIcon style={ style.icon } />
      </NavbarIconTooltip>
      <NavbarIconTooltip tooltip="Remove All">
        <ClearAllIcon style={ style.icon } />
      </NavbarIconTooltip>
      <NavbarIconTooltip tooltip="Shuffle View">
        <ShuffleViewIcon style={ style.icon } />
      </NavbarIconTooltip>
    </div>
  );
};

const Home = ({
  footerHeight,
  navbarHeight,
  showingHelp,
  title,
  onHideHelp,
  onShowHelp,
  onAddBlankWidget
}) => (
  <div style={ styles.container }>
    <Navbar
      title={ title }
      height={ navbarHeight }
      style={ styles.navbar }
    >
      <div style={ styles.navbar__inner }>
        <ChannelAutoComplete />
        <NavbarActions
          style={ styles }
          onAddBlankWidget={ onAddBlankWidget }
        />
      </div>
    </Navbar>
    <StreamGrid offset={ navbarHeight + footerHeight } />
    <Footer height={ footerHeight }>
      <div style={ styles.footer }>
        <span style={ styles.copyright }>{ 'MIT License, Copyright (c) 2017 Multi-Stream' }</span>
        <HelpDialog
          style={ styles }
          isOpen={ showingHelp }
          onClose={ onHideHelp }
          onOpen={ onShowHelp }
          screenReaderHelp="Multi-Stream How To Guide"
        />
      </div>
    </Footer>
  </div>
);

const mapState = state => state.home.toJS();

const mapDispatch = dispatch => ({
  onShowHelp: () => dispatch(showHelp()),
  onHideHelp: () => dispatch(hideHelp()),
  onAddBlankWidget: () => {
    const i = uuid();
    dispatch(addWidget(i, { i }));
  }
});

export default connect(mapState, mapDispatch)(Home);
