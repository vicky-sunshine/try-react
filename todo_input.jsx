import React from 'react';

const TodoInput = React.createClass({
  handleChange(evt){
    this.setState({description: evt.target.value})
  },
  addTodo(){
    console.log(this.state)
  },
  render() {
      return <div>
        <label htmlFor="input_todo" type="text">
          New Todo
        </label>
        <input onChange={this.handleChange}></input>
        <button onClick={this.addTodo}> Add </button>
      </div>
  }
})

module.exports = TodoInput