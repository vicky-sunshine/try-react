import React from 'react';
import TodoList from './todo_list.jsx'
import TodoInput from './todo_input.jsx'
import TodoStore from '../stores/TodoStore'
import TodoConstants from '../constants/TodoConstants'
import AppDispatcher from '../dispatcher/AppDispatcher'
var { fetchTodos, addTodo } = require('../api')

const TodoHeader = () =>  <h1>My React Todo</h1>;

const App = React.createClass({
  _onChange(){
    // update state of the components
    fetchTodos('all').then(todos => {
      AppDispatcher.dispatch({
        type: TodoConstants.FETCH_TODOS,
        'todos': todos
      })
    })
  },
  getInitialState(){
    return { todos: TodoStore.getAllTodos() }
  },
  componentDidMount(){
    // after this components mount in HTML
    // it will subscribe the state-changed message from `Store`
    
    // when receiving msg, call _onChange() function
    TodoStore.addChangeListender(() => { 
      this.setState({
        todos: TodoStore.getAllTodos()
      })
    })
    
    // AppDispatcher.dispatch({type: TodoConstants.LOADING})
    this._onChange();
  },
  componentDidUpdate(){
    this._onChange();
  },
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },
  render() {
    return <div>
      <TodoHeader />
      <TodoList todos={this.state.todos} />
      <TodoInput />
    </div>;
  }
})

module.exports = App