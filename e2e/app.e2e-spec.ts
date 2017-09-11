import { ThurmansSitePage } from './app.po';

describe('thurmans-site App', () => {
  let page: ThurmansSitePage;

  beforeEach(() => {
    page = new ThurmansSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
