'use strict';

describe('Main View - cta fixed directive', function() {
    var page;

    beforeEach(function() {
        browser.get('/');
        page = require('../../main/main.po');
    });

    it('should exist panelFixedEl, panelFixedHrefEl, panelFixedDescription and panelFixedCta', function() {
        expect(page.panelFixedEl.isDisplayed()).toBe(true);
        expect(page.panelFixedHrefEl.isDisplayed()).toBe(true);
        expect(page.panelFixedDescription.isDisplayed()).toBe(true);
        expect(page.panelFixedCta.isDisplayed()).toBe(true);

    });

    it('should click cta and go somewhere', function() {
        page.panelFixedCta.click();
        expect(browser.getCurrentUrl()).toMatch(/.\/{2}[a-zA-Z0-9:.]+\/{1}[a-zA-Z-]+/);
    });
});
