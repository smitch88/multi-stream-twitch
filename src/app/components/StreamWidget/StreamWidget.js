import React from 'react';
import PropTypes from 'prop-types';
import WidgetToolbar from './WidgetToolbar';
import LoadingIndicator from '../LoadingIndicator';
import theme from '../../theme';

const baseStyles = (overrides) => ({
  widget__container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.black,
    border: '1px solid #333'
  },
  stream__view: {
    height: 'calc(100% - 20px)',
    width: '100%'
  }
});

/*
* Custom component that interacts w/ the twitch player api to have full-control
* over any actions and events you can perform w/ the player itself
*/

class StreamWidget extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isReady: false
    };
    this.playerInstance = undefined;
    this.defaultStartVolume = 0.5; // 50%
  }

  setupChannelConfiguration = () => {

    const { muted } = this.props;

    // Set muted stream
    this.playerInstance.setMuted(muted);

    // If not muted set the volume
    if(!muted){
      this.playerinstance.setVolume(this.defaultStartVolume);
    }
  }

  setReady = () => {
    setTimeout(() => {
      this.setState({ isReady: true }, this.setupChannelConfiguration)
    }, 1500);
  }

  startStream = () => {

    const { channelId } = this.props;

    const streamOptions = {
      width: '100%',
      height: '100%',
      channel: channelId
    };

    // Instantiate the embedded twitch client w/ a channelId
    this.playerInstance = new window.Twitch.Player(channelId, streamOptions);

    // Configure player instance based on player props
    if(this.playerInstance){
      this.playerInstance.addEventListener('ready', this.setReady);
    }

  }

  componentDidMount(){
    if(this.props.channelId){
      this.startStream();
    } else {
      console.warn('No channel id was provided for the container');
    }
  }

  componentWillUnmount(){
    console.log('Destory the mounted stream and destory playerInstance');
  }

  render(){
    const { style, channelId } = this.props;
    const styles = baseStyles(style);
    return (
      <div
        className="stream-widget-component"
        style={ styles.widget__container }
      >
        {
          !this.state.isReady ?
            <LoadingIndicator
              name="ball-scale-ripple-multiple"
              cover={ true }
            />
            :
            <WidgetToolbar onClose={ () => alert('TODO: Implement close handler.') } />
        }
        <div
          id={ channelId }
          style={ styles.stream__view }
        />
      </div>
    );
  }
}

StreamWidget.propTypes = {
  style: PropTypes.object
};

export default StreamWidget;
