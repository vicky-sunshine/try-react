import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher'
import TodoConstants from '../constants/TodoConstants'
var { fetchTodos, addTodo } = require('../api')


const TodoInput = React.createClass({
  getInitialState() {
    return {text: ''}
  },
  handleChange(evt) {
    this.setState({description: evt.target.value})
  },
  addTodo() {
    // AppDispatcher.dispatch({
    //   type: TodoConstants.ADD_TODO,
    //   text: this.state.text
    // })
    AppDispatcher.dispatch({type: TodoConstants.LOADING})
    addTodo(this.state.description).then(todos => {
      AppDispatcher.dispatch({type: TodoConstants.RELOAD})
    })
    this.setState({description: ''})
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