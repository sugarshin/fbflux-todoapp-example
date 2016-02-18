import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../../components/Header';
import AddTodo from '../../components/AddTodo';
import * as TodoActionCreators from '../../actions/todo';
import styles from './index.styl';

export default class App extends Component {
  componentWillMount() {
    TodoActionCreators.fetchTodos();
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <p><Link to="/todos">Todos</Link></p>
        <p><Link to="/archive">Archive</Link></p>
        <AddTodo onClickAddButton={TodoActionCreators.createTodo} />
        {this.props.children}
      </div>
    );
  }
}
