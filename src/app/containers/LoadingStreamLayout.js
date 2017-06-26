import React from 'react';
import { connect } from 'react-redux';
import { LoadingIndicator } from '../components';
import theme from '../theme';
import { loadSharedLayout } from '../../common/streams/actions';
import { fromJSON } from '../../transit';

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
      const parsedLayout = fromJSON(this.props.match.params.share);
      console.log('parsedLayout in this bitch', parsedLayout);
      this.props.onLoadLayout(parsedLayout);
      this.props.history.replace('/', {});
    } catch (e) {
      console.error(e);
      // Failure to parse url params redirect back to home and blank layout configuration
      this.setState({ loading: false });
      this.props.history.replace('/', {});
    }
  }

  loadConfigurationFromUrl = () => {
    this.setState({ started: true, loading: true },
      () => setTimeout(this.parseParamsAndUpdateLayout, 3000));
  }

  componentDidMount(){
    if(this.props.match.params && this.props.match.params.share){
      this.loadConfigurationFromUrl();
    }
  }

  render(){
    const { loading } = this.state;
    return (
      <div style={ styles.loading__layout }>
        <h1>Welcome to Multi-Stream! Loading configuration now....</h1>
        { loading && <LoadingIndicator cover={ true } color={ theme.colors.white } />}
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  onLoadLayout: (layout) => dispatch(loadSharedLayout(layout))
});

export default connect(undefined, mapDispatch)(LoadingStreamLayout);
