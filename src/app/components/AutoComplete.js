import React from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';

const baseStyles = (overrides) => ({
  autocomplete__container: Object.assign({}, {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }, overrides.container),
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
  }, overrides.input)
});

class AutoComplete extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const { placeholder, style } = this.props;
    const styles = baseStyles(style);
    return (
      <div
        className="auto-complete-component"
        style={ styles.autocomplete__container }
      >
        <input
          style={ styles.autocomplete__input }
          placeholder={ placeholder }
        />
      </div>
    )
  }
}

AutoComplete.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export default AutoComplete;
