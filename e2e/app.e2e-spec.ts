import { StartecSitePage } from './app.po';

describe('startec-site App', () => {
  let page: StartecSitePage;

  beforeEach(() => {
    page = new StartecSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
