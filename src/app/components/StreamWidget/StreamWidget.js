import React from 'react';
import CloseIcon from 'react-icons/lib/md/close';
import PropTypes from 'prop-types';
import Color from 'color';
import theme from '../../theme';

const baseStyles = (overrides) => ({
  widget__container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: '#111111',
    border: '1px solid #333'
  },
  widget__toolbar: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 20,
    padding: '0 5px',
    backgroundColor: theme.colors.black
  },
  widget__closer: {

  },
  closer: {
    cursor: 'pointer'
  },
  stream__view: {
    height: 'calc(100% - 20px)',
    width: '100%'
  }
});

const StreamStats = () => (
  <div className="stream-stats" />
);

/*
* Custom component that interacts w/ the twitch player api to have full-control
* over any actions and events you can perform w/ the player itself
*/

class StreamWidget extends React.Component {

  constructor(props){
    super(props);
    this.playerInstance = undefined;
    this.state = {
      isHovered: false
    };
  }

  startStream = (channelId) => {

    const streamOptions = {
      width: '100%',
      height: '100%',
      channel: channelId
    };

    // Instantiate the embedded twitch client w/ a channelId
    this.playerInstance = new window.Twitch.Player(channelId, streamOptions);

    // Mute initially
    this.playerInstance.setVolume(0);

    // Start event handler
    window.onPlayerEvent = (data) => {
      console.log('player event captured', data);
    }

  }

  componentDidMount(){
    if(this.props.channelId){
      this.startStream(this.props.channelId);
    } else {
      console.warn('No channel id was provided for the container');
    }
  }

  componentWillUnmount(){
    console.log('Destory the mounted stream and destory playerInstance');
  }

  render(){
    const { style, stats, channelId } = this.props;
    const styles = baseStyles(style);
    return (
      <div
        className="stream-widget-component"
        style={ styles.widget__container }
      >
        <div
          className="stream-widget-toolbar"
          style={ styles.widget__toolbar }
        >
          <div
            className="widget-closer"
            style={ styles.widget__closer }
          >
            <CloseIcon style={ styles.closer } />
          </div>
        </div>
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
