export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

var nextTodoId = 0;
export var addTodo = function(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text
  };
};

export const setVisibilityFilter = function(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
};

export const toggleTodo = function(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

