import React from 'react';
import { connect } from 'react-redux';
import { LoadingIndicator } from '../components';
import theme from '../theme';
import { loadSharedLayout } from '../../common/streams/actions';

const styles = {
  loading__layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    fontFamily: theme.typography.branding.fontFamily
  }
};

class LoadingStreamLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      started: false
    }
  }

  parseParamsAndUpdateLayout = () => {
    try {
      const parsedLayout = JSON.parse(decodeURIComponent(this.props.match.params.share));
      this.props.onLoadLayout(parsedLayout);
      this.props.history.replace('/', {});
    } catch (e) {
      console.error(e);
      // failure to parse url params redirect back to home and blank layout configuration
      this.setState({ loading: false });
    }
  }

  loadConfigurationFromUrl = () => {
    this.setState({ started: true, loading: true }, this.parseParamsAndUpdateLayout)
  }

  componentDidMount(){
    if(this.props.match.params && this.props.match.params.share){
      setTimeout(this.loadConfigurationFromUrl, 300);
    }
  }

  render(){
    const { started, loading } = this.state;
    return (
      <div style={ styles.loading__layout }>
        {
          !started ?
            <h1>Welcome to Multi-Stream! Loading configuration now....</h1>
            :
            loading && <LoadingIndicator cover={ true } color={ theme.colors.white } />
        }
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  onLoadLayout: (layout) => dispatch(loadSharedLayout(layout))
});

export default connect(undefined, mapDispatch)(LoadingStreamLayout);
