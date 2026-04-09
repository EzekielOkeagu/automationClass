describe ('Login Testing', () => {
    it('should login successfully', async () => {
        await browser.url('http://automationexercise.com');
        await browser.maximizeWindow();
        await browser.pause(2000);
        await expect($("//img[@src='/static/images/home/logo.png']")).toBeDisplayed();
        await $('a[href="/login"]').click();
        await expect($("//h2[text()='Login to your account']")).toBeDisplayed();
        await $('input[data-qa="login-email"]').setValue('uju@yahoo.com');
        await $('input[data-qa="login-password"]').setValue('123');
        await $('//button[@data-qa="login-button"]').click();
        await browser.pause(2000);
        await expect($('//a[contains(normalize-space(),"Logged in as uju")]')).toBeDisplayed();
        await $('//a[@href="/delete_account"]').click();
        await expect($('//b[text()="Account Deleted!"]')).toBeDisplayed();

    });
});