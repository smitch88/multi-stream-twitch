import React from 'react';
import { connect } from 'react-redux';
import Color from 'color';
import SearchIcon from 'react-icons/lib/md/search';
import ClearIcon from 'react-icons/lib/md/clear';
import QueryIcon from 'react-icons/lib/md/query-builder';
import { clearChannelQuery, queryChannels } from '../../common/channels/actions';
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

const missingIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtOTUyLjM2MjE4KSI+PHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC10cmFuc2Zvcm06bm9uZTtkaXJlY3Rpb246bHRyO2Jsb2NrLXByb2dyZXNzaW9uOnRiO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO2NvbG9yOiMwMDAwMDA7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTsiIGQ9Im0gNiw5NzIuMzYyMTkgMCwxIDAsNTguMDAwMDEgMCwxIDEsMCA4NiwwIDEsMCAwLC0xIDAsLTU4LjAwMDAxIDAsLTEgLTEsMCAtODYsMCB6IG0gMiwyIDg0LDAgMCw0Ny40MDYyMSAtMTkuMjUsLTIxLjA5MzcgYyAtMC4yMjQ0NCwtMC4yNDYzIC0wLjU3NzY5LC0wLjM2ODIgLTAuOTA2MjUsLTAuMzEyNSAtMC4yMTQ4NiwwLjAzOSAtMC40MTU4NywwLjE1MDcgLTAuNTYyNSwwLjMxMjUgbCAtMTUuMDYyNSwxNiBMIDM0Ljc1LDk5Mi42NzQ2OSBjIC0wLjIyNDQ0LC0wLjI0NjMzIC0wLjU3NzY5LC0wLjM2ODE0IC0wLjkwNjI1LC0wLjMxMjUgLTAuMjE0ODYsMC4wMzkgLTAuNDE1ODcsMC4xNTA2NyAtMC41NjI1LDAuMzEyNSBMIDgsMTAxOS44MzEgeiBtIDQ5LDYgYyAtMy44NTQxNSwwIC03LDMuMTQ1ODUgLTcsNyAwLDMuODU0MTUgMy4xNDU4NSw3IDcsNyAzLjg1NDE1LDAgNywtMy4xNDU4NSA3LC03IDAsLTMuODU0MTUgLTMuMTQ1ODUsLTcgLTcsLTcgeiBtIC0wLjUsMiBjIDAuMTY4NjUsLTAuMDE3IDAuMzI2NjcsMCAwLjUsMCAyLjc3MzI3LDAgNSwyLjIyNjczIDUsNSAwLDIuNzczMjcgLTIuMjI2NzMsNSAtNSw1IC0yLjc3MzI3LDAgLTUsLTIuMjI2NzMgLTUsLTUgMCwtMi41OTk5NCAxLjk3MDI2LC00Ljc0NTIxIDQuNSwtNSB6IG0gLTIyLjUzMTI1LDEyLjQ2ODc1IDMxLjgxMjUsMzUuNTMxMjYgLTU3Ljc4MTI1LDAgMCwtNy42NTYzIHogTSA3MiwxMDAyLjgzMDkgbCAyMCwyMS45MDYzIDAsNS42MjUgLTIzLjUzMTI1LDAgLTEwLjkwNjI1LC0xMi4xODc1IHoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBtYXJrZXI9Im5vbmUiIHZpc2liaWxpdHk9InZpc2libGUiIGRpc3BsYXk9ImlubGluZSIgb3ZlcmZsb3c9InZpc2libGUiPjwvcGF0aD48L2c+PC9zdmc+';

class ChannelAutoComplete extends React.Component {

  renderChannelListItem = (item, isHighlighted) => {
    const { name, display_name, views, followers, description, logo, video_banner, url } = item;
    return (
      <div
        key={ item.name }
        className="channel-list-item"
        style={ styles.list__item }
      >
        <img src={ logo || video_banner || missingIcon } style={ styles.item__image } />
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
    )
  }

  componentDidMount(){
    if(this.props.query){
      this.props.onQuery(null, this.props.query);
    }
  }

  render(){
    const { isQuerying, query, channels, count, menuOpen, onQuery, onSelect, onClear } = this.props;
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
    )
  }
}

const mapState = ({ channels }) => channels.toJS();

const mapDispatch = (dispatch) => ({
  onQuery: (event, query) => dispatch(queryChannels(query)),
  onClear: () => dispatch(clearChannelQuery()),
  onSelect: (value, item) => console.log('selected channel', value, item)
});

export default connect(mapState, mapDispatch)(ChannelAutoComplete);
