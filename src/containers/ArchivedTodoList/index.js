import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import TodoStore from '../../stores/todo';
import * as TodoActionCreators from '../../actions/todo';
import ArchivedTodo from '../../components/ArchivedTodo';

class ArchivedTodoList extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(/*prevState*/) {
    return TodoStore.getState();
  }

  render() {
    return (
      <div className="ArchivedTodoList">{this.renderTodos()}</div>
    );
  }

  renderTodos() {
    return this.state.todos.map(todo => todo.archive ?
      <ArchivedTodo key={todo.id}
        onClickRestore={TodoActionCreators.updateTodo}
        onClickDelete={TodoActionCreators.deleteTodo}
        { ...todo } /> : null
    );
  }
}

export default Container.create(ArchivedTodoList);
