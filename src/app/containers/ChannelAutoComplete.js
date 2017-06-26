import React from 'react';
import { connect } from 'react-redux';
import Color from 'color';
import SearchIcon from 'react-icons/lib/md/search';
import ClearIcon from 'react-icons/lib/md/clear';
import QueryIcon from 'react-icons/lib/md/query-builder';
import uuid from 'uuidv4';
import missingIcon from './MissingIcon';
import { clearChannelQuery, queryChannels } from '../../common/channels/actions';
import { addWidget } from '../../common/streams/actions';
import { AutoComplete } from '../components';
import theme from '../theme';
import * as _ from 'lodash';

const styles = {
  channel__autocomplete: {
    display: 'inline-flex',
    height: 30,
    width: 272,
    alignItems: 'center',
    backgroundColor: Color(theme.colors.primary).lighten(0.3),
    marginLeft: 5
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#cccccc',
    width: 32,
    cursor: 'pointer',
    flexShrink: 0
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#cccccc',
    width: 32,
    fontSize: '1em',
    cursor: 'pointer',
    flexShrink: 0
  },
  // Component defined override map
  autocomplete: {
    input: {
      width: 'calc(100% - 32px)',
      paddingLeft: 0
    }
  },
  list__item: {
    display: 'flex',
    height: 65,
    width: '100%',
    borderTop: '1px solid #dddddd',
    cursor: 'pointer'
  },
  item__image: {
    display: 'flex',
    flexShrink: 0,
    height: '100%',
    width: 65
  },
  item__meta: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding: '0 10px'
  },
  item__name: {
    margin: 0,
    fontWeight: 400,
    fontSize: '1em',
    paddingBottom: 5
  },
  item__views: {
    marginLeft: 10,
    color: '#777777',
    fontSize: '0.825em',
    textTransform: 'uppercase'
  },
  item__description: {
    margin: 0,
    color: '#777777',
    fontSize: '0.85em'
  }
};

class ChannelAutoComplete extends React.Component {

  renderChannelListItem = (item, isHighlighted) => {
    const { name, display_name, views, followers, description, logo, video_banner } = item;
    return (
      <div
        key={ item.name }
        className="channel-list-item"
        style={ styles.list__item }
      >
        <img
          alt="Channel logo or banner or missing icon."
          src={ logo || video_banner || missingIcon } style={ styles.item__image }
        />
        <div style={ styles.item__meta }>
          <h2 style={ styles.item__name }>
            { `${display_name} - ${name}`}
            <small style={ styles.item__views }>
              { `(Views: ${ views }, Followers: ${ followers })`}
            </small>
          </h2>
          <p style={ styles.item__description }>{ _.truncate(description, { length: 85 }) }</p>
        </div>
      </div>
    );
  }

  componentDidMount(){
    if(this.props.query){
      this.props.onQuery(null, this.props.query);
    }
  }

  render(){
    const {
      isQuerying,
      query,
      channels,
      streams,
      count,
      streamCount,
      menuOpen,
      onQuery,
      onSelect,
      onClear
    } = this.props;
    const LeftIcon = isQuerying ? QueryIcon : SearchIcon;
    return (
      <div
        className="channel-auto-complete"
        style={ styles.channel__autocomplete }
      >
        <LeftIcon style={ styles.icon } />
        <AutoComplete
          style={ styles.autocomplete }
          placeholder="Find"
          loading={ isQuerying }
          value={ query }
          options={ channels }
          onChange={ onQuery }
          onSelect={ onSelect }
          itemRenderer={ this.renderChannelListItem }
          total={ count }
          open={ menuOpen }
        />
        { query && <ClearIcon onClick={ onClear } style={ styles.icon } /> }
      </div>
    );
  }
}

const mapState = ({ channels }) => channels.toJS();

const mapDispatch = (dispatch) => ({
  onQuery: (event, query) => dispatch(queryChannels(query)),
  onClear: () => dispatch(clearChannelQuery()),
  onSelect: (id, item) => {
    // TODO: Remove hardcodedness for `onSelect` when we implement a tabbed
    // interface for other streams apart from twitch
    const type = 'twitch';
    const dynamicAttribute = type === 'twitch' ? 'channelId' : 'videoId';
    const generatedId = uuid();
    dispatch(addWidget(generatedId, {
      i: generatedId,
      playerId: id,
      [dynamicAttribute]: id,
      muted: true,
      autoplay: false,
      type,
      ...item
    }));
  }
});

export default connect(mapState, mapDispatch)(ChannelAutoComplete);
