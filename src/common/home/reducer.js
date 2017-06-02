import * as actions from './actions';
import { Record } from '../../transit';

const HomeState = Record({
  title: 'Multi-Stream',
  navbarHeight: 45,
  footerHeight: 35,
  showingHelp: false,
  showingShareLink: false,
  longUrl: '',
  shortUrl: ''
}, 'home');

const homeReducer = (state = new HomeState(), action) => {

  switch(action.type){

    case actions.HOME_SHOW_HELP:
      return state.set('showingHelp', true);

    case actions.HOME_HIDE_HELP:
      return state.set('showingHelp', false);

    case actions.HOME_SHOW_SHARE_LINK:
      return state.set('showingShareLink', true);

    case actions.HOME_SHOW_SHARE_LINK_SUCCEEDED:
      return state.set('longUrl', action.response.longUrl)
                  .set('shortUrl', action.response.id);

    case actions.HOME_SHOW_SHARE_LINK_FAILED:
    return state.set('longUrl', '')
                .set('shortUrl', '');

    case actions.HOME_HIDE_SHARE_LINK:
      return state.set('showingShareLink', false);

    default:
      return state;
  }
};

export default homeReducer;
