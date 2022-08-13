var app = angular.module('ngLocoMovie',['ui.bootstrap','ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/movie-list.htm"
    })
    .when('/movie/:id', {
        templateUrl : "views/movie-info.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});