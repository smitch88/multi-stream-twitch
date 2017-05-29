import React from 'react';
import Color from 'color';
import SearchIcon from 'react-icons/lib/md/search';
import ClearIcon from 'react-icons/lib/md/clear';
import { AutoComplete } from '../../components';
import theme from '../../theme';

const styles = {
  channel__autocomplete: {
    display: 'inline-flex',
    height: 30,
    width: 250,
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
    cursor: 'pointer'
  },
  autocomplete: {
    input: {
      width: 'calc(100% - 32px)',
      paddingLeft: 0
    }
  }
};

class ChannelAutoComplete extends React.Component {

  constructor(props){
    super(props);
  }

  loadOptions(){
    // TODO: Async load the channels and populate the list view
  }

  render(){
    return (
      <div
        className="channel-auto-complete"
        style={ styles.channel__autocomplete }
      >
        <SearchIcon style={ styles.icon } />
        <AutoComplete
          style={ styles.autocomplete }
          placeholder="Find"
          loadOptions={ this.loadOptions }
        />
        <ClearIcon style={ styles.icon } />
      </div>
    )
  }

}

export default ChannelAutoComplete;
