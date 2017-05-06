import { JobWalkProPage } from './app.po';

describe('job-walk-pro App', function() {
  let page: JobWalkProPage;

  beforeEach(() => {
    page = new JobWalkProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
