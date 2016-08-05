import React from 'react';

const TodoItem = (props)=>{
    return <h4> { props.todo.description} </h4>
}

const TodoList = React.createClass({
  todos(){
    return this.props.todos.map(todo => {
        return <TodoItem todo={todo} key={"todo" + todo.id}/>
    })
  },
  
  render() {
    return <div>
    <h2>todos</h2>
    {this.todos()}
    </div>
  }
})



module.exports = TodoList