describe("auto.spec.ts", () => {
    it("should login user with correct email & password", async () => {
        await browser.url("https://automationexercise.com/");
        await expect($("//img[@src='/static/images/home/logo.png']")).toBeDisplayed();
        await $("//a[@href='/login']").click();
        await expect($("//h2[text()='Login to your account']")).toBeDisplayed();
        await $("//input[@data-qa='login-email']").setValue("godbless@gmail.com");
        await $("//input[@data-qa='login-password']").setValue("419914");
        await $("//button[@data-qa='login-button']").click();
        // ✅ confirm login
        await $("//a[contains(., 'Logged in as')]").waitForDisplayed({ timeout: 10000 });
        await expect($("//i[@class='fa fa-user']")).toBeDisplayed();
        // ✅ click delete FIRST
        const deleteBtn = await $("//a[@href='/delete_account']");
        await deleteBtn.waitForClickable({ timeout: 10000 });
        await deleteBtn.click();
        // ✅ THEN check deleted message
        const deletedMsg = await $("//b[text()='Account Deleted!']");
        await deletedMsg.waitForDisplayed({ timeout: 10000 });
        await expect(deletedMsg).toBeDisplayed();
        // ✅ continue
        await $("//a[@data-qa='continue-button']").click();
    });
});