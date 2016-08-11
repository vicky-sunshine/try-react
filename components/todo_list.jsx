import React from 'react';
import _ from 'lodash';


const TodoItem = (props)=>{
    return <li> { props.todo.description} </li>
}

const TodoList = React.createClass({
  todos(){
    return _.map(this.props.todos,(todo => {
        return <TodoItem todo={todo} key={"todo" + todo.id}/>
    }))
  },
  
  render() {
    return <div>
    <h2>todos</h2>
    {this.todos()}
    </div>
  }
})

module.exports = TodoList