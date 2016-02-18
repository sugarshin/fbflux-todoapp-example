import dispatcher from '../dispatcher';
import * as types from '../constants/action-types';
import Todos from '../apis/Todos';

const dispatchCreation = data => {
  dispatcher.dispatch({
    type: types.CREATE_TODO,
    data
  });
};

const dispatchUpdate = data => {
  dispatcher.dispatch({
    type: types.UPDATE_TODO,
    data
  });
}

const dispatchDelete = id => {
  dispatcher.dispatch({
    type: types.DELETE_TODO,
    id
  });
}

export const fetchTodos = () => {
  Todos.GET().then(todos => {
    dispatcher.dispatch({
      type: types.FETCH_TODOS,
      todos
    });
  });
};

export const createTodo = title => {
  if (!title.trim()) { return; }
  Todos.POST({
    title,
    complete: false,
    archive: false
  })
    .then(data => dispatchCreation(data));
}

export const updateTodo = (id, data) => {
  Todos.PATCH(id, data).then(data => dispatchUpdate(data));
};

export const replaceTodo = (id, todo) => {
  Todos.PUT(id, todo).then(data => dispatchUpdate(data));
};

export const deleteTodo = id => {
  Todos.DELETE(id)
    .then(res => {
      if (res.ok) { dispatchDelete(id); }
    });
};
