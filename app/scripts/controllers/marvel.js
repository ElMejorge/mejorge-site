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

    $http({
      method: 'GET',
      url: lambdaUrl
    }).then(function successCallback(response) {
      console.log(response.data);
      $scope.heroes = response.data;
    }, function errorCallback(response) {
      $scope.response = 'Request failed';
    });

	  //$scope.heroes = [
		  //{id:"1009148",name:"Absorbing man",comicAmount:"53",seriesAmount:"37"},
		  //{id:"1010354",name:"Adam Warlock",comicAmount:"128",seriesAmount:"56"},
		  //{id:"1009147",name:"Some other guy",comicAmount:"128",seriesAmount:"56"},
	  //];

    $scope.hero = "None selected";
    $scope.otherHero = "None selected";
    $scope.hasComics = true;
    $scope.hasSeries = true;

    function getComics(t0) {
	var heroParams = getHeroParamsJSON(JSON.parse($scope.hero), JSON.parse($scope.otherHero));
      $http({
        method: 'POST',
        url: "https://s711n2dtcg.execute-api.us-east-1.amazonaws.com/Testing/compare/comics",
	data: heroParams
      }).then(function successCallback(response) {
        console.log(response.data);
	if(response.data.length > 0){
      		$scope.comics = response.data;
	 	$scope.hasComics = true;
	} else {
		$scope.hasComics = false;
	}
	      var t1 = performance.now();
	      $scope.comicTime = ((t1-t0)/1000).toFixed(2)
      }, function errorCallback(response) {
        console.log(response.data);
      });
    };

   function getSeries(t0) {
	var heroParams = getHeroParamsJSON(JSON.parse($scope.hero), JSON.parse($scope.otherHero));
     $http({
        method: 'POST',
        url: "https://s711n2dtcg.execute-api.us-east-1.amazonaws.com/Testing/compare/series",
	data: heroParams
      }).then(function successCallback(response) {
        if(response.data.length > 0){
      		$scope.series = response.data;
	 	$scope.hasSeries = true;
	} else {
		$scope.hasSeries = false;
	}
	      var t1 = performance.now();
	      $scope.seriesTime = ((t1-t0)/1000).toFixed(2)
      }, function errorCallback(response) {
        console.log(response.data);
      });
    };
	  
	  $scope.getInfo = function() {
		  var t0 = performance.now();
		  getSeries(t0);
		  getComics(t0);
	  }
  });

function parseHeroToJson(hero){
	return '{"id":' + hero["id"] + ',"comicAmount":' + hero["comicAmount"] + ',"seriesAmount":' + hero["seriesAmount"] + '}';
}

function getHeroParamsJSON(hero1, hero2){
	return '{"hero1":' + parseHeroToJson(hero1) + ',"hero2":' + parseHeroToJson(hero2) + '}';

}


