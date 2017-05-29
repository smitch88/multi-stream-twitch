import React from 'react';
import PropTypes from 'prop-types';
import WidgetToolbar from './WidgetToolbar';

const baseStyles = (overrides) => ({
  widget__container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: '#111111',
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
    this.playerInstance = undefined;
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
    const { style, channelId } = this.props;
    const styles = baseStyles(style);
    return (
      <div
        className="stream-widget-component"
        style={ styles.widget__container }
      >
        <WidgetToolbar onClose={ () => alert('TODO: Implement close handler.') } />
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
