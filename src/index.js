import 'babel-polyfill';
import es6promise from 'es6-promise';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import App from './containers/App'
import TodoList from './containers/TodoList'
import ArchivedTodoList from './containers/ArchivedTodoList'
import ApiBase from './apis/Base';

es6promise.polyfill();

global.fetch = null;
require('whatwg-fetch');

ApiBase.apiBase = 'http://localhost:3000';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <Route path="/todos" component={TodoList} />
      <Route path="/archive" component={ArchivedTodoList} />
    </Route>
  </Router>
), document.getElementById('app-root'));
