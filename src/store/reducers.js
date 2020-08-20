import { combineReducers } from 'redux';

import daysEvents from './daysEvents/reducer';

const rootReducer = combineReducers({
  daysEvents,
});

export default rootReducer;
