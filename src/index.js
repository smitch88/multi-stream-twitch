import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Home from './app/containers/home/Home';
import theme from './app/theme';
import configureStore from './configureStore';
import './index.css';

const styles = {
  page__container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.black
  }
};

const Root = () => (
  <Provider store={ configureStore() }>
    <BrowserRouter>
      <div style={ styles.page__container }>
        <Route exact path="/" component={ Home }/>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
