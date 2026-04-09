import LoginPage from '../pageobjects/Login.page.ts';

describe ('Login Testing', () => {
  it('should login successfully', async () => {
        await LoginPage.openPage();
        await LoginPage.Loginlogo.isDisplayed();
        await LoginPage.Loginlink.click();
        await LoginPage.Loginheader.isDisplayed();
        await LoginPage.Email.setValue('uju@yahoo.com');
        await LoginPage.Password.setValue('123');
        await LoginPage.Loginbutton.click();
        await LoginPage.Loggedinas.isDisplayed();
        await LoginPage.DeleteAccount.click();
        await LoginPage.AccountDeleted.isDisplayed();

    });

});
