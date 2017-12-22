'use strict';

angular
  .module('search.bar')
  .controller('SearchBarController', SearchBarController);

function SearchBarController(listTracker) {
  var sBarVm = this;
  sBarVm.addToList = addToList;

  function addToList() {
    listTracker.addToDo(sBarVm.toDoDesc);
  }
}