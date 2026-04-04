describe("js.spec.ts", () =>{
    it("should login use with incorrect email and password", async() =>{
        await browser.url("https://automationexercise.com/");
        await $("//img[@src='/static/images/home/logo.png']").waitForDisplayed();
        await $("//a[@href='/login']").click();
        await $("//h2[text()='Login to your account']").waitForDisplayed();
        await $("//input[@data-qa='login-email']").setValue("test@gmail.com");
        await $("//input[@data-qa='login-password']").setValue("6666");
        await $("//button[@data-qa='login-button']").click();
        await $("//p[text()='Your email or password is incorrect!']").waitForDisplayed();
    })
})