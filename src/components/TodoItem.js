import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none',
		};
	};

	render() {
		return (
			<div>
				<p>{this.props.todo.title}</p>
			</div>
		);
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoItem;
