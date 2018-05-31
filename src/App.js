import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import ruLocale from 'antd/lib/locale-provider/ru_RU';
import 'moment/locale/fr';
import 'antd/dist/antd.css';
import store from './redux/store';
import Routers from './routers';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={ruLocale}>
        <Provider store={store}>
          <Routers/>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;
