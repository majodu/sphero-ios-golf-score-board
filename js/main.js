var angular = require('angular');
var angular_mat = require('angular-material');


var sbApp = angular.module('sbApp', ['ngMaterial']);

sbApp.controller('buildBoard', function buildBoard($scope) {
  $scope.text = "hi"
});