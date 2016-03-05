var app = angular.module('investar', ['ui.router', 'ngAnimate']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    }).state('life-insurance', {
      url: '/life-insurance',
      templateUrl: '/life-insurance.html',
      controller: 'MainCtrl'
    }).state('login', {
      url: '/login',
      templateUrl: '/login.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: [
      {investment: 'Real Estate', weightedAverage: 40},
    {investment: 'Life Insurance', weightedAverage: 40},
    {investment: 'Stocks/Bonds', weightedAverage: 40},
    {investment: 'Startups/Lending', weightedAverage: 40},
    {investment: 'IRA/401k', weightedAverage: 40},
    {investment: 'Pay Down Debt', weightedAverage: 40},
    {investment: 'Earn More', weightedAverage: 40},
    {investment: 'Cheat on Taxes', weightedAverage: 40}
    ]
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

  // $scope.textSizeFunc = function(avg) {
  //  if (avg >= 80 ) {return 35};
  //  if (avg < 80 && avg > 50 ) {return 25};
  //  if (avg <= 50 && avg > 35 ) {return 20};
  //  if (avg <= 35 ) {return 15};
  // };

  // $scope.textWeightFunc = function(avg) {
  //  if (avg >= 80 ) {return 900};
  //  if (avg < 80 && avg > 50 ) {return 700};
  //  if (avg <= 50 && avg > 35 ) {return 500};
  //  if (avg <= 35 ) {return 300};
  // };

  // $scope.textOpacityFunc = function(avg) {
  //  if (avg >= 80 ) {return 1.0};
  //  if (avg < 80 && avg > 50 ) {return .7};
  //  if (avg <= 50 && avg > 35 ) {return .5};
  //  if (avg <= 35 ) {return .3};
  // };

  // $scope.submit = function() {
  //   $http.post(/signup)
  // };

  $scope.textSizeFunc = function(avg) {
   if (avg >= 100 ) {return 'xl-text'};
   if (avg < 100 && avg > 70 ) {return 'l-text'};
   if (avg <= 70 && avg >= 60 ) {return 'm-text'};
   if (avg < 60 ) {return 's-text'};
  };

  

  // $scope.textWeightFunc = function(avg) {
  //  if (avg >= 80 ) {return 900};
  //  if (avg < 80 && avg > 50 ) {return 700};
  //  if (avg <= 50 && avg > 35 ) {return 500};
  //  if (avg <= 35 ) {return 300};
  // };

  // $scope.textOpacityFunc = function(avg) {
  //  if (avg >= 80 ) {return 1.0};
  //  if (avg < 80 && avg > 50 ) {return .7};
  //  if (avg <= 50 && avg > 35 ) {return .5};
  //  if (avg <= 35 ) {return .3};
  // };




  $scope.posts = posts.posts;

 


  $scope.goalItems = [
    {name: 'Be Better With Money', age: 37 },
    {name: 'Maximize Retirement', age: 27 },
    {name: 'Receive Regular Income', age: 50 }
  ];

  $scope.goalChange = function(newObj, oldObj){
      if (oldObj) {
        if (oldObj.name == 'Be Better With Money') {
          $scope.posts[0].weightedAverage -= 15;
          $scope.posts[1].weightedAverage -= 10;
          $scope.posts[2].weightedAverage -= 15;
          $scope.posts[3].weightedAverage -= 10;
          $scope.posts[4].weightedAverage -= 15; 
          $scope.posts[5].weightedAverage -= 20;
          $scope.posts[6].weightedAverage -= 10;
          $scope.posts[7].weightedAverage -= 15;
        };
        if (oldObj.name == 'Maximize Retirement') {
          $scope.posts[0].weightedAverage -= 10;
          $scope.posts[1].weightedAverage -= 15;
          $scope.posts[2].weightedAverage -= 15;
          $scope.posts[3].weightedAverage -= 10;
          $scope.posts[4].weightedAverage -= 20;
          $scope.posts[5].weightedAverage -= 15;
          $scope.posts[6].weightedAverage -= 5;
          $scope.posts[7].weightedAverage -= 5;
        };
        if (oldObj.name == 'Receive Regular Income') {
          $scope.posts[0].weightedAverage -= 20;
          $scope.posts[1].weightedAverage -= 20;
          $scope.posts[2].weightedAverage -= 10;
          $scope.posts[3].weightedAverage -= 5;
          $scope.posts[4].weightedAverage += 10;
          $scope.posts[5].weightedAverage -= 5;
          $scope.posts[6].weightedAverage -= 10;
          $scope.posts[7].weightedAverage -= 10;
        };
      };
      
      if (newObj.name == 'Be Better With Money') {
        $scope.posts[0].weightedAverage += 15;
        $scope.posts[1].weightedAverage += 10;
        $scope.posts[2].weightedAverage += 15;
        $scope.posts[3].weightedAverage += 10;
        $scope.posts[4].weightedAverage += 15; 
        $scope.posts[5].weightedAverage += 20;
        $scope.posts[6].weightedAverage += 10;
        $scope.posts[7].weightedAverage += 15;
      };
      if (newObj.name == 'Maximize Retirement') {
        $scope.posts[0].weightedAverage += 10;
        $scope.posts[1].weightedAverage += 15;
        $scope.posts[2].weightedAverage += 15;
        $scope.posts[3].weightedAverage += 10;
        $scope.posts[4].weightedAverage += 20;
        $scope.posts[5].weightedAverage += 15;
        $scope.posts[6].weightedAverage += 5;
        $scope.posts[7].weightedAverage += 5;
      };
      if (newObj.name == 'Receive Regular Income') {
        $scope.posts[0].weightedAverage += 20;
        $scope.posts[1].weightedAverage += 20;
        $scope.posts[2].weightedAverage += 10;
        $scope.posts[3].weightedAverage += 5;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage += 5;
        $scope.posts[6].weightedAverage += 10;
        $scope.posts[7].weightedAverage += 10;
      };
  };

  $scope.timeChange = function(goalLength, oldLength) {
    if (oldLength) {
      if (oldLength <= 5 && oldLength > 0) {
        $scope.posts[0].weightedAverage += 10;
        $scope.posts[1].weightedAverage -= 5;
        $scope.posts[2].weightedAverage -= 5;
        $scope.posts[3].weightedAverage -= 10;
        $scope.posts[4].weightedAverage += 10;
        $scope.posts[5].weightedAverage -= 20;
        $scope.posts[6].weightedAverage -= 20;
        $scope.posts[7].weightedAverage -= 10;
      };
      if (oldLength > 5 && goalLength <= 15) {
        $scope.posts[0].weightedAverage -= 5;
        $scope.posts[1].weightedAverage -= 5;
        $scope.posts[2].weightedAverage -= 10;
        $scope.posts[3].weightedAverage -= 15;
        $scope.posts[4].weightedAverage -= 5;
        $scope.posts[5].weightedAverage -= 15;
        $scope.posts[6].weightedAverage -= 15;
        $scope.posts[7].weightedAverage -= 15;
      };
      if (oldLength > 15) {
        $scope.posts[0].weightedAverage -= 20;
        $scope.posts[1].weightedAverage -= 20;
        $scope.posts[2].weightedAverage -= 20;
        $scope.posts[3].weightedAverage -= 10;
        $scope.posts[4].weightedAverage -= 20;
        $scope.posts[5].weightedAverage -= 10;
        $scope.posts[6].weightedAverage -= 5;
        $scope.posts[7].weightedAverage -= 20;
      };
    };
    
    if (goalLength <= 5 && goalLength > 0) {
        $scope.posts[0].weightedAverage -= 10;
        $scope.posts[1].weightedAverage += 5;
        $scope.posts[2].weightedAverage += 5;
        $scope.posts[3].weightedAverage += 10;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage += 20;
        $scope.posts[6].weightedAverage += 20;
        $scope.posts[7].weightedAverage += 10;
    };
    if (goalLength > 5 && goalLength <= 15) {
        $scope.posts[0].weightedAverage += 5;
        $scope.posts[1].weightedAverage += 5;
        $scope.posts[2].weightedAverage += 10;
        $scope.posts[3].weightedAverage += 15;
        $scope.posts[4].weightedAverage += 5;
        $scope.posts[5].weightedAverage += 15;
        $scope.posts[6].weightedAverage += 15;
        $scope.posts[7].weightedAverage += 15;
    };
    if (goalLength > 15) {
        $scope.posts[0].weightedAverage += 20;
        $scope.posts[1].weightedAverage += 20;
        $scope.posts[2].weightedAverage += 20;
        $scope.posts[3].weightedAverage += 10;
        $scope.posts[4].weightedAverage += 20;
        $scope.posts[5].weightedAverage += 10;
        $scope.posts[6].weightedAverage += 5;
        $scope.posts[7].weightedAverage += 20;
    };
  };
  
  $scope.saveChange = function(saveAmount, oldAmount) {
    if (oldAmount) {
      if (oldAmount < 1000 && oldAmount > 0) {
        $scope.posts[0].weightedAverage += 5;
        $scope.posts[1].weightedAverage -= 0;
        $scope.posts[2].weightedAverage -= 0;
        $scope.posts[3].weightedAverage -= 5;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage -= 10;
        $scope.posts[6].weightedAverage -= 15;
        $scope.posts[7].weightedAverage -= 0;
      };
      if (oldAmount >= 1000 && oldAmount < 5000) {
        $scope.posts[0].weightedAverage -= 10;
        $scope.posts[1].weightedAverage -= 10;
        $scope.posts[2].weightedAverage -= 10;
        $scope.posts[3].weightedAverage -= 10;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage -= 15;
        $scope.posts[6].weightedAverage -= 0;
        $scope.posts[7].weightedAverage -= 10;
      };
      if (oldAmount >= 5000) {
        $scope.posts[0].weightedAverage += 15;
        $scope.posts[1].weightedAverage -= 15;
        $scope.posts[2].weightedAverage -= 15;
        $scope.posts[3].weightedAverage -= 15;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage -= 10;
        $scope.posts[6].weightedAverage -= 5;
        $scope.posts[7].weightedAverage -= 20;
      };
    };
    
    if (saveAmount < 1000 && saveAmount > 0) {
      $scope.posts[0].weightedAverage -= 5;
      $scope.posts[1].weightedAverage += 0;
      $scope.posts[2].weightedAverage += 0;
      $scope.posts[3].weightedAverage += 5;
      $scope.posts[4].weightedAverage += 10;
      $scope.posts[5].weightedAverage += 10;
      $scope.posts[6].weightedAverage += 15;
      $scope.posts[7].weightedAverage += 0;
    };
    if (saveAmount >= 1000 && saveAmount < 5000) {
      $scope.posts[0].weightedAverage += 10;
      $scope.posts[1].weightedAverage += 10;
      $scope.posts[2].weightedAverage += 10;
      $scope.posts[3].weightedAverage += 10;
      $scope.posts[4].weightedAverage += 10;
      $scope.posts[5].weightedAverage += 15;
      $scope.posts[6].weightedAverage += 0;
      $scope.posts[7].weightedAverage += 10;
    };
    if (saveAmount >= 5000) {
      $scope.posts[0].weightedAverage -= 15;
      $scope.posts[1].weightedAverage += 15;
      $scope.posts[2].weightedAverage += 15;
      $scope.posts[3].weightedAverage += 15;
      $scope.posts[4].weightedAverage += 10;
      $scope.posts[5].weightedAverage += 10;
      $scope.posts[6].weightedAverage += 5;
      $scope.posts[7].weightedAverage += 20;
    };
  };

  $scope.accountChange = function(accountAmount, oldAmount) {
    if (oldAmount) {
      if (oldAmount < 10000 && oldAmount > 0) {
        $scope.posts[0].weightedAverage += 5;
        $scope.posts[1].weightedAverage -= 0;
        $scope.posts[2].weightedAverage -= 0;
        $scope.posts[3].weightedAverage -= 5;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage -= 10;
        $scope.posts[6].weightedAverage -= 15;
        $scope.posts[7].weightedAverage -= 0;
      };
      if (oldAmount >= 10000 && oldAmount < 50000) {
        $scope.posts[0].weightedAverage -= 10;
        $scope.posts[1].weightedAverage -= 10;
        $scope.posts[2].weightedAverage -= 10;
        $scope.posts[3].weightedAverage -= 10;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage -= 15;
        $scope.posts[6].weightedAverage -= 0;
        $scope.posts[7].weightedAverage -= 10;
      };
      if (oldAmount >= 50000) {
        $scope.posts[0].weightedAverage -= 15;
        $scope.posts[1].weightedAverage -= 15;
        $scope.posts[2].weightedAverage -= 15;
        $scope.posts[3].weightedAverage -= 15;
        $scope.posts[4].weightedAverage -= 10;
        $scope.posts[5].weightedAverage -= 10;
        $scope.posts[6].weightedAverage -= 5;
        $scope.posts[7].weightedAverage -= 20;
      };
    };
    
    if (accountAmount < 10000 && accountAmount > 0) {
      $scope.posts[0].weightedAverage -= 5;
      $scope.posts[1].weightedAverage += 0;
      $scope.posts[2].weightedAverage += 0;
      $scope.posts[3].weightedAverage += 5;
      $scope.posts[4].weightedAverage += 10;
      $scope.posts[5].weightedAverage += 10;
      $scope.posts[6].weightedAverage += 15;
      $scope.posts[7].weightedAverage += 0;
    };
    if (accountAmount >= 10000 && accountAmount < 50000) {
      $scope.posts[0].weightedAverage += 10;
      $scope.posts[1].weightedAverage += 10;
      $scope.posts[2].weightedAverage += 10;
      $scope.posts[3].weightedAverage += 10;
      $scope.posts[4].weightedAverage += 10;
      $scope.posts[5].weightedAverage += 15;
      $scope.posts[6].weightedAverage += 0;
      $scope.posts[7].weightedAverage += 10;
    };
    if (accountAmount >= 50000) {
      $scope.posts[0].weightedAverage += 15;
      $scope.posts[1].weightedAverage += 15;
      $scope.posts[2].weightedAverage += 15;
      $scope.posts[3].weightedAverage += 15;
      $scope.posts[4].weightedAverage += 10;
      $scope.posts[5].weightedAverage += 10;
      $scope.posts[6].weightedAverage += 5;
      $scope.posts[7].weightedAverage += 20;
    };
  };

  $scope.rentItems = [
    {name: 'Rent', age: 37 },
    {name: 'Own', age: 27 },
    
  ];

  $scope.rentChange = function(newObj, oldObj){
      if (oldObj) {
        if (oldObj.name == 'Rent') {
          $scope.posts[0].weightedAverage -= 20;
          $scope.posts[1].weightedAverage -= 10;
          $scope.posts[2].weightedAverage -= 10;
          $scope.posts[3].weightedAverage -= 10;
          $scope.posts[4].weightedAverage -= 15;
          $scope.posts[5].weightedAverage -= 15;
          $scope.posts[6].weightedAverage -= 10;
          $scope.posts[7].weightedAverage -= 5;
        };
        if (oldObj.name == 'Own') {
          $scope.posts[0].weightedAverage -= 15;
          $scope.posts[1].weightedAverage -= 15;
          $scope.posts[2].weightedAverage -= 15;
          $scope.posts[3].weightedAverage -= 15;
          $scope.posts[4].weightedAverage -= 15;
          $scope.posts[5].weightedAverage -= 10;
          $scope.posts[6].weightedAverage -= 5;
          $scope.posts[7].weightedAverage -= 15;
        };
        
      };
      
      if (newObj.name == 'Rent') {
        $scope.posts[0].weightedAverage += 20;
        $scope.posts[1].weightedAverage += 10;
        $scope.posts[2].weightedAverage += 10;
        $scope.posts[3].weightedAverage += 10;
        $scope.posts[4].weightedAverage += 15;
        $scope.posts[5].weightedAverage += 15;
        $scope.posts[6].weightedAverage += 10;
        $scope.posts[7].weightedAverage += 5;
      };
      if (newObj.name == 'Own') {
        $scope.posts[0].weightedAverage += 15;
        $scope.posts[1].weightedAverage += 15;
        $scope.posts[2].weightedAverage += 15;
        $scope.posts[3].weightedAverage += 15;
        $scope.posts[4].weightedAverage += 15;
        $scope.posts[5].weightedAverage += 10;
        $scope.posts[6].weightedAverage += 5;
        $scope.posts[7].weightedAverage += 15;
      };
      
  };

  $scope.creditItems = [
    {name: 'Excellent (740+)', age: 37 },
    {name: 'Good (680 - 740)', age: 27 },
    {name: 'Fair (600 - 680)', age: 50 },
    {name: 'Bad (Below 600)', age: 50 }
  ];

  $scope.creditChange = function(newObj, oldObj) {

      if (oldObj) {
        if (oldObj.name == 'Excellent (740+)') {
          $scope.posts[4].weightedAverage -= 1;
        };
        if (oldObj.name == 'Good (680 - 740)') {
          $scope.posts[3].weightedAverage -= 2;
        };
        if (oldObj.name == 'Fair (600 - 680)') {
          $scope.posts[5].weightedAverage -= 3;
        };
        if (oldObj.name == 'Bad (Below 600)') {
          $scope.posts[5].weightedAverage -= 4;
        };
      };
      
      if (newObj.name == 'Excellent (740+)') {
        $scope.posts[4].weightedAverage += 1;
      };
      if (newObj.name == 'Good (680 - 740)') {
        $scope.posts[3].weightedAverage += 2;
      };
      if (newObj.name == 'Fair (600 - 680)') {
        $scope.posts[5].weightedAverage += 3;
      };
      if (newObj.name == 'Bad (Below 600)') {
        $scope.posts[5].weightedAverage += 4;
      };
  };

  $scope.debtChange = function(debtAmount, oldAmount) {
    if (oldAmount) {
      if (oldAmount > 5000) {
        $scope.posts[5].weightedAverage -= 6;
      };
    };
    
    if (debtAmount > 5000) {
      $scope.posts[5].weightedAverage += 6;
    };
  };
  $scope.allCompleted = function() {
    console.log($scope.rentItem.$valid)
  };


}]);

