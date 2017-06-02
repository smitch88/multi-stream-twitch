import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import localForage from 'localforage';
import { autoRehydrate, createTransform, persistStore } from 'redux-persist';
import { reducer, rootSaga } from './common/';
import { ChannelsState as ChannelsRecord } from './common/channels/reducer';
import { toJSON, fromJSON } from './transit';

/*
* Returns a `createTransform` definition to serialize/deserialize state, uses localForage for
* local persistance so this could be going to indexeddb or localStorage.
* Ref:
* https://github.com/rt2zz/redux-persist-transform-immutable/blob/master/index.js
*/

const transitTransform = (config) => (
  createTransform(
    (state, key) => toJSON(state),
    (raw, key) => fromJSON(raw),
    config
  )
);

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
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    autoRehydrate()
  );
  const store = createStore(reducer, enhancer);

  // Persist store periodically, added transforms definition for our immutable store
  const persistConfig = {
    transforms: [transitTransform()],
    storage: localForage,
    debounce: 100,
    keyPrefix: 'multi-stream@' + window.location.hostname
  };

  // Auto-magically persist to some local store - `localForage` is picking for us here
  persistStore(store, persistConfig);

  // Start root generator for concurrent processes
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
