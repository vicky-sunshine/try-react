import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher'
import TodoConstants from '../constants/TodoConstants'


const TodoInput = React.createClass({
  getInitialState() {
    return {description: ''}
  },
  handleChange(evt) {
    this.setState({description: evt.target.value})
  },
  addTodo() {
    AppDispatcher.dispatch({
      type: TodoConstants.ADD_TODO,
      text: this.state.description
    })
    this.setState({text: ''})
  },
  render() {
      return <div>
        <label htmlFor="input_todo" type="text">
          New Todo: 
        </label>
        <input onChange={this.handleChange}></input>
        <button onClick={this.addTodo}> Add </button>
      </div>
  }
})

module.exports = TodoInput