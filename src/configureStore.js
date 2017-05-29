import { createStore, applyMiddleware, compose } from 'redux';

const fakeInitial = {
  test: false,
  stuff: []
};

const fakeReducer = (state = fakeInitial, action) => state;

const configureStore = (environment) => {

  // TODO:  Add environment based store configuration to seperate out redux dev tools usage

  let middleware = {};
  let enhancer;

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  /*
  * Enhancers
  * Ref: http://redux.js.org/docs/api/createStore.html#createstorereducer-preloadedstate-enhancer
  *
  * The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware,
  * time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware()
  */
  enhancer = composeEnhancers(
    applyMiddleware(...middleware)
  );

  return createStore(fakeReducer, enhancer);
};

export default configureStore;
