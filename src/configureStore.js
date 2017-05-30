import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer, rootSaga } from './common/';

/*
* Enhancers
* Ref: http://redux.js.org/docs/api/createStore.html#createstorereducer-preloadedstate-enhancer
*
* The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware,
* time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware()
*/

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(reducer, enhancer);

  // Start root generator for concurrent processes
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
