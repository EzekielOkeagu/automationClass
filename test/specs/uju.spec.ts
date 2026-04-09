describe('Esther Testing', () => {
    it('should log successfully', async () => {
     await browser.url('http://automationexercise.com');
     await browser.maximizeWindow();
     await browser.pause(2000);
     await expect($("//img[@src='/static/images/home/logo.png']"));
     await $('a[href="/login"]').click();
     await expect($("//h2[text()='New User Signup!']")).toBeDisplayed();
     await $('input[data-qa="signup-name"]').setValue('Estheraaaa');
     await $('input[data-qa="signup-email"]').setValue('estherodiakaaaaa@yahoo.com');
     await $('//button[@data-qa="signup-button"]').click();
     await browser.pause(2000);
     await expect($('//b[text()="Enter Account Information"]')).toBeDisplayed();
     await $('#id_gender2').click();
     await $('#password').setValue('123');
     await $('#days').selectByAttribute('value', '10');
     await $('#months').selectByAttribute('value', '5');
     await $('#years').selectByAttribute('value', '1995');
     await $('#newsletter').click();
     await $('#optin').click();
     await $('#first_name').setValue('Estheraa');
     await $('#last_name').setValue('Odiaka');
     await $('#company').setValue('StreSERT');
     await $('#address1').setValue('12 Ikrorodu Street');
     await $('#address2').setValue('3 shomolu Street');
     await $('#country').selectByVisibleText('India');
     await $('#state').setValue('Lagos');
     await $('#city').setValue('Ikeja');
     await $('#zipcode').setValue('100001');
     await $('#mobile_number').setValue('08183842695');
     await $('//button[@data-qa="create-account"]').click();
     await expect($('//b[text()="Account Created!"]')).toBeDisplayed();
     await $('//a[@data-qa="continue-button"]').click();
     await browser.pause(2000);
     await expect($('//a[contains(normalize-space(),"Logged in as Estheraaaa")]')).toBeDisplayed();
     await $('//a[@href="/delete_account"]').click();
     await expect($('//b[text()="Account Deleted!"]')).toBeDisplayed();
     await $('//a[@data-qa="continue-button"]').click();

    })

})