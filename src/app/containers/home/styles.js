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
    backgroundColor: theme.colors.primary,
    boxShadow: '0 19px 38px rgba(255,255,255,0.30), 0 15px 12px rgba(255,255,255,0.22)'
  },
  navbar__inner: {
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navbar__actions: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1
  },
  copyright: {
    fontSize: '0.8em',
    color: '#777777'
  },
  icon: {
    fontSize: '1.25em',
    cursor: 'pointer',
    marginLeft: 15
  },
  footer: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    width: '100%',
    height: '100%'
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
