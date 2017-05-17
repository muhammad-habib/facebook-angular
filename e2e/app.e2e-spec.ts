import { FacebookApiPage } from './app.po';

describe('facebook-api App', () => {
  let page: FacebookApiPage;

  beforeEach(() => {
    page = new FacebookApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
