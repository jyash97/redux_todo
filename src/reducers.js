import {ADD_ITEM,REMOVE_ITEM,TOGGLE_ITEM} from './actions';
import uniqueId from 'lodash/uniqueId';

const items =[
  {name: 'Learn React',id: uniqueId(), done:false},
  {name: 'Learn HTML',id: uniqueId(), done:false},
  {name: 'Learn CSS',id: uniqueId(), done:true},
  {name: 'Learn Bootstrap',id: uniqueId(), done:true},
  {name: 'Learn Angular',id: uniqueId(), done:false},
  {name: 'Learn Redux',id: uniqueId(), done:false},
  {name: 'Learn Flux',id: uniqueId(), done:true},
  {name: 'Learn Node',id: uniqueId(), done:false},
  {name: 'Learn Javascript',id: uniqueId(), done:true},
]

const todoReducer = (state=items,action) => {
  switch(action.type){
    case ADD_ITEM:
      return [...state,{name:action.value,done:false,id:uniqueId()}]
    case TOGGLE_ITEM:
      return state.map(item => (item.id===action.id) ?  {name:item.name,done:!item.done,id:item.id} : item)
    case REMOVE_ITEM:
      return state.filter(item => item.id!==action.id);
    default:
      return state
  }
};
export default todoReducer;
