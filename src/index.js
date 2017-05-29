import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Home from './app/containers/home/Home';
import './index.css';
import configureStore from './configureStore';

const styles = {
  page__container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#000000'
  }
};

const Root = () => (
  <Provider store={ configureStore() }>
    <Router>
      <div style={ styles.page__container }>
        <Route exact path="/" component={ Home }/>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
