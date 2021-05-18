import {actionTypes} from '../constants/actionTypes';

export const actions = {
  itemData: (payload: any) => ({
    type: actionTypes.ITEM_DATA,
    payload: payload,
  }),
};
