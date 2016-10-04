var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/london", {
        templateUrl : "london.html"

    })
    .when("/paris", {
        templateUrl : "paris.html",
        controller : "parisCtrl"
    });
});
