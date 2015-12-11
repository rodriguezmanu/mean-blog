/* jshint -W117, -W030 */
'use strict';

describe('Directive: header', function() {

    // load the directive's module and view
    beforeEach(module('DemoApp'));
    beforeEach(module('components/directives/header/header.html'));

    var element,
        scope;

    beforeEach(inject(function($rootScope, $httpBackend, $compile) {
        scope = $rootScope.$new();
        testTranslate($httpBackend);

        element = angular.element('<ng-header></ng-header>');
        element = $compile(element)(scope);
        scope.$digest();
    }));

    it('should directive be defined', function() {
        expect(element).toBeDefined();
    });
});

