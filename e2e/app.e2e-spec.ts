import { SemanticAppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('semantic-app App', function() {

  beforeEach(() => {
    browser.get('');
    browser.waitForAngular();
  });

  it('should display message saying app works', () => {
    expect(element(by.css('app-root h1')).getText()).toEqual('Adverse Events');
  });

  it('should have EventsComponent defined', () => {
    expect(element(by.css('app-events')).isPresent()).toBeTruthy();
  });
});
