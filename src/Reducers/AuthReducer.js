import {USER_DATA, USER_LOGIN} from '../Actions/types';

const initialState = {
  isAuthenticated: false,
  user: false,
  user_data: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case USER_DATA:
      console.log('Payload', action);
      return {
        ...state,
        user_data: action.payload,
      };

    default:
      return state;
  }
}
