import React from 'react';
import { Route } from 'react-router';
import TodoList from './components/TodoList';
import ArchivedTodoList from './components/ArchivedTodoList/'

export default (
  <Route path="/" component={App}>
    <Route path="/todos" component={TodoList} />
    <Route path="/archive" component={ArchivedTodoList} />
  </Route>
)
