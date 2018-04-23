import React, { Component } from 'react';
import { Provider } from "react-redux";

import store from "./redux/store"
import Routers from './routers'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers/>
      </Provider>
    )
  }
}
export default App;
