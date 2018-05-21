import { MyspaceClonePage } from './app.po';

describe('myspace-clone App', () => {
  let page: MyspaceClonePage;

  beforeEach(() => {
    page = new MyspaceClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
