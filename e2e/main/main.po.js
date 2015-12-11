/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
    this.heroEl = element(by.css('.hero-unit'));
    this.h1El = this.heroEl.element(by.css('h1'));
    this.imgEl = this.heroEl.element(by.css('img'));

    this.panelFixedEl = element(by.css('ng-cta-fixed .panel'));
    this.panelFixedHrefEl = this.panelFixedEl.element(by.css('a'));
    this.panelFixedDescription = this.panelFixedHrefEl.element(by.css('.description-text'));
    this.panelFixedCta = this.panelFixedHrefEl.element(by.css('.cta-text'));
};

module.exports = new MainPage();

