var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

// '_' means i'm private (even i'm not private)
var _todos = {
    1: {
      id: 1,
      description: "buy the milk",
      done: false
    },
    2: {
      id: 2,
      description: "save New york",
      done: false
    },
    3: {
      id: 3,
      description: "learn react",
      done: false
    }
}



function addTodo(todo) {
  _todos[todo.id] = todo;
}

// 1: {id: 1, {done: true}}
function updateTodo(id, data) {
  _todos = assign({}, _todos[id], data)
}

// Emmiter/ listener
// `Component` subscribe to this `Store`

var TodoStore = assign ({}, EventEmitter.prototype, {
  
  getAllTodos: (){
    return _todos;
  }
  
  // Following are about subscribing messages about this `Store`
  // tell `Component` the state has been change
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  // `Component` use this to subscribe the message
  addChangeListender: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  // `Component` use this to cancel subscribing the message
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
});

module.exports = TodoStore;