'use strict';

/**
 * @ngdoc overview
 * @name saitoMessApp
 * @description
 * # saitoMessApp
 *
 * Main module of the application.
 */
angular
  .module('saitoMessApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/homework/1', {
        templateUrl: 'views/homework1.html',
        controller: 'HomeworkCtrl',
        controllerAs: 'homework'
      })
      .when('/homework/2', {
        templateUrl: 'views/homework2.html',
        controller: 'HomeworkCtrl',
        controllerAs: 'homework'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl',
        controllerAs: 'chart'
      })
      .when('/homeworks', {
        templateUrl: 'views/homeworks.html',
        controller: 'HomeworksCtrl',
        controllerAs: 'homeworks'
      })
      .when('/homework/3', {
        templateUrl: 'views/homework3.html',
        controller: 'HomeworkCtrl',
        controllerAs: 'homeworks'
      })
      .when('/homework/4', {
        templateUrl: 'views/homework4.html',
        controller: 'MarvelCtrl',
        controllerAs: 'marvel'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
