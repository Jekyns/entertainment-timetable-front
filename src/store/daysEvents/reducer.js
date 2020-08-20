import { daysEvents } from '../actionTypes';

const initialState = {
  day: {
    number: 0,
    column: 0,
    row: 0,
    events:[
  
    ]
  },
};

const deleteUser = (state) => {
  const newUser = initialState;
  return {
    ...state,
    daysEvents: newUser,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case daysEvents.SET_EVENTS:
      return {
        ...initialState
      };

    case daysEvents.DELETE_USER:
      return deleteUser(state, action);
    default:
      return state;
  }
};
export default reducer;
