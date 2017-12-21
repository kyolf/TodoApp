'use strict';

angular
  .module('title')
  .controller('TitleController', TitleController);

function TitleController() {
  var headerVm = this;
  headerVm.title = 'To Do Controller';
}