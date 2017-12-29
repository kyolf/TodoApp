'use strict';

angular
  .module('search.bar')
  .controller('SearchBarController', SearchBarController);

function SearchBarController(listTracker, $scope) {
  var sBarVm = this;
  sBarVm.addToList = addToList;
  sBarVm.toDoDesc = 'Enter Desc';

  $scope.$watch('sBarVm.toDoDesc', function(newValue, oldValue) {
    console.log('ll' + newValue);
    console.log('hi' + oldValue);
  });
  function addToList() {
    listTracker.addToDo(sBarVm.toDoDesc);
  }
}