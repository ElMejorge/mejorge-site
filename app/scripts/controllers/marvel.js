'use strict';

angular.module('saitoMessApp')
  .controller('MarvelCtrl', function ($scope, $http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var lambdaUrl = "https://s711n2dtcg.execute-api.us-east-1.amazonaws.com/Testing/heroes";

    $scope.heroes = [];

    // $http({
    //   method: 'GET',
    //   url: lambdaUrl
    // }).then(function successCallback(response) {
    //   console.log(response.data[0]);
    //   $scope.heroes = response.data[0];
    // }, function errorCallback(response) {
    //   $scope.response = 'Request failed';
    // });

    $scope.heroes = [
      {name : 'Batman', id:"1011116" },
      {name : 'Superman', id:"1009146"},
      {name : 'SomeOtherGuy', id:"1009146"}
    ];

    $scope.hero = "None selected";
    $scope.otherHero = "None selected";

    $scope.getComics = function() {
      $http({
        method: 'POST',
        url: "https://s711n2dtcg.execute-api.us-east-1.amazonaws.com/Testing/compare/comics",
        data: '{"hero1:"' + $scope.hero.id + '","hero2:"' + $scope.otherHero.id + '"}'
      }).then(function successCallback(response) {
        console.log(response.data[0]);
        $scope.comics = response.data[0];
      }, function errorCallback(response) {
        console.log(response.data);
      });
    };

    $scope.getSeries = function() {
      $http({
        method: 'POST',
        url: "https://s711n2dtcg.execute-api.us-east-1.amazonaws.com/Testing/compare/series",
        data: '{"hero1:"' + $scope.hero.id + '","hero2:"' + $scope.otherHero.id + '"}'
      }).then(function successCallback(response) {
        console.log(response.data[0]);
        $scope.series = response.data[0];
      }, function errorCallback(response) {
        console.log(response.data);
      });
    }
  });


