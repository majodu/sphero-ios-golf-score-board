var angular = require('angular');
var angular_mat = require('angular-material');


var sbApp = angular.module('sbApp', ['ngMaterial']);

sbApp.controller('buildBoard', function buildBoard($scope,$interval) {
    $scope.scores= [[]];
    $interval(function () {
        $.get("/getData", function (data) {
            $scope.scores = data;
        });
    }, 1000);

});