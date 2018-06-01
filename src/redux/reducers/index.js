import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOCATION_CHANGE } from 'react-router-redux';
import customers from './customers';
import main from './main';

const routeInitialState = {
  locationBeforeTransitions: null,
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        locationBeforeTransitions: state.location,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  customers,
  main,
  form: formReducer,
  router: routeReducer,
});
