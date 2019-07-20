import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
	console.log('Printing todos from Todos component: ', props.todos);
	return props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default Todos;
