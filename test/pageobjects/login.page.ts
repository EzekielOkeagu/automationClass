class LoginPage {

    // Open website
    async open() {
        await browser.url("https://automationexercise.com/");
    }

    // Elements
    get homeLogo() {
        return $("//img[@src='/static/images/home/logo.png']");
    }

    get loginLink() {
        return $("//a[@href='/login']");
    }

    get loginHeader() {
        return $("//h2[text()='Login to your account']");
    }

    get emailInput() {
        return $("//input[@data-qa='login-email']");
    }

    get passwordInput() {
        return $("//input[@data-qa='login-password']");
    }

    get loginButton() {
        return $("//button[@data-qa='login-button']");
    }

    get loggedInText() {
        return $("//a[contains(., 'Logged in as')]");
    }

    get userIcon() {
        return $("//i[@class='fa fa-user']");
    }

    get deleteButton() {
        return $("//a[@href='/delete_account']");
    }

    get deletedMessage() {
        return $("//b[text()='Account Deleted!']");
    }

    get continueButton() {
        return $("//a[@data-qa='continue-button']");
    }

    // Actions 

    async login(email: string, password: string) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);

        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async deleteAccount() {
        await this.deleteButton.waitForClickable({ timeout: 10000 });
        await this.deleteButton.click();
    }
}

export default new LoginPage();