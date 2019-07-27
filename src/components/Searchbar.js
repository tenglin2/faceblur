import React from 'react';
import { connect } from 'react-redux';
import { changeSearchInput, addTodo } from '../actions/actions';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}

	componentDidUpdate() {
		console.log(this.props.input);
		console.log(this.props.todo);
	}

	submitHandler(event) {
		event.preventDefault();
		// console.log('submission runs', 'list before', this.props.todo);

		// this.props.addTodo(this.props.input);
		// this.props.changeInput('');

		// console.log('submitted and cleared the input', this.props.todo, this.props.input);
		// console.log('the input is ', this.props.input);
	}

	inputChangeHandler(event) {
		// We need to give the action the event.target.value
		this.props.changeSearchInput(event.target.value);
	}

	render() {
		return (
			<div>
				{/* So we need state to manipulate the value inside of the input type. Using the prop system would be too convoluted because you have to go through the whole chain. Instead use redux provider and the connect function to access state through actions dispatched to the reducers. The store has the state. */}
				<form onSubmit={this.submitHandler}>
					<label>Todo list mockup</label>
					<input onChange={this.props.changeInput} value={this.props.input} type="text" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		input: state.input,
		todo: state.todo
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		changeInput: (event) => dispatch(changeSearchInput(event.target.value)),
		addTodo: () => dispatch(addTodo)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
