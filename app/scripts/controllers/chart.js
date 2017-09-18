'use strict';

/**
 * @ngdoc function
 * @name saitoMessApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the saitoMessApp
 */
angular.module('saitoMessApp')
  .controller('ChartCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var homework = {
      x: [1, 2, 3, 4,5,6,7,8,9,10],
      y: [96,100,100,0,0,0,0,0,0,0],
      type: 'scatter'
    };

    var data = [homework];

    Plotly.newPlot('myDiv', data)
  });


