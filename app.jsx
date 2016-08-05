import React from 'react';
import TodoList from './todo_list.jsx'
import TodoInput from './todo_input.jsx'

var todos = [
    {
      id: 1,
      description: "buy the milk",
      done: false
    },
    {
      id: 2,
      description: "save New york",
      done: false
    },
    {
      id: 3,
      description: "learn react",
      done: false
    }
]

const TodoHeader = () =>  <h1>My React Todo</h1>;

const App = React.createClass({
  getInitialState(){
    return {todos: todos}
  },
  addTodo(todo){
    const todos = this.state.todos
    var nextId = this.state.todos.length + 1
    todo["id"]=nextId
    this.setState({todos: this.state.todos.concat(todo)})
  },
  render() {
    return <div>
      <TodoHeader />
      <TodoList todos={this.state.todos} />
      <TodoInput addTodo={this.addTodo}/>
    </div>;
  }
})

module.exports = App