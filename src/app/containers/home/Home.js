import React from 'react';
import { connect } from 'react-redux';
import { showHelp, hideHelp } from '../../../common/home/actions';
import {
  Footer,
  Navbar,
  HelpDialog
} from '../../components';
import ChannelAutoComplete from '../streams/ChannelAutoComplete';
import ViewSwitcher from '../home/ViewSwitcher';
import StreamGrid from '../streams/StreamGrid';
import styles from './styles';

const Home = ({
  footerHeight,
  navbarHeight,
  showingHelp,
  title,
  onHideHelp,
  onShowHelp
}) => (
  <div style={ styles.container }>
    <Navbar
      title={ title }
      height={ navbarHeight }
      style={ styles.navbar }
    >
      <div style={ styles.navbar__inner }>
        <ChannelAutoComplete />
        <div style={ styles.navbar__actions }>
          <ViewSwitcher />
        </div>
      </div>
    </Navbar>
    <StreamGrid offset={ navbarHeight + footerHeight } />
    <Footer height={ footerHeight }>
      <HelpDialog
        style={ styles }
        isOpen={ showingHelp }
        onClose={ onHideHelp }
        onOpen={ onShowHelp }
        screenReaderHelp="Multi-Stream How To Guide"
      />
    </Footer>
  </div>
);

const mapState = state => state.home.toJS();

const mapDispatch = dispatch => ({
  onShowHelp: () => dispatch(showHelp()),
  onHideHelp: () => dispatch(hideHelp())
});

export default connect(mapState, mapDispatch)(Home);
