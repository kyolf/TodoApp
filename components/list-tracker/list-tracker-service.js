'use strict';

angular
  .module('list.tracker')
  .service('listTracker', listTracker);

function listTracker() {
  this.todos = [];
  this.getToDos = getToDos;
  this.addToDo = addToDo;

  function getToDos() {
    return this.toDos;
  }

  function addToDo(el) {
    this.toDos.push(el);
  }
}