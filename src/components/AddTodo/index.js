import React, { Component, PropTypes } from 'react';
import styles from './index.styl';

export default class AddTodo extends Component {
  static get propTypes() {
    return {
      onClickAddButton: PropTypes.func.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <input type="text" ref="input" placeholder="Todo title" />
        <button className={styles.button} onClick={this.handleClickButton}>Add</button>
      </div>
    );
  }

  handleClickButton() {
    this.props.onClickAddButton(this.refs.input.value);
    this.refs.input.value = '';
  }
}
