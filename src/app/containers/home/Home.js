import React, { Component } from 'react';
import InfoIcon from 'react-icons/lib/md/info';
import {
  Footer,
  Navbar,
  StatBar
} from '../../components';
import ChannelAutoComplete from '../streams/ChannelAutoComplete';
import StreamGrid from '../streams/StreamGrid';
import theme from '../../theme/';

const styles = {
  container: Object.assign({}, {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    width: 'inherit',
    background: theme.colors.black
  }, theme.typography.base),
  navbar: {
    backgroundColor: theme.colors.primary
  },
  icon: {
    fontSize: '2em',
    cursor: 'pointer',
    marginLeft: 10
  }
};

class Home extends Component {

  constructor(props){
    super(props);
    // TODO: Move to global app state
    this.state = {
      title: 'Multi-Stream',
      navbarHeight: 50,
      footerHeight: 50
    }
  }

  render() {
    // Determines the center height offset based on whether a navbar or footer are visible
    const { navbarHeight, footerHeight, title } = this.state;
    const gridOffset = navbarHeight + footerHeight;
    return (
      <div style={ styles.container }>
        <Navbar
          title={ title }
          height={ navbarHeight }
          style={ styles.navbar }
        >
          <ChannelAutoComplete />
          { /* TODO: Action Icons */ }
        </Navbar>
        <StreamGrid offset={ gridOffset } />
        <Footer height={ footerHeight }>
          { /* TODO: Help dialog */}
          <InfoIcon style={ styles.icon } />
        </Footer>
      </div>
    );
  }
}

export default Home;
