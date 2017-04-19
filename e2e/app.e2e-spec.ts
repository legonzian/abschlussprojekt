import { AdressportalAdministrationPage } from './app.po';

describe('adressportal-administration App', () => {
  let page: AdressportalAdministrationPage;

  beforeEach(() => {
    page = new AdressportalAdministrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
