import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input style={inputTextStyle} 
                    type="text" 
                    name="title"
                    placeholder="Add todo.."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input style={inputButtonStyle} 
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex'
}

const inputTextStyle = {
    flex: '10',
    padding: '5px'
}

const inputButtonStyle = {
    flex: '1',
}

// PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
}

export default AddTodo
