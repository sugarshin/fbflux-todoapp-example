import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static get propTypes() {
    return {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      archive: PropTypes.bool.isRequired,
      onClickRestore: PropTypes.func.isRequired,
      onClickDelete: PropTypes.func.isRequired
    };
  }

  render() {
    const { archive, complete, title } = this.props;

    return (
      <div style={{
        opacity: complete ? .5 : 1,
        textDecoration: complete ? 'line-through' : 'none'
      }}>
        <span>{title}</span>
        <button onClick={this.handleClickDelete.bind(this)}>Delete</button>
        <button onClick={this.handleClickRestore.bind(this)}>Resotre</button>
      </div>
    );
  }

  handleClickDelete() {
    this.props.onClickDelete(this.props.id);
  }

  handleClickRestore() {
    this.props.onClickRestore(this.props.id, { archive: false });
  }
}
