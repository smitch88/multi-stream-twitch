import React from 'react';
import theme from '../theme';
import PropTypes from 'prop-types';

const navbarStyles = ({ height, style }) => ({
  navbar__container: {
    display: height === 0 ? 'none' : 'flex',
    height: height || 50,
    backgroundColor: style.backgroundColor || theme.colors.black,
    alignItems: 'center'
  },
  navbar__inner: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing,
    paddingRight: theme.spacing
  },
  navbar__title: {
    marginTop: 0,
    marginBottom: 0,
    color: 'inherit',
    fontFamily: 'Orbitron, sans-serif',
    // orbitron needs some addition top offset for this font style
    paddingTop: 5,
    fontSize: '1.1em',
    fontWeight: 300,
    marginRight: theme.spacing
  }
});

const Navbar = (props) => {
  const { title } = props;
  const styles = navbarStyles(props);
  return (
    <nav
      className="navbar-component"
      style={ styles.navbar__container }
    >
      <div style={ styles.navbar__inner }>
        <h1 style={ styles.navbar__title }>
          { title }
        </h1>
        { props.children }
      </div>
    </nav>
  )
};

Navbar.propTypes = {
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Navbar;
