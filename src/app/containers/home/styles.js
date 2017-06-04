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
  content__container: (offset) => ({
    display: 'flex',
    height: `calc(100% - ${offset}px)`,
    width: '100%',
    color: 'inherit',
    overflow: 'auto'
  }),
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
  footer__links: {
    display: 'inline-flex'
  },
  no__widgets: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2em',
    fontWeight: 300,
    color: '#aaaaaa'
  },
  no__widgets__container: {
    height: '60%',
    width: '60%'
  }
};
