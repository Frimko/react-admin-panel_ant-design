import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import customers from './customers';
import main from './main';

export default combineReducers({
  customers,
  main,
  form: formReducer,
});
