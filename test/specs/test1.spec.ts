describe("Automation test1", () => {
    it("should navigate and signup properly", async() => {
        await browser.url("https://automationexercise.com/");
        await expect($("//img[@src='/static/images/home/logo.png']")).toBeDisplayed();
        await $("//a[@href='/login']").click();
        await expect($("//h2[text()='New User Signup!']")).toBeDisplayed();
        await $("//input[@data-qa='signup-name']").setValue("Godbless");
        await $("//input[@data-qa='signup-email']").setValue('godbless@gmail.com');
        await $("//button[@data-qa='signup-button']").click();
        await browser.pause(5000);
        const enterInfo = await $("//b[text()='Enter Account Information']");
        await enterInfo.waitForDisplayed({ timeout: 10000 });
        await $("#id_gender1").click();
        await $("#password").setValue("419914");
        await $("#days").selectByIndex(3);
        await $("#months").selectByAttribute('value','4');
        await $("#years").selectByIndex(5);
        await $("#newsletter").click();
        await $("#optin").click();
        await $("#first_name").setValue("Godbless");
        await $("#last_name").setValue("Amadike");
        await $("#company").setValue("Godbless.inc");
        await $("#address1").setValue("No 1 market rd");
        await $("#address2").setValue("No 1 jym rd");
        await $("#country").selectByAttribute('value', 'United States');
        await $("#state").setValue("Lagos");
        await $("#city").setValue("lagos");
        await $("#zipcode").setValue("4572");
        await $("#mobile_number").setValue("987657676");
        await $("//button[@data-qa='create-account']").click();
        await $("//b[text()='Account Created!']").waitForDisplayed({ timeout: 5000 });
        await $("//a[@data-qa='continue-button']").click();
        const loggedInText = await $("//a[contains(normalize-space(),'Logged in as Godbless')]");
        await loggedInText.waitForDisplayed({ timeout: 10000 });
        await expect($("//i[@class='fa fa-user']")).toBeDisplayed();
        await $("//a[@href='/delete_account']").click();
        await expect($("//b[text()='Account Deleted!']")).toBeDisplayed();
        await $("//a[@data-qa='continue-button']").click();

    })
})