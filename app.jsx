import React from 'react';
import TodoList from './todo_list.jsx'
import TodoInput from './todo_input.jsx'

var todos = [
    {
      id: "1",
      description: "buy the milk",
      done: false
    },
    {
      id: "2",
      description: "save New york",
      done: false
    },
    {
      id: "3",
      description: "learn react",
      done: false
    }
]

const todoHeader = () =>  <h1>My React Todo</h1>;

const App = React.createClass({
  getInitialState(){
    return {todos: todos}
  },
  render() {
    return <div>
      <todoHeader />
      <TodoList todos={this.state.todos} />
      <TodoInput />
    </div>;
  }
})

module.exports = App