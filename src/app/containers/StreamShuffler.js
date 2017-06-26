import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import theme from '../theme';
import { Closer, StreamWidget } from '../components';
import { setCurrentStream } from '../../common/home/actions';
import { deleteWidget, updateWidget } from '../../common/streams/actions';
import { keyBindings } from '../../common/utils';

const baseStyles = ({ carouselHeight = 110 }) => ({
  shuffler: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  shuffler__view: {
    display: 'flex',
    flexDirection: 'row',
    height: `calc(100% - ${carouselHeight}px)`,
    width: '100%'
  },
  view__stream: {
    position: 'relative',
    display: 'flex',
    height: 'calc(100% - 1px)',
    width: 'calc(100% - 350px)',
    backgroundColor: theme.colors.black,
    border: 'none'
  },
  view__chat: {
    display: 'flex',
    flexShrink: 0,
    height: '100%',
    width: 350,
    backgroundColor: theme.colors.black,
    overflow: 'hidden'
  },
  chat__iframe: {
    border: 'none',
    width: '100%',
    height: '100%'
  },
  chat__noId: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: theme.colors.black,
    color: theme.colors.white
  },
  shuffler__carousel: {
    display: 'flex',
    height: carouselHeight,
    width: 'calc(100% - 20px)',
    overflowX: 'auto',
    overflowY: 'hidden',
    backgroundColor: theme.colors.black,
    padding: '0 10px',
    borderTop: '1px solid',
    borderTopColor: theme.colors.darkestGray
  },
  carousel__inner: {
    display: 'inline-flex',
    height: '100%',
    width: '100%',
    borderLeft: '1px solid',
    borderLeftColor: theme.colors.darkestGray
  },
  preview: {
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    height: '100%',
    width: carouselHeight * 1.5,
    color: theme.colors.white,
    border: '1px solid',
    borderColor: theme.colors.darkestGray,
    marginRight: 10,
    borderTop: 0,
    borderBottom: 0,
    cursor: 'pointer'
  },
  preview__active: (type) => ({
    backgroundColor: theme.branding[type || 'twitch'].color
  }),
  preview__inner: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 1,
    top: 0,
    left: 0
  },
  preview__background: {
    position: 'absolute',
    backgroundColor: 'inherit',
    height: '100%',
    width: '100%',
    zIndex: 0,
    top: 0,
    left: 0,
    opacity: 0.4
  },
  profile__banner: {
    height: '100%',
    width: '100%'
  },
  preview__closer: {
    container: {
      display: 'none',
      position: 'absolute',
      top: 1,
      right: 2,
      zIndex: 3
    }
  }
});

class StreamShuffler extends React.Component {

  constructor(props){
    super(props);
    this.listeners = {
      shuffle: undefined
    };
    this.currentStreamIndex = this.currentStreamIndex.bind(this);
    this.handleKeyDownCapture = this.handleKeyDownCapture.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.keyBindingToAction = {
      [keyBindings.ARROW_LEFT]: this.goBack,
      [keyBindings.ARROW_RIGHT]: this.goForward
    };
  }

  currentStreamIndex(){
    return _.findIndex(this.props.streams, ({ i }) => (
      this.props.currentStream.i === i)
    );
  }

  goBack(){
    const currentIndex = this.currentStreamIndex();
    const maxLength = this.props.streams.length - 1;
    const previousIndex = currentIndex === 0 ? maxLength : currentIndex - 1;
    const previousId = this.props.streams[previousIndex].i;
    this.props.onSetStream(previousId);
  }

  goForward(){
    const currentIndex = this.currentStreamIndex();
    const maxLength = this.props.streams.length - 1;
    const nextIndex = currentIndex === maxLength ? 0 : currentIndex + 1;
    const nextId = this.props.streams[nextIndex].i;
    this.props.onSetStream(nextId);
  }

  handleKeyDownCapture(e){
    const keyActionFunction = this.keyBindingToAction[e.keyCode];
    if(keyActionFunction){
      e.preventDefault();
      e.stopPropagation();
      keyActionFunction();
    }
  }

  getLiveChatUrl(stream){
    switch(stream.type){
      case 'youtube':
        return `https://www.youtube.com/live_chat?v=${stream.videoId}&embed_domain=${location.hostname}`;
      case 'twitch':
        return `http://www.twitch.tv/${stream.channelId}/chat`;
      default:
        console.error('Unknown chat type screen', type);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDownCapture);
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDownCapture);
  }

  render(){
    const styles = baseStyles(this.props);
    const { currentStream, onSetStream, onDeleteWidget, onUpdateWidget, streams } = this.props;
    return (
      <div
        style={ styles.shuffler }
        className="stream-shuffler"
      >
        <div
          style={ styles.shuffler__view }
          className="active-stream-view"
        >
          <div style={ styles.view__stream }>
            <StreamWidget
              key={ currentStream.i }
              onUpdateWidget={ onUpdateWidget }
              {...currentStream }
            />
          </div>
          <div style={ styles.view__chat }>
            {
              currentStream.channelId || currentStream.videoId ?
                <iframe
                  style={ styles.chat__iframe }
                  scrolling="no"
                  src={ this.getLiveChatUrl(currentStream) }
                />
                :
                <div style={ styles.chat__noId }>
                  A channel is not configured to view chat.
                </div>
            }
          </div>
        </div>
        <div
          style={ styles.shuffler__carousel }
          className="stream-carousel"
        >
          <div style={ styles.carousel__inner }>
            {
              streams.map(({ i, playerId, type, video_banner, logo }) => {
                const isActive = currentStream.i === i;
                const previewClassName = `stream-preview ${ isActive ? 'is-active' : '' }`;
                const previewStyles = (
                  Object.assign({}, styles.preview, isActive && styles.preview__active(type))
                );
                const backgroundImage = video_banner || logo;
                return (
                  <div
                    key={ i }
                    className={ previewClassName }
                    style={ previewStyles }
                    onClick={ onSetStream.bind(this, i) }
                  >
                    <div style={ styles.preview__inner }>
                      { playerId || '???' }
                    </div>
                    {
                      backgroundImage &&
                        <div
                          className="stream-background"
                          style={ styles.preview__background }
                        >
                          <img
                            style={ styles.profile__banner }
                            src={ backgroundImage }
                          />
                        </div>
                    }
                    <Closer
                      style={ styles.preview__closer }
                      onClose={ onDeleteWidget.bind(this, i) }
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ home, streams }) => {
  const { currentStream } = home.toJS();
  const { layout } = streams.toJS();
  const previewStreams = _.orderBy(layout, 'y', 'asc');
  return {
    streams: previewStreams,
    // default to the zeroeth stream
    currentStream: layout[currentStream] || previewStreams[0]
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSetStream: (id) => dispatch(setCurrentStream(id)),
  onUpdateWidget: _.flowRight([dispatch, updateWidget]),
  onDeleteWidget: _.flowRight([dispatch, deleteWidget])
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamShuffler);
