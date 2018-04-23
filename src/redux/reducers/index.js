import { combineReducers } from 'redux'
import customers from './customers'
import mainReducer from './mainReducer'

const reducers = combineReducers({
    customers: customers,
    main: mainReducer,
});

export default reducers
