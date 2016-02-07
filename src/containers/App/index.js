import React, { Component } from 'react';
import { Container } from 'flux/utils';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';
import TodoStore from '../../stores/todo';
import * as TodoActionCreators from '../../actions/todo';
import styles from './index.styl';

class App extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    return { todo: TodoStore.getState() };
  }

  render() {
    return (
      <div className={styles.app}>
        <AddTodo onClickAddButton={TodoActionCreators.addTodo} />
        <TodoList todos={this.state.todo.todos}
                  onClickDelete={TodoActionCreators.deleteTodo}
                  onClickCheckbox={TodoActionCreators.changeComplete} />
      </div>
    );
  }
}

export default Container.create(App);
