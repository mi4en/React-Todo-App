import React, { Component } from 'react';
import logo from './logo.svg';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Feed the doggos',
				completed: true,
			},
			{
				id: 2,
				title: 'Feed the cattos',
				completed: false,
			},
			{
				id: 3,
				title: 'Walk the doggos',
				completed: false,
			},
		],
	};

	render() {
		console.log('Printing todos from App.js: ', this.state.todos);
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<Todos todos={this.state.todos} />
			</div>
		);
	}
}

export default App;
