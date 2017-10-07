import { AccordianProjectPage } from './app.po';

describe('accordian-project App', function() {
  let page: AccordianProjectPage;

  beforeEach(() => {
    page = new AccordianProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
