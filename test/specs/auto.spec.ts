import SignupPage from "../pageobjects/signup.ts";
describe("automation exeercise test", () => {
    it('should perform signup tests properly', async () => {
        await SignupPage.open();
        await SignupPage.clickLoginBtn();
        await SignupPage.fillSignupForm("esther", "esther@example.com");
        await SignupPage.verifySignupForm()
        await SignupPage.fillAccountInfoForm()
        await SignupPage.fillAddressInfo("esther", "smith", "esthers company", "123 main st", "apt 4", 3, "california", "los angeles", "90001", "1234567890");
        await SignupPage.submitAccount();
        await $("//a[@data-qa='continue-button']").click();
        
    })
})


