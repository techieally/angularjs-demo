var app = angular.module('myApp',[])
  .controller("twoWayBindCtl", function($scope){
    console.log("inside two way ")
    $scope.message="Welcome to angularJS";
    var values = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.names = values;
  });
