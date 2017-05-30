import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import theme from '../theme';

const baseStyles = (overrides) => ({
  autocomplete__container: Object.assign({}, {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }, overrides.container),
  autocomplete__wrapper: Object.assign({}, {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center'
  }, overrides.wrapper),
  autocomplete__input: Object.assign({}, {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: 'inherit',
    height: '100%',
    width: '100%',
    border: 'none',
    fontSize: '0.925em',
    outline: 'none',
    color: theme.colors.white,
    fontWeight: 300
  }, overrides.input),
  autocomplete__menu: Object.assign({}, {
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.95)',
    fontSize: '1em',
    position: 'fixed',
    overflow: 'auto',
    height: 'auto',
    maxHeight: '60%',
    zIndex: 99999,
    width: 'auto',
    minWidth: 450,
    maxWidth: 600,
    color: theme.colors.black
  }, overrides.menu)
});

class AutoComplete extends React.Component {

  constructor(props){
    super(props);
    this.state = Object.assign({}, {
      loading: false,
      value: '',
      placeholder: 'Enter Text',
      options: []
    }, props);
  }

  renderMenu(total) {
    return (
      function(items, value, style) {
        const { left, ...restStyle } = style;
        const styles = {
          menu__help: {
            padding: theme.spacing,
            color: theme.colors.primary
          },
          items__container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
          },
          items__list: {
            height: 'calc(100% - 40px)',
            width: '100%',
            overflowY: 'auto'
          },
          items__header: {
            display: 'flex',
            alignItems: 'center',
            height: 35,
            backgroundColor: 'inherit',
            color: theme.colors.primary,
            padding: '0 10px',
            fontSize: '0.9em',
            fontWeight: 400
          }
        };
        const menuOffset = 32;
        return (
          <div
            style={{ left: left - menuOffset, ...restStyle, ...this.menuStyle }}
          >
            {
              !items || items.length === 0 ?
                <p style={ styles.menu__help }>Enter text above to find channels</p>
                :
                <div style={ styles.items__container }>
                  <div style={ styles.items__header }>
                    { `Returned Top ${ items.length } of ${ total } by total viewers` }
                  </div>
                  <div style={ styles.items__list }>{ items }</div>
                </div>
            }
          </div>
        );
      }
    )
  }

  componentWillReceiveProps(newProps){
    this.setState((oldState) => Object.assign({}, oldState, newProps));
  }

  render(){
    const {
      total,
      placeholder,
      style,
      value,
      options,
      itemRenderer,
      onChange,
      onSelect
    } = this.state;
    const styles = baseStyles(style);
    return (
      <div
        className="auto-complete-component"
        style={ styles.autocomplete__container }
      >
        <Autocomplete
          inputProps={{ style: styles.autocomplete__input, placeholder }}
          value={ value }
          items={ options }
          getItemValue={(item) => item.name}
          onSelect={ onSelect }
          onChange={ onChange }
          renderItem={ itemRenderer }
          wrapperStyle={ styles.autocomplete__wrapper }
          menuStyle={ styles.autocomplete__menu }
          renderMenu={ this.renderMenu(total) }
        />
      </div>
    )
  }
}

AutoComplete.propTypes = {
  total: PropTypes.number,
  loading: PropTypes.bool,
  value: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export default AutoComplete;
