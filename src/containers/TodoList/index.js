import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import TodoStore from '../../stores/todo';
import * as TodoActionCreators from '../../actions/todo';
import Todo from '../../components/Todo';

class TodoList extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(/*prevState*/) {
    return TodoStore.getState();
  }

  render() {
    return (
      <div className="TodoList">{this.renderTodos()}</div>
    );
  }

  renderTodos() {
    return this.state.todos.map(todo => todo.archive ?
      null :
      <Todo key={todo.id}
        onClickCheckbox={TodoActionCreators.updateTodo}
        onClickArchive={TodoActionCreators.updateTodo}
        { ...todo } />
    );
  }
}

export default Container.create(TodoList);
