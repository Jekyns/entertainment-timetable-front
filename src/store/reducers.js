import { combineReducers } from 'redux';

import daysGrid from './daysGrid/reducer';

const rootReducer = combineReducers({
  daysGrid,
});

export default rootReducer;
