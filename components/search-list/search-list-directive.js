'use strict';

angular
  .module('search.list')
  .directive('searchListDirective', searchListDirective);

function searchListDirective() {
  return {
    bindToController: true,
    controllerAs: 'sListVm',
    controller: SearchListController,
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'components/search-list/search-list.html'
  }
}