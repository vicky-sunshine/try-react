var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign');
var { v4 } = require('node-uuid');

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



function create(text) {
  var id = v4();
  _todos[id] = {
    id: id,
    description: text,
    done: false
  }
}

// 1: {id: 1, {done: true}}
function update(id, text) {
  var id = v4();
  _todos[id].description = text;
}

// Emmiter/ listener
// `Component` subscribe to this `Store`

var TodoStore = assign ({}, EventEmitter.prototype, {
  
  getAllTodos() {
    return _todos;
  },
  
  // Following are about subscribing messages about this `Store`
  // tell `Component` the state has been change
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  // `Component` use this to subscribe the message
  addChangeListender(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  // `Component` use this to cancel subscribing the message
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
});

// Dispatcher
AppDispatcher.register(function(action){
  switch (action.type) {
    case TodoConstants.ADD_TODO:
      create(action.text);
      TodoStore.emitChange();
      break;
    case TodoConstants.UPDATE_TODO:
      update(action.text);
      TodoStore.emitChange();
      break;  
    default:
      console.log('Unknown action' + action.type);
      break;
  }
})

module.exports = TodoStore;