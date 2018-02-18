import {ADD_ITEM,TOGGLE_ITEM,REMOVE_ITEM} from './actions';

export const addItem = value => ({
  type:ADD_ITEM,
  value
});

export const removeItem = id => ({
  type:REMOVE_ITEM,
  id
});

export const toggleItem = id => ({
  type:TOGGLE_ITEM,
  id
});
