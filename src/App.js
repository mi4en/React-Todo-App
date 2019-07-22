import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import uuid from 'uuid';
import axios from 'axios';
import logo from './logo.svg';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => {
				console.log('axios response: ', res.data)
				this.setState({todos: res.data})
			})
	}

	// Toggle complete property of todos obj in the state
	markComplete = (id) => {
		console.log('markComplete id: ', id)
		this.setState({todos: this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		})})
	}

	// Delete todo
	delTodo = (id) => {
		console.log('delTodo id: ', id)
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => this.setState( {todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
	}

	// Add todo

	// Using UUID:
	// addTodo = (title) => {
	// 	console.log('title from addTodo: ', title);
	// 	const newTodo = {
	// 		id: uuid.v4(),
	// 		title,
	// 		completed: false
	// 	}
	// 	this.setState({ todos: [...this.state.todos, newTodo] })
	// }

	addTodo = (title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})
			.then(res => this.setState({ todos: [...this.state.todos, res.data] }))
	}

	render() {
		console.log('Printing todos from App.js: ', this.state.todos);
		return (
			<Router>
				<div className="App">
					<div className="container">
						<img src={logo} className="App-logo center" alt="logo" />
						<Header />
						<Route exact path="/" render={props => (
							<React.Fragment>
								<AddTodo addTodo={this.addTodo} />
								<Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
							</React.Fragment>
						)} />
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
