import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

//Propety Validation:
TodoItem.propTypes = {
    todo: PropTypes.object
}

export default TodoItem;
