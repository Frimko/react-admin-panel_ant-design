/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */
import { combineReducers } from 'redux';
import form from './form';
import table from './table';

export default combineReducers({
  table,
  form,
});

