var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  console.log("inside route");
    $routeProvider
    .when("/", {
        templateUrl : "main.html"

    })
    .when("/london", {
        templateUrl : "london.html",
        controller : "londonCtrl"
    })
    .when("/paris", {
        templateUrl : "paris.html",
        controller : "parisCtrl"
    });
});
