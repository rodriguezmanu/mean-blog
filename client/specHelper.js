'use strict';
function testTranslate($httpBackend) {
    $httpBackend.whenGET('i18n/locale-en_US.json', function() {
        return true;
    }).respond(200, {});
}
