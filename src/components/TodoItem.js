import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => todo.handleChangeProps(todo.id)} />
    {todo.title}
    {' '}
  </li>
);
TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default TodoItem;
