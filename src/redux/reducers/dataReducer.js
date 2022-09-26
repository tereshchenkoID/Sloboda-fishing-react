import { types } from '../types/types';

const initialState = {
  data: {}
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
