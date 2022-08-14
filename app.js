var app = angular.module('ngLocoMovie',['ui.bootstrap','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/movie-list.htm"
    })
    .when('/movie/:id', {
        templateUrl : "views/movie-info.htm",
        controller: 'movieInfo'
    })
    .when('/page/:page', {
        templateUrl : "views/movie-list.htm",
        controller: 'movieController'
    });
});