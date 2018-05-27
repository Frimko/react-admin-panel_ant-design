import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './redux/store';
import Routers from './routers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers/>
      </Provider>
    );
  }
}

export default App;
