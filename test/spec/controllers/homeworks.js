'use strict';

describe('Controller: HomeworksCtrl', function () {

  // load the controller's module
  beforeEach(module('saitoMessApp'));

  var HomeworksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeworksCtrl = $controller('HomeworksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HomeworksCtrl.awesomeThings.length).toBe(3);
  });
});
