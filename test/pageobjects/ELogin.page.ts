class LoginPage {
    get URL() {
        return $('http://automationexercise.com');
    }
    get Loginlogo() {
        return $("//img[@src='/static/images/home/logo.png']");
    }
    get Loginlink() {
        return $('a[href="/login"]');
    }
    get Loginheader() {
        return $("//h2[text()='Login to your account']");
    }
    get Email() {
        return $('input[data-qa="login-email"]');
    }
    get Password() {
        return $('input[data-qa="login-password"]');
    }   
    get Loginbutton() {
        return $('//button[@data-qa="login-button"]');
    }
    get Loggedinas() {
        return $('//a[contains(normalize-space(),"Logged in as")]');
    }
    get DeleteAccount() {
        return $('//a[@href="/delete_account"]');
    } 
    get AccountDeleted() {
        return $("//b[text()='Account Deleted!']");
    }

      async openPage() {
        await browser.url('http://automationexercise.com');
        await browser.maximizeWindow();
        await browser.pause(2000);

    }

    async login(email: string, password: string) {
        await this.Loginlink.click();
        await expect(this.Loginheader).toBeDisplayed();
        await this.Email.setValue(email);
        await this.Password.setValue(password);
        await this.Loginbutton.click();
    }

}
export default new LoginPage();