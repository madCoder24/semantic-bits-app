import { SemanticAppPage } from './app.po';

describe('semantic-app App', function() {
  let page: SemanticAppPage;

  beforeEach(() => {
    page = new SemanticAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
