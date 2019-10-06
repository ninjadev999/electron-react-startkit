import React, { Component } from 'react';
import { configureStore, history } from '../store/configureStore';
import Root from './Root';
import '../app.global.css';

const store = configureStore();

class App extends Component {
  render() {
    return <Root store={store} history={history} />;
  }
}

export default App;
