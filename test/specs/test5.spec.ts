describe("bin.spec.ts", ()=>{
    it("shpuld register user with existing email", async ()=> {
         await browser.url("https://automationexercise.com/");
        await expect($("//img[@src='/static/images/home/logo.png']")).toBeDisplayed();
        await $("//a[@href='/login']").click();
        await expect($("//h2[text()='New User Signup!']")).toBeDisplayed();
        await $("//input[@data-qa='signup-name']").setValue("Godbless");
        await $("//input[@data-qa='signup-email']").setValue('godbless@gmail.com');
        await $("//button[@data-qa='signup-button']").click();
        await $("//p[text()='Email Address already exist!']").waitForDisplayed();
    })
})
       