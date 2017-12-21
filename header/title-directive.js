'use strict';

angular
  .module('title')
  .directive('titleDirective', titleDirective);

function titleDirective() {
  return {
    bindToController: true,
    controllerAs: 'headerVm',
    controller: TitleController,
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'header/title.html'
  }
}