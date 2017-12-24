'use strict';

angular
  .module('search.list')
  .controller('SearchListController', SearchListController);

function SearchListController(listTracker) {
  var sListVm = this;
  sListVm.todos = listTracker.getToDos();
}