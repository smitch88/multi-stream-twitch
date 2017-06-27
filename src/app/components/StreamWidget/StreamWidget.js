import React from 'react';
import PropTypes from 'prop-types';
import YoutubePlayerIcon from 'react-icons/lib/fa/youtube';
import TwitchIcon from 'react-icons/lib/fa/twitch';
import DefaultToolbarIcon from 'react-icons/lib/fa/question';
import * as _ from 'lodash';
import WidgetToolbar from './WidgetToolbar';
import LoadingIndicator from '../LoadingIndicator';
import StreamDropZone from './StreamDropZone';
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
    this.defaultStartVolume = 0.25; // 25%
    this.playerInstanceEl = undefined;
  }

  setupYTStream = (props) => {
    const { muted, autoplay, seekTo } = props;

    if(muted){
      this.playerInstance.mute();
    } else {
      this.playerInstance.unMute();
      this.playerInstance.setVolume(this.defaultStartVolume * 100);
    }

    if(seekTo && seekTo > 0){
      this.playerInstance.seekTo(seekTo, true);
    }

    if(autoplay){
      this.playerInstance.playVideo();
    }
  }

  setupTwitchStream = (props) => {
    const { muted, autoplay } = props;
    this.playerInstance.setMuted(muted);
    if(!muted){
      this.playerInstance.setVolume(this.defaultStartVolume);
    }
  }

  setupChannelConfiguration = (props) => {
    switch(props.type){
      case 'youtube':
        this.setupYTStream(props);
        break;
      default:
        this.setupTwitchStream(props);
    }
  }

  delayTime(type){
    switch(type){
      case 'youtube':
        // yt - you load so fasts!
        return 100;
      default:
        return 1500;
    }
  }

  setReady = (props) => {
    setTimeout(() => {
      this.setState({ isReady: true }, this.setupChannelConfiguration.bind(this, props));
    }, this.delayTime(props.type));
  }

  onStartError = (errorMessage) => {
    this.setState({ isReady: true });
  }

  startStream = (props) => {
    const { type, playerId } = props;
    const onReady = this.setReady.bind(this, props);
    const playerContainerId = this.playerContainerId();
    switch(type){
      case 'youtube':
        setTimeout(() => {
          try {
            this.playerInstance = new window.YT.Player(playerContainerId, {
              height: '100%',
              width: '100%',
              videoId: props.videoId,
              events: {
                onReady: onReady
              }
            });
          } catch (e){
            console.error(e);
            this.onStartError('Failed to start youtube stream.');
          }
        }, 300);
        break;

      default:
        setTimeout(() => {
          try {
            this.playerInstance = new window.Twitch.Player(playerContainerId, {
              width: '100%',
              height: '100%',
              channel: props.channelId
            });
            this.playerInstance.addEventListener('play', onReady);

          } catch(e){
            console.error(e);
            this.onStartError('Failed to start twitch stream.');
          }
        }, 0);
      }
  }

  toolbarIcon(type){
    const baseToolbarStyle = {
      fontSize: '1em',
      color: theme.colors.white
    };
    const toolbarIcons = {
      youtube: (
        <YoutubePlayerIcon
          style={ Object.assign({},theme.branding.youtube, baseToolbarStyle) }
        />
      ),
      twitch: (
        <TwitchIcon
          style={ Object.assign({}, theme.branding.twitch, baseToolbarStyle) }
        />
      )
    };
    return toolbarIcons[type] || <DefaultToolbarIcon />;
  }

  handleDelete = () => {
    this.props.onDeleteWidget(this.props.i);
  }

  handleChangeChannel = () => {
    this.props.onUpdateWidget(this.props.i, {
      type: '',
      playerId: '',
      channelId: ''
    });
  }

  handleChannelInputChanged = (channelInput) => {
    const { i, type } = this.props;
    // Normalize inputs into onUpdateWidget which requires a format of <id>,<data>
    this.props.onUpdateWidget(this.props.i, {
      type: 'twitch',
      playerId: channelInput,
      channelId: channelInput
    });
  }

  playerContainerId = () => `${ this.props.playerId }_${ this.props.i }`

  componentDidMount(){
    if(this.props.playerId){
      this.setState({ isReady: false }, this.startStream.bind(this, this.props));
    } else {
      console.warn('No playerId was provided for the container');
    }
  }

  componentWillReceiveProps(newProps){
    // Start up the stream if it was changed to a different id
    if(newProps.playerId !== this.props.playerId){
      this.setState({ isReady: false }, this.startStream.bind(this, newProps));
    }
  }

  render(){
    const { i, style, type, playerId } = this.props;
    const styles = baseStyles(style);
    const playerContainerId = this.playerContainerId();
    return (
      <div
        id={ `stream_widget_${i}` }
        className="stream-widget-component"
        style={ styles.widget__container }
      >
        {
          !this.state.isReady &&
            <LoadingIndicator
              name="ball-scale-ripple-multiple"
              cover={ true }
            />
        }
        <WidgetToolbar
          icon={ this.toolbarIcon(type) }
          style={ styles.widget__toolbar }
          onClose={ this.props.onDeleteWidget && this.handleDelete }
          onChange={ this.props.onUpdateWidget && this.props.handleChangeChannel }
        />
        {
          playerId ?
            <div
              id={ playerContainerId }
              ref={ (el) => { this.playerInstanceEl = el; }}
              className="stream-container"
              style={ styles.stream__view }
            />
            :
            <StreamDropZone
              id={ i }
              onLoad={ () => this.setState({ isReady: true }) }
              onDrop={ this.props.onUpdateWidget }
              onChannelSelected={ this.handleChannelInputChanged }
            />
        }
        <div
          className="moving-container"
          style={ styles.moving__container }
        >
          { type ? `${type.toUpperCase()} - ${playerId}` : 'Blank Stream' }
        </div>
      </div>
    );
  }
}

StreamWidget.propTypes = {
  i: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  onUpdateWidget: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default StreamWidget;
