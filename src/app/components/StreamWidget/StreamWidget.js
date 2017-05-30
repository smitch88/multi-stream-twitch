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
    border: '1px solid #333',
    cursor: 'move'
  },
  stream__view: {
    height: 'calc(100% - 25px)',
    width: '100%'
  },
  moving__container: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  widget__toolbar: {
    toolbar: {
      height: 25
    }
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

  setupYTStream = () => {
    const { muted } = this.props;
    if(muted){
      this.playerInstance.mute();
    } else {
      this.playerInstance.unmute();
      this.playerinstance.setVolume(this.defaultStartVolume * 100);
    }
  }

  setupTwitchStream = () => {
    const { muted } = this.props;
    this.playerInstance.setMuted(muted);
    if(!muted){
      this.playerinstance.setVolume(this.defaultStartVolume);
    }
  }

  setupChannelConfiguration = () => {
    switch(this.props.type){
      case 'youtube':
        this.setupYTStream();
        break;
      default:
        this.setupTwitchStream()
    }
  }

  delayTime(type){
    switch(type){
      case 'youtube':
        return 100;
      default:
        return 1500;
    }
  }

  setReady = () => {
    setTimeout(() => {
      this.setState({ isReady: true }, this.setupChannelConfiguration)
    }, this.delayTime(this.props.type));
  }

  startStream = () => {
    const { type, channelId, videoId } = this.props;
    switch(type){
      case 'youtube':
        setTimeout(() => {
          this.playerInstance = new window.YT.Player(videoId, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: { 'autoplay': 1, 'controls': 0 },
            events: {
              onReady: this.setReady
            }
          });
        }, 0);
        break;

      default:
        setTimeout(() => {
          this.playerInstance = new window.Twitch.Player(channelId, {
            width: '100%',
            height: '100%',
            channel: channelId
          });
          this.playerInstance.addEventListener('ready', this.setReady);
        }, 0);
    }
  }

  componentDidMount(){
    if(this.props.playerId){
      this.startStream();
    } else {
      console.warn('No channel id was provided for the container');
    }
  }

  componentWillUnmount(){
    console.log('Destory the mounted stream and destory playerInstance');
  }

  render(){
    const { style, type, playerId } = this.props;
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
            <WidgetToolbar
              style={ styles.widget__toolbar }
              onClose={ () => alert('TODO: Implement close handler.') }
            />
        }
        <div
          id={ playerId }
          className="stream-container"
          style={ styles.stream__view }
        />
        <div
          className="moving-container"
          style={ styles.moving__container }
        >
          { `${type.toUpperCase()} - ${playerId}` }
        </div>
      </div>
    );
  }
}

StreamWidget.propTypes = {
  style: PropTypes.object
};

export default StreamWidget;
