var app = angular.module("myApp");
app.controller("londonCtrl", function ($scope) {
  console.log("londonCtrl");
    $scope.msg = "I love London";
});
