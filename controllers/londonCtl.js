var app = angular.module("myApp");
app.controller("londonCtrl", function ($scope) {
  console.log("londonCtrl");
    $scope.msg = "I love London";
    $scope.message="Welcome to angularJS";
    var values = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.names = values;
});
