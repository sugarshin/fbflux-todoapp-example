import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static get propTypes() {
    return {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      onClickCheckbox: PropTypes.func.isRequired,
      onClickArchive: PropTypes.func.isRequired
    };
  }

  render() {
    const { complete, title } = this.props;

    return (
      <div style={{
        opacity: complete ? .5 : 1,
        textDecoration: complete ? 'line-through' : 'none'
      }}>
        <input type="checkbox" checked={complete} onChange={this.handleClickCheckbox.bind(this)} />
        <span>{title}</span>
        <button onClick={this.handleClickArchive.bind(this)}>Archive</button>
      </div>
    );
  }

  handleClickCheckbox() {
    this.props.onClickCheckbox(this.props.id, { complete: !this.props.complete });
  }

  handleClickArchive() {
    this.props.onClickArchive(this.props.id, { archive: true });
  }
}
