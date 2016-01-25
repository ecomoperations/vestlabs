var app = angular.module('investar', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
'$scope',
function($scope){

  $scope.textSizeFunc = function(avg) {
   if (avg > 50 ) {return 35};
   if (avg <= 50) {return 25};
  };

  $scope.textWeightFunc = function(avg) {
   if (avg > 50 ) {return 900};
   if (avg <= 50) {return 700};
  };

  $scope.textOpacityFunc = function(avg) {
   if (avg > 50 ) {return 1.0};
   if (avg <= 50) {return .5};
  };


  $scope.posts = [
    {investment: 'Real Estate', weightedAverage: 50},
    {investment: 'Life Insurance', weightedAverage: 50},
    {investment: 'Stocks/Bonds', weightedAverage: 50},
    {investment: 'Startups/Lending', weightedAverage: 50},
    {investment: 'IRA/401k', weightedAverage: 50},
    {investment: 'Pay Down Debt', weightedAverage: 50},
    {investment: 'Earn More', weightedAverage: 50},
    {investment: 'Cheat on Taxes', weightedAverage: 50}
  ];


  $scope.items = [
    {name: 'Better With Money', age: 37 },
    {name: 'Maximize Retirement', age: 27 },
    {name: 'Receive Regular Income', age: 50 }
  ];

  $scope.selectedItemChanged = function(newObj, oldObj){
      if (oldObj) {
        if (oldObj.name == 'Better With Money') {
          $scope.posts[4].weightedAverage -= 1;
        };
        if (oldObj.name == 'Maximize Retirement') {
          $scope.posts[3].weightedAverage -= 2;
        };
        if (oldObj.name == 'Receive Regular Income') {
          $scope.posts[5].weightedAverage -= 3;
        };
      };
      
      if (newObj.name == 'Better With Money') {
        $scope.posts[4].weightedAverage += 1;
      };
      if (newObj.name == 'Maximize Retirement') {
        $scope.posts[3].weightedAverage += 2;
      };
      if (newObj.name == 'Receive Regular Income') {
        $scope.posts[5].weightedAverage += 3;
      };
  };

}]);

