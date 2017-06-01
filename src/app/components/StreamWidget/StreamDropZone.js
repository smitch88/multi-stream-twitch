import React from 'react';
import theme from '../../theme';

/*
* Returns a component tht handles dragging a link into the frame and passes back
* the stream data configuration.
*
* Currently only supports youtube and twitch.
*/

const styles = {
  stream__configure: {
    height: 'calc(100% - 25px)',
    width: '100%',
    backgroundColor: '#222222'
  },
  configure__inner: {
    height: 'calc(100% - 25px)',
    width: '100%',
    color: theme.colors.white,
    fontFamily: 'Roboto, sans-serif'
  },
  configure__error: {
    marginTop: 10,
    fontSize: '2em',
    color: theme.colors.red,
    fontWeight: 500
  },
  padding: {
    padding: 20
  }
};

class StreamDropZone extends React.Component {

  constructor(props){
    super(props);
    this.dropzoneInstance = undefined;
    this.regex = {
      youtube: /https:\/\/www.(youtube).com\/.+v=(.+)/ig,
      twitch: /https:\/\/www.(twitch).tv\/(.+)/ig
    };
    this.state = {
      dropzoneError: undefined
    };
  }

  dropzoneId = () => {
    return `dropzone_${this.props.dropzoneId}`;
  }

  destroyDropzone = () => {
    // Destroy the dropzone instance listeners
    if(this.dropzoneInstance){
      this.dropzoneInstance.removeEventListener('dragover', this.handleDragOver);
      this.dropzoneInstance.removeEventListener('drop', this.handleDrop);
    }
  }

  handleDragOver(e){
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  extractedUrlObject = (droppedUrl) => {
    // TODO: make generic when we have more url types that are valid to drop
    const youtubeMatch = this.regex.youtube.exec(droppedUrl);
    const twitchMatch = this.regex.twitch.exec(droppedUrl);
    const matchedOnUrl = twitchMatch || youtubeMatch;

    // extract out stream type and stream data i.e videoId or channelId
    if(matchedOnUrl){
      const [_, type, playerId] = matchedOnUrl;
      const playerTypeReference = type === 'twitch' ? 'channelId' : 'videoId';
      return [true, {
        type,
        playerId,
        [playerTypeReference]: playerId
      }];
    }
    return [false, {}];
  }

  handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const streamUrlDropped = e.dataTransfer.getData('url');
    const [isValid, urlData] = this.extractedUrlObject(streamUrlDropped);
    if(isValid){
      // Set new widget configuration that was dragged into the panel
      this.setState({ dropzoneError: undefined },
        this.props.onDrop.bind(null, this.props.dropzoneId, urlData));
    } else {
      console.warn('Invalid URL was dragged into dropzone container.');
      this.setState({
        dropzoneError: new Error('Invalid URL dropped. Pleaes try a youtube or twitch stream.')
      });
    }
  }

  setupDropzone = () => {
    this.dropzoneInstance = document.getElementById(this.dropzoneId());
    if(this.dropzoneInstance){
      // Handle when a user drags something overtop the dropzone
      // Maybe validate its some data we can actually deal with
      this.dropzoneInstance.addEventListener('dragover', this.handleDragOver);
      // Configure the widget w/ the proper data i.e update the layout object
      this.dropzoneInstance.addEventListener('drop', this.handleDrop);
    } else {
      console.warn('There was an issue while trying to setup the widgets dropzone container.');
    }
  }

  componentDidMount(){
    /*
    * Allow for external component callback, like in the case of state in the parent
    * depending on knowing the dropzone has initialized e.g, `LoadingIndicator` state
    * is autoset to isReady true in `StreamWidget`
    */
    if(this.props.onLoad){
      this.props.onLoad();
    };
    this.setupDropzone();
  }

  componentWillUnmount(){
    this.destroyDropzone();
  }

  render(){
    const { dropzoneError } = this.state;
    return (
      <div
        className="stream-container"
        style={ styles.stream__configure }
      >
        <div
          id={ this.dropzoneId() }
          className="dropzone"
          style={ styles.configure__inner }
        >
          <div style={ styles.padding }>
            <h3>Configure Stream</h3>
            <p>You can enter a channel name or auto-magically drag a twitch or stream channel into this panel.</p>
            {
              dropzoneError &&
                <div style={ styles.configure__error }>
                  { dropzoneError.message }
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default StreamDropZone;
