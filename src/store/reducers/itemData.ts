import {actionTypes} from '../constants/actionTypes';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action: {type: any; payload: any}) => {
  switch (action.type) {
    case actionTypes.ITEM_DATA:
      return {...state, itemData: action.payload};
    default:
      return state;
  }
};
