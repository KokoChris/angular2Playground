import { Ang2PlaygroundPage } from './app.po';

describe('ang2-playground App', function() {
  let page: Ang2PlaygroundPage;

  beforeEach(() => {
    page = new Ang2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
