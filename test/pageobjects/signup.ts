//import { count } from "node:console"

class SignupPage {

    //const email = `franc ${(Math.floor(Math.random())* 1000)}@gmail.com`;
    // home page elements
    get homeLogo() {
        return $("//img[@src='/static/images/home/logo.png']")
    }
    get loginLink() {
        return $("//a[@href='/login']")
    }
    // signupform

    get newuserSignupHeading(){
        return $("//h2[text()='New User Signup!']")
    }
    get signupNameInput(){
        return $("//input[@data-qa='signup-name']")
    }
    get signupEmailInput(){
        return $("//input[@data-qa='signup-email']")
    }

    get signupButton(){
        return $("//button[@data-qa='signup-button']")
    }

    //account information form

    get enterAccountInfoHeading(){
        return $("//b[text()='Enter Account Information']")
    }
    get genderMaleRadio(){
        return $("#id_gender1")
    }
    get genderFemaleRadio(){
        return $("#id_gender2")
    }
    get nameInput(){
        return $("#name")
    }
    get passwordInput(){
        return $("#password")
    }
    get dobdaydropdown(){
        return $("#days")
    }
    get dobmonthdropdown(){
        return $("#months")
    }
    get dobyeardropdown(){
        return $("#years")
    }
    get newsletterCheckbox(){
        return $("#newsletter")
    }
    get specialOffersCheckbox(){
        return $("#optin")
    }
    get firstNameInput(){
        return $('#first_name')
    }
    get lastNameInput(){
        return $('#last_name')
    }
    get companyInput(){
        return $('#company')
    }
    get address1Input(){
        return $('#address1')
    }
    get address2Input(){
        return $('#address2')
    }
    get countryDropdown(){
        return $('#country')
    }
    get stateInput(){
        return $('#state')
    }
    get cityInput(){
        return $('#city')
    }
    get zipcodeInput(){
        return $('#zipcode')
    }
    get mobileNumberInput(){
        return $('#mobile_number')
    }
    get createAccountButton(){
        return $('//button[text()="Create Account"]')
    }

    ///page actions

    async open(){
        await browser.url('https://automationexercise.com/');
        await browser.maximizeWindow();
    }

    async clickLoginBtn(){
        await this.loginLink.click();
    }
    
    async fillSignupForm(name: string, email: string){
        await this.signupNameInput.setValue(name)
        await this.signupEmailInput.setValue(email)
        await this.signupButton.click();
    }

    async verifySignupForm(){
        await expect(this.enterAccountInfoHeading).toBeDisplayed();
    }

    async fillAccountInfoForm(){
        await this.genderFemaleRadio.click();
        await this.nameInput.setValue("Esthers");
        await this.passwordInput.setValue("1234");
        await this.dobdaydropdown.selectByVisibleText('1');
        await this.dobmonthdropdown.selectByAttribute('value', '4');
        await this.dobyeardropdown.selectByIndex(5);
        await this.newsletterCheckbox.click();
        await this.specialOffersCheckbox.click();
    }

    async fillAddressInfo(firstName:string, lastName:string, company:string, address1:string, address2:string, countryIndex:number, state:string, city:string, zipcode:string, mobileNumber:string){
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.companyInput.setValue(company);
        await this.address1Input.setValue(address1);
        await this.address2Input.setValue(address2);
        await this.countryDropdown.selectByIndex(countryIndex);
        await this.stateInput.setValue(state);
        await this.cityInput.setValue(city);
        await this.zipcodeInput.setValue(zipcode);
        await this.mobileNumberInput.setValue(mobileNumber);
    }

    async submitAccount(){
        await this.createAccountButton.scrollIntoView();
        await this.createAccountButton.waitForClickable({ timeout: 5000 });
        await this.createAccountButton.click();
    }
}
export default new SignupPage()








