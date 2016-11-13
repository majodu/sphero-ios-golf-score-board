var angular = require('angular');
var angular_mat = require('angular-material');


var sbApp = angular.module('sbApp', ['ngMaterial']);

sbApp.controller('buildBoard', function buildBoard($scope,$interval) {
    $scope.text = 5
    $interval(function () {
        $.get("/getData", function (data) {
            $scope.text = data.text;
        });
    }, 1000);



});