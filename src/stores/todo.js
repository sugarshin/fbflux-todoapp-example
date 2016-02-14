import { ReduceStore } from 'flux/utils';
import * as types from '../constants/action-types';
import dispatcher from '../dispatcher';
import { todos as initialState } from '../constants/initial-state';

class Todo extends ReduceStore {
  getInitialState() {
    return {
      todos: initialState
    };
  }

  reduce(state, action) {
    switch (action.type) {

    case types.FETCH_TODOS:
      return Object.assign({}, state, {
        todos: action.todos
      });

    case types.CREATE_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, { ...action.data }]
      });

    case types.UPDATE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.data.id) {
            return Object.assign({}, todo, action.data);
          }
          return todo;
        })
      });

    case types.DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      });

    default:
      return state;

    }
  }
}

export default new Todo(dispatcher);
