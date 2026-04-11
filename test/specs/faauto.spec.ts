describe('autoexercise', () => {
    it("should navigate to autoexercise properly", async () => {
        
        await browser.url('https://automationexercise.com/');
        
        await expect($('//img[@alt="Website for automation practice"]')).toBeDisplayed();
       
        await $("//a[@href='/login']").click();
       
        await expect($("//h2[text()='New User Signup!']")).toBeDisplayed();
        
        await $("//input[@name='name']").setValue("frans");
        await $("//input[@data-qa='signup-email']").setValue("frans@gmail.com");
        await $("//button[@data-qa='signup-button']").click();
        
        await expect($("//b[text()='Enter Account Information']")).toBeDisplayed();
        await browser.pause(3000);

        await $('#id_gender1').click();
        await $("//input[@data-qa='name']").setValue("frans");
        await $('#password').setValue("4321");
        await $('#days'). selectByVisibleText('5');
        await $('#months'). selectByVisibleText('May');
        await $('#years'). selectByVisibleText('2011');
        
        await $('#newsletter'). click();
        await $('#optin'). click();

        const AddressInformation = await ($('//b[text()="Address Information"]'));
        await (AddressInformation). waitForDisplayed();
        await (AddressInformation). isDisplayed();
        await $('#first_name'). setValue('frans');
        await $('#last_name'). setValue('anos');
        await $('#company'). setValue('westcroft');
        await $('#address1'). setValue('mockview road');
        await $('#address2'). setValue('louis terrence');
        await $('#country'). selectByVisibleText('Canada');
        await $('#state'). setValue('rocsea');
        await $('#city'). setValue('buckland_city');
        await $('#zipcode'). setValue('414');
        await $('#mobile_number'). setValue('4703676290');
        await browser.pause(3000);
        await $('//button[@data-qa="create-account"]'). click();
       await browser.pause(3000);
        
    })
})