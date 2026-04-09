import LoginPage from "../pageobjects/login.page.ts";

describe("Login Test", () => {

    it("should login user with correct email & password", async () => {

        // Open site
        await LoginPage.open();
        await browser.maximizeWindow();

        // Wait and check homepage loaded
        await LoginPage.homeLogo.waitForDisplayed({ timeout: 10000 });
        await expect(LoginPage.homeLogo).toBeDisplayed();

        // Click login
        await LoginPage.loginLink.click();

        // Confirm login page
        await LoginPage.loginHeader.waitForDisplayed({ timeout: 10000 });
        await expect(LoginPage.loginHeader).toBeDisplayed();

        // Login
        await LoginPage.login("godbless@gmail.com", "419914");

        // Confirm user logged in
        await LoginPage.loggedInText.waitForDisplayed({ timeout: 10000 });
        await expect(LoginPage.userIcon).toBeDisplayed();

        // Delete account
        await LoginPage.deleteAccount();

        // Confirm deleted
        await LoginPage.deletedMessage.waitForDisplayed({ timeout: 10000 });
        await expect(LoginPage.deletedMessage).toBeDisplayed();

        // Continue
        await LoginPage.continueButton.click();
    });

});