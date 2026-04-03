describe("real.spec.ts", () =>{
    it("should logout user properly", async() =>{
        await browser.url("https://automationexercise.com/");
        await $("//img[@src='/static/images/home/logo.png']").waitForDisplayed();
        await $("//a[@href='/login']").click();
        await $("//h2[text()='Login to your account']").waitForDisplayed();
        await $("//input[@data-qa='login-email']").setValue("godbless@gmail.com");
        await $("//input[@data-qa='login-password']").setValue("419914");
        await $("//button[@data-qa='login-button']").click();
        await $("//a[contains(., 'Logged in as')]").waitForDisplayed({ timeout: 10000 })
        await $("//a[@href='/logout']").click();
        await $("//img[@src='/static/images/home/logo.png']").waitForDisplayed();
    })
})