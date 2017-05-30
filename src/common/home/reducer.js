import * as actions from './actions';
import { Record } from 'immutable';

const HomeState = Record({
  title: 'Multi-Stream',
  navbarHeight: 45,
  footerHeight: 35,
  showingHelp: false
});

const homeReducer = (state = new HomeState(), action) => {

  switch(action.type){

    case actions.HOME_SHOW_HELP:
      return state.set('showingHelp', true);

    case actions.HOME_HIDE_HELP:
      return state.set('showingHelp', false);

    default:
      return state;
  }
};

export default homeReducer;
