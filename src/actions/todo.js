import dispatcher from '../dispatcher';
import * as types from '../constants/action-types';

export const addTodo = title => {
  dispatcher.dispatch({
    type: types.ADD_TODO,
    title
  });
};

export const deleteTodo = id => {
  dispatcher.dispatch({
    type: types.DELETE_TODO,
    id
  });
};

export const changeComplete = id => {
  dispatcher.dispatch({
    type: types.CHANGE_COMPLETE,
    id
  });
};
