import theme from '../../theme/';

export default {
  container: Object.assign({}, {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    width: 'inherit',
    background: theme.colors.black
  }, theme.typography.base),
  navbar: {
    backgroundColor: theme.colors.primary
  },
  navbar__inner: {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    fontSize: '1.5em',
    cursor: 'pointer',
    marginLeft: 10
  },
  // Component defined style override map
  modal: {
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)'
    },
    content: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      height: '50%',
      width: '50%'
    }
  },
  // Component defined style override map
  help__dialog: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.typography.base.fontFamily,
      height: '100%',
      width: '100%',
      padding: 20,
      backgroundColor: '#fff',
      border: '1px solid #333',
      color: theme.colors.black,
      overflowY: 'scroll'
    },
    title: {
      margin: 0,
      paddingBottom: 3,
      borderBottom: '1px solid #cccccc',
      height: 'auto',
      width: '100%',
      ...theme.typography.branding
    },
    text: {
      marginTop: 20,
      marginBottom: 0,
      color: theme.colors.black
    }
  }
};
