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
    case types.ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, {
          id: Date.now(),
          title: action.title,
          complete: false
        }]
      });

    case types.DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      });

    case types.CHANGE_COMPLETE:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => todo.id === action.id ?
          Object.assign(todo, { complete: !todo.complete }) : todo)
      });

    default:
      return state;
    }

  }
}

export default new Todo(dispatcher);
