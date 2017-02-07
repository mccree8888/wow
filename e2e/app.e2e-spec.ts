import { WowPage } from './app.po';

describe('wow App', function() {
  let page: WowPage;

  beforeEach(() => {
    page = new WowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
