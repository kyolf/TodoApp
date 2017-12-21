'use strict';

angular
  .module('search.bar')
  .directive('searchBarDirective', searchBarDirective);

function searchBarDirective() {
  return {
    bindToController: true,
    controller: SearchBarController,
    controllerAs: 'sBarVm',
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'components/search-bar/search-bar.html'
  };
}